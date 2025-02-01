require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./src/db/connect");
const app = require("./src/app");

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
