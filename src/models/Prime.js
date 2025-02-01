const mongoose = require("mongoose");

const primeSchema = new mongoose.Schema({
  N: { type: Number, unique: true, required: true },
  primes: { type: [Number], required: true },
});

module.exports = mongoose.model("Prime", primeSchema);
