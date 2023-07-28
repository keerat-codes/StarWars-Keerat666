const mongoose = require('mongoose');

const PalpatineSchema = new mongoose.Schema({
name : { type:  String, description: "Required Field", required: true },
age : { type:  Number, description: "Required Field", required: true },
});

module.exports = mongoose.model('Palpatine', PalpatineSchema);