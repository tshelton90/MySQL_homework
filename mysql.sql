CREATE TABLE products (
  item_id INTEGER(15) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price DECIMAL(10,2),
  stock_quantity INTEGER(10),
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Frames", "Home Decor", 40, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Galaxy s9+", "Electronics", 800, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Basketballs", "Sporting Goods", 30, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bottle Openers", "Kitchenware", 25, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sectional Couch", "Furniture", 1100, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sunglasses", "Accessories", 150, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Baby Gate", "Family/Baby", 35, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("HDTV", "Electronics", 1500, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Macbook", "Electronics", 2000, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bookshelf", "Furniture", 600, 15);

