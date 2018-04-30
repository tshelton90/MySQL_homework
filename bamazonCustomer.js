var mysql = require("mysql");
var inquirer = require("inquirer");
var confirm = require('inquirer-confirm');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected")
    start();
});

const start = () => {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        console.log("Please select the item you would like to purchase")
        results.forEach(item => {
            console.log(`ID# ${item.item_id} \n
                        Product: ${item.product_name}\n
                        Price: ${item.price}\n
                        Quanity in Stock: ${item.stock_quantity}\n
                        Department: ${item.department_name}\n\n\n`);
        });
        itemSelection();
    })
};

const removeStock = (id, quantity) => {
    connection.query("UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
        [
            quantity,
            id
        ],
        function (err, res) {
            console.log('---------------------------')
            itemSelection;
        }
    );
};

const continueShopping = () => {
    confirm('Would you like to shop for any additional items?')
        .then(function confirmed() {
            itemSelection();
        }, function cancelled() {
            console.log("Thank you for shopping with Bamazon! Enjoy your day!")
            connection.end();
        });
}

const itemSelection = () => {
    inquirer.prompt([{
        type: "input",
        name: "id",
        message: "Please select the item(id) you would like to purchase."
    },
    {
        type: "input",
        name: "quantity",
        message: "Please select the quanity of the item you would like to purchase."
    }
    ]).then(function (answer) {
        connection.query('SELECT * FROM products WHERE item_id = ?',
            [
                answer.
                    id
            ],
            function (err, results) {
                if (err) throw err;

                for (var i = 0; i < results.length; i++) {
                    if (answer.quantity > parseInt(results[i].stock_quantity)) {
                        console.log(`There is too low of a quantity of that item to fill your order, please try again`)
                        itemSelection();
                    } else {
                        var price = parseFloat(results[i].price) * parseFloat(answer.quantity);
                        console.log(`Your order has been completed. The total cost of your order comes to $${price}`)
                        removeStock(results[i].item_id, answer.quantity);
                        continueShopping();
                    };
                };


            })
    })

};


