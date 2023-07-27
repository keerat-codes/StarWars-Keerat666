const mongoose = require('mongoose');

const DarkSideSchema = new mongoose.Schema({
name : { type:  String, description: "Required Field", required: true },
age : { type:  Number, description: "Required Field", required: true },
lightSaberDescription : { type:  Number, description: "Required Field", required: true },
});

module.exports = mongoose.model('DarkSide', DarkSideSchema);