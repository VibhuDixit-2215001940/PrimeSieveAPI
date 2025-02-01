const express = require("express");
const cors = require("cors");
const primeRoutes = require("./routes/primeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Prime Number API is running...");
  });
  

app.use("/api", primeRoutes);

module.exports = app;
