// models/Car.js
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  
  make: String,
  model: String,
  year: Number,
  color: String,
  engineType: String,
  transmissionType: String,
  fuelType: String,
  sellerContact: String,
  pic: String,
});

const Car = mongoose.model('Cars', carSchema, 'Cars');

module.exports = Car;
