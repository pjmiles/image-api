const mongoose = require("mongoose");

const db = mongoose.connect(
  process.env.DBURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  Error => {
    console.log("connected to database");
  }
);

module.exports = db;
