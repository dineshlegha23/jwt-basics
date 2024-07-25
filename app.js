const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
require("express-async-errors");
const errorHandler = require("./middleware/error-handler");
const mainRouter = require("./routes/main");
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static("./public"));

app.use("/api/v1", mainRouter);

app.use(errorHandler);

const startServer = async () => {
  try {
    await connectDB(process.env.MONGODB_USERNAME, process.env.MONGODB_PASSWORD);

    app.listen(3000, () => {
      console.log("Server is running on port:3000");
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
