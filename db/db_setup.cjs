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

    let heatMapTableQuery = "CREATE TABLE IF NOT EXISTS heatmap(id INT NOT NULL AUTO_INCREMENT,latitude DECIMAL(10,6) NOT NULL,longitude DECIMAL(10,6) NOT NULL,count INT NOT NULL,PRIMARY KEY (id))"
    db.query(heatMapTableQuery, (err, results) => {
        if (err){
            console.error('Error setting up table', err)
            return
            }
        console.log('Created heatmap table!');
    })

    let predictionTableQuery = "CREATE TABLE IF NOT EXISTS predictions(id INT NOT NULL AUTO_INCREMENT,state VARCHAR(255),urban_ratio DECIMAL(10,6),predicted_demand INT,percentage_of_population DECIMAL(10,6), percentage_of_asthma DECIMAL(10,6),market_share DECIMAL(10,6), allergy_score DECIMAL(10,6), adjustment DECIMAL(10,6), prescription_demand INT,PRIMARY KEY (id))"
    db.query(predictionTableQuery, (err, results) => {
        if (err){
            console.error('Error setting up table', err)
            return
            }
        console.log('Created predictions table!');
    })

    db.end((err) => {
        if (err) {
          console.error('Error closing MySQL connection:', err);
          return;
        }
        console.log('DB setup complete. Closed MySQL connection.');
      });
});