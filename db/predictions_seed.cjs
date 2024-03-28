const fs = require("fs")
const db = require('./db_connection.cjs')

fs.readFile('db/predictions_data.json', 'utf-8', (err, data) => {
    if (err){
        console.error('Error reading JSON file.', err)
        return
    }
    parsed_data = JSON.parse(data)

    const insertQuery = 'INSERT INTO predictions (state, urban_ratio, predicted_demand, percentage_of_population, percentage_of_asthma, market_share, allergy_score, adjustment, prescription_demand) VALUES (?,?,?,?,?,?,?,?,?)'
    console.log("Inserting predictions data")

    parsed_data.forEach( record => {
        const {state, urban_ratio, predicted_demand, percentage_of_population, percentage_of_asthma, market_share, allergy_score, adjustment, prescription_demand} = record
        const values = [state, urban_ratio, predicted_demand, percentage_of_population, percentage_of_asthma, market_share, allergy_score, adjustment, prescription_demand]
        db.query(insertQuery, values, (err, results) => {
            if (err){
                console.error('Error inserting data.', err)
                return
            }
        })
    })
    console.log('Predictions seed complete!');

    db.end((err) => {
        if (err) {
          console.error('Error closing MySQL connection:', err);
          return;
        }
        console.log('MySQL connection closed.');
      });
})