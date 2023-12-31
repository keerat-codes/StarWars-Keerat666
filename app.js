const express = require('express');
var cors = require('cors')
const app = express();
const path = require('path');
const PORT = 8000;

require('dotenv').config();

const DarkSideRoute = require('./routes/DarkSide');
const HanSolo  = require('./controllers/HanSolo');
const Anakin  = require('./controllers/Anakin');
const sw  = require('./controllers/sw');
const PalpatineRoute = require('./routes/Palpatine');
const StarWarsJokes  = require('./controllers/StarWarsJokes');
app.use('/swJoke', StarWarsJokes);
app.use('Palpatine', PalpatineRoute);
app.use('/darthVader', sw);
app.use('/Anakin', Anakin);
app.use('/solo', HanSolo);
app.use('DarkSide', DarkSideRoute);
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const conn = require('./middlewares/tidb');
console.log("Trying to establish a connection to TiDB...");

if (conn) {
  console.log("Connection to TiDB successful");
} else {
  console.log("Connection to TiDB failed");
}


//Please don't delete this health API
app.use('/api/health', (req, res) => {
    res.send('Hello Autopilot');
  });

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

module.exports = app;