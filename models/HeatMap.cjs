const db = require('../db/db_connection.cjs')

class Heatmap {
    constructor(latitude, longitude, count) {
        this.latitude = latitude
        this.longitude = longitude
        this.count = count
    }

    save(callback){
        const query = 'INSERT INTO heatmap (latitude, latitude, count) VALUES (?,?,?)'
        const values = [this.latitude, this.longitude, this.count]

        db.query(query, values, (err, results) =>{
            if (error) {
                return callback(error)
            }
            callback(null, results.insertId);
        })
    }

    // GET ALL HEAT MAP DATA
    static getAllHeatMapData(callback) {
        const query = "SELECT * from heatmap";
        
        db.query(query, (err, results) =>{
            if (err) {
                return callback(err)
            }
            const heatMapRecords = results.map(row => new Heatmap(row.latitude, row.longitude, row.count))
            callback(null, heatMapRecords);
        })
    }
}

module.exports = Heatmap