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
    connection.query("SELECT item_id, product_name, price, stock_quantity FROM products WHERE stock_quantity > 0", function(err, results){
        if (err) throw err;
        console.table(results);
        promtCust(results);
    })
}

function promtCust(data){
    inquirer.prompt([
        {
            type: "input",
            name: "item_id",
            message: "Product ID?"
        },
        {
            type: "input",
            name: "stock_quantity",
            message: "Quantity?"
        }
    ]).then(function (response){

      var custChoice = response.item_id;
      
      for(var i = 0; i < data.length; i++){

        if(parseInt(custChoice) === data[i].item_id){
          
          if(parseInt(response.stock_quantity) <= data[i].stock_quantity){
            
            var inventory = data

            console.log("Items in stock.");
            var productInfo = data[i]
            connection.query("UPDATE products SET ? WHERE ?",[
              {
              stock_quantity: (data[i].stock_quantity - parseInt(response.stock_quantity))
              },
              {
              item_id: parseInt(custChoice)
              }
            ],function(err) {
                if (err) throw err;
                console.log("Order accepted." +
                            "\n" + productInfo.product_name + '(' + response.stock_quantity + ')' +
                            "\n Total: $" + (productInfo.price * parseInt(response.stock_quantity))
                            );
                fetchProducts()
                return
              }
            )
            }else {
              console.log("Not enough stock. " + custChoice.stock_quantity);
              fetchProducts();
              return
            }
          }
        }       
        console.log("Item ID doesn't exist.")
        fetchProducts();
    })
  }
  
