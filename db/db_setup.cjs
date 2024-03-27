const fs = require("fs")
let mysql = require('mysql')

let db = mysql.createConnection({
    host: "localhost",
    user: 'root'
  });
  
db.connect(function(err){
    if (err) throw err;
    console.log("Connected to Database")

    db.query("CREATE DATABASE IF NOT EXISTS codeathon", (err, results) => {
        if (err){
            console.error('Error creating database', err)
            return
            }
        console.log('Database codeathon created');
    })

    db.query("USE codeathon", (err, results) => {
        if (err){
            console.error('Error connecting database', err)
            return
            }
        console.log('Connected to codeathon database!');
    })

    let setupQuery = "CREATE TABLE IF NOT EXISTS heatmap(id INT NOT NULL AUTO_INCREMENT,latitude DECIMAL(10,6) NOT NULL,longitude DECIMAL(10,6) NOT NULL,count INT NOT NULL,PRIMARY KEY (id))"
    db.query(setupQuery, (err, results) => {
        if (err){
            console.error('Error setting up table', err)
            return
            }
        console.log('Created heatmap table!');
    })

    db.end((err) => {
        if (err) {
          console.error('Error closing MySQL connection:', err);
          return;
        }
        console.log('DB setup complete. Closed MySQL connection.');
      });
});