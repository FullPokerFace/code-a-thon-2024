const fs = require("fs")
const db = require('./db_connection.cjs')

fs.readFile('db/data.json', 'utf-8', (err, data) => {
    if (err){
        console.error('Error reading JSON file.', err)
        return
    }
    parsed_data = JSON.parse(data)

    const insertQuery = "INSERT INTO heatmap (latitude, longitude, count) VALUES (?,?,?)";

    parsed_data.forEach( record => {
        const {latitude, longitude, count} = record
        const values = [latitude, longitude, count]
        db.query(insertQuery, values, (err, results) => {
            if (err){
                console.error('Error inserting data.', err)
                return
            }
            console.log('Record inserted with ID', results.insertId);
        })
    })

    db.end((err) => {
        if (err) {
          console.error('Error closing MySQL connection:', err);
          return;
        }
        console.log('MySQL connection closed.');
      });
})