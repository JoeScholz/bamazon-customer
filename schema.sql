
DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

-- Creates the table "people" within animals_db --
CREATE TABLE products (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  product_name VARCHAR(60) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  stock_quantity INTEGER(10) NOT NULL,
  PRIMARY KEY (item_id)
);

-- Creates new rows containing data in all named columns --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fender Jazzmaster", "Electric", 674.99, 1),
("Peavy T45 Electric Bass", "Electric Bass", 499.99, 2),
("Ibanez SR650 4-String Electric Bass Guitar", "Electric Bass", 699.99, 5),
("Taylor 200 Series 210e Deluxe Dreadnought Acoustic-Electric Guitar", "Acoustic-Electric", 1099.00, 2),
("Taylor GS Mini-e Acoustic-Electric Bass Regular", "Acoustic", 399.99, 1);
("Gibson Les Paul Special P-90 Limited Edition Electric Guitar", "Electric", 999.45, 5);
("Gibson SG Standard Gold Series Limited Edition Electric Guitar", "Electric", 1819.99, 3);
("Squier Limited Edition Bullet Telecaster Electric Guitar", "Electric", 149.99, 10);
("Epiphone Limited Edition ES-335 PRO Electric Guitar", "Electric", 499.00, 3);
("ESP LTD James Hetfield Snakebyte Electric Guitar", "Electric", 1199.99, 1);


