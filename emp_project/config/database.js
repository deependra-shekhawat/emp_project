const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env file

const connectionString = process.env.DB_CONNECTION_STRING;

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("DATABASE connection is Established");
});

module.exports = db;
