drop database if exists bamazon_db;
create database bamazon_db;
use bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(50) NULL,
  price DECIMAL(7,2) NOT NULL,
  stock_quantity INT NOT NULL DEFAULT '1',
  PRIMARY KEY (item_id)
);
Select * From products;

insert into products(product_name, department_name, price, stock_quantity)
values("tv", "electronics", 300, 6),
      ("screwdriver","tools", 25, 10),
      ("lawn mower", "landscaping", 400, 7),
      ("refrigerator", "appliances", 750, 5),
      ("slow cooker", "appliances", 35, 20),
      ("nerf gun", "toys", 15, 30),
      ("pool", "leisure", 1000, 3),
      ("Joker","movies", 20, 25),
      ("laptop", "electronics", 300, 9),
      ("Toyota Camry","cars", 15000, 2),
      ("pop-up camper", "outdoors", 2500, 1);