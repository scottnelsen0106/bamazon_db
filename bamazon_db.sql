drop database if exists bamazon_db;
create database bamazon_db;
use bamazon_db;

create table products (
item_id  int auto_increment not null,
product_name varchar(30) not null,
department_name varchar(30) not null,
price int not null,
stock_quantity int,
primary key(item_id)
);

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