const db = require('./db_connection.cjs')


function AddHeatMapDataToDatabase(){
    const randomCount = Math.floor(Math.random() * 5 + 1);
    const randomLat = Number(`38.${Math.floor(Math.random() * 999)}`);
    const randomLng = Number(`-90.${Math.floor(Math.random() * 999)}`);

    const insertQuery = "INSERT INTO heatmap (latitude, longitude, count) VALUES (?,?,?)";

    const heatmap_data = [randomLat, randomLng, randomCount]

    db.query(insertQuery, heatmap_data, (err, results) => {
        if (err){
            console.error('Error inserting data.', err)
            return
        }
        console.log('Record inserted with ID', results.insertId);
    })
}

setInterval(AddHeatMapDataToDatabase, 5000)