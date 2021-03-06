const mongoose = require("mongoose");

const db = mongoose.connect(
  process.env.DBURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  err => {
    if(err) console.log(err)
    console.log("connected to database");
  }
);

module.exports = db;
