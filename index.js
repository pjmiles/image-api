require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./config/database");
const imageRoutes = require("./route/imageRoutes");

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Base route and API calls
app.use("/uploads", imageRoutes);

// sever and database start
const start = async (error, next) => {
  try {
    await db;
    app.listen(process.env.PORT, () => {
      console.log(`Server started on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();

// Default error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
