var mysql = require("mysql");
require("console.table");
var inquirer = require("inquirer")

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "CowardsR2",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  fetchProducts();
});

function fetchProducts(){
    connection.query("SELECT item_id, product_name, price FROM products", function(err, results){
        if (err) throw err;
        console.table(results);
        promtCust();
    })
}

// function promtCust(){
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "itemId",
//             message: "Product Id?"
//         },
//         {

//         }
//     ]).then(function(response){
//         console.log(response.itemId);
//     })
// }

// 