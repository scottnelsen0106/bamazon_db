
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

  displayProducts();
 
});
 
function displayProducts() {

inquirer.prompt({
  name: "Buy",
  type: "list",
  message: "Would you like to select a product?",
  choices: ["BUY", "EXIT"]

})

.then(function(response){

  if(response.Buy === "BUY") {
    buyProducts();
  } else if (response.Buy ==="EXIT"){
    connection.end();
  }

})
  var productsTable = "SELECT * FROM products";

  connection.query(productsTable, function(err, results){
    if (err) throw err;

      console.table(results)
    
  })
}

function buyProducts() {
  inquirer.prompt([
  {
    name: "ID",
    type: "input",
    message: "Please select an item by id number for purchase",
    filter: Number
    
  },
  {
      name: "itemQty",
      type: "input",
      message: "How many items do you want",
      filter: Number
  }
])

 .then(function(answer) {
   var unitsNeeded = answer.itemQty;
   var idNeeded = answer.ID;
  checkout(unitsNeeded,idNeeded);
})
}

    
 function checkout(ID ,totalNeeded) {
  connection.query("SELECT * FROM products WHERE item_id = " + ID, function(err, res){
    if(err){
      console.log(err)
    }

    if(totalNeeded<=res[0].stock_quantity){
      var cost = res[0].price * totalNeeded;
      connection.query("UPDATE products SET stock_quantity = stock_quantity - " + totalNeeded + " WHERE item_id = " + ID);

      console.log("Your total is " + cost);

      
    }
    displayProducts();
  })
  
 }

 

