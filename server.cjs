const express = require('express')
const bodyParser = require('body-parser')
const HeatMap = require('./models/HeatMap.cjs')
const Predictions = require('./models/Predictions.cjs')
const cors = require('cors')
const path = require('path')
const { error } = require('console')

const app = express()

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.resolve('./public')));

app.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

app.get('/', (req, res) => {
  data = HeatMap.getAllHeatMapData((err, heatMapRecords)=>{
    if (err) {
      console.error("Error retrieving SneezeMap Records", err)
      return
    }
    console.log(heatMapRecords)
    res.json(heatMapRecords)
  })
})

app.get('/predictions', (req, res) => {
  data = Predictions.getAllPredictionsData((err, predictionRecords)=>{
    if (err) {
      console.error("Error retrieving Predictions Records", err)
      return
    }
    console.log(predictionRecords)
    res.json(predictionRecords)
  })
})


app.listen(3000, () => console.log('SneezeMap backend is listening on port 3000.'));