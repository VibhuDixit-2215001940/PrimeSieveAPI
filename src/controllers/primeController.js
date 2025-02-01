const Prime = require("../models/Prime");

const sieveOfEratosthenes = (n) => {
  let primes = Array(n + 1).fill(true);
  primes[0] = primes[1] = false;
  
  for (let i = 2; i * i <= n; i++) {
    if (primes[i]) {
      for (let j = i * i; j <= n; j += i) {
        primes[j] = false;
      }
    }
  }
  return primes.map((isPrime, i) => isPrime ? i : null).filter(Boolean);
};

const getPrimes = async (req, res) => {
  const N = parseInt(req.params.N);

  if (isNaN(N) || N < 2) {
    return res.status(400).json({ error: "Invalid input, N must be ≥ 2" });
  }

  try {
    let cachedPrimes = await Prime.findOne({ N });

    if (cachedPrimes) {
      return res.json({ primes: cachedPrimes.primes });
    }

    let primes = sieveOfEratosthenes(N);

    await Prime.create({ N, primes });

    res.json({ primes });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getPrimes };
