const express = require("express");
const { getPrimes } = require("../controllers/primeController");

const router = express.Router();

router.get("/primes/:N", getPrimes);

module.exports = router;
