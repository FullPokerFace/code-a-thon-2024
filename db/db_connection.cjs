let mysql = require('mysql')

let con = mysql.createConnection({
  host: "localhost",
  user: 'root',
  database: 'codeathon'
});

con.connect(function(err){
  if (err) throw err;
  console.log("Connected to Database")
});

module.exports = con;