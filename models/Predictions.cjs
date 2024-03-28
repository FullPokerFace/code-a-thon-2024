const db = require('../db/db_connection.cjs')

class Predictions {
    constructor(state, urban_ratio, predicted_demand, percentage_of_population,percentage_of_asthma,market_share, allergy_score, adjustment, prescription_demand) {
        this.state = state
        this.urban_ratio = urban_ratio
        this.predicted_demand = predicted_demand
        this.percentage_of_population = percentage_of_population
        this.percentage_of_asthma = percentage_of_asthma
        this.market_share = market_share
        this.allergy_score = allergy_score
        this.adjustment = adjustment
        this.prescription_demand = prescription_demand
    }

    save(callback){
        const query = 'INSERT INTO predictions (state, urban_ratio, predicted_demand,percentage_of_population,percentage_of_asthma,market_share,allergy_score,adjustment,prescription_demand) VALUES (?,?,?,?,?,?,?,?,?)'
        const values = [this.state, this.urban_ratio, this.predicted_demand,this.percentage_of_population,this.percentage_of_asthma, this.market_share,this.allergy_score,this.adjustment, this.prescription_demand]

        db.query(query, values, (err, results) =>{
            if (error) {
                return callback(error)
            }
            callback(null, results.insertId);
        })
    }

    // GET ALL HEAT MAP DATA
    static getAllPredictionsData(callback) {
        const query = "SELECT * from predictions";
        
        db.query(query, (err, results) =>{
            if (err) {
                return callback(err)
            }
            const predictionsData = results.map(row => new Predictions(row.state, row.urban_ratio, row.predicted_demand, row.percentage_of_population, row.percentage_of_asthma, row.market_share, row.allergy_score, row.adjustment, row.prescription_demand))
            callback(null, predictionsData);
        })
    }
}

module.exports = Predictions