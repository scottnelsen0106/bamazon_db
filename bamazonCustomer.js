
var mysql = require('mysql');
var inquirer = require('inquirer');


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "scott",

    // Your password
    password: "123456",
    database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;

  displayProducts()
 
});
 
function displayProducts() {
  var productsTable = "SELECT * FROM products";

  connection.query(productsTable, function(err, results){
    if (err) throw err;

      console.table(results)
    
  })
}