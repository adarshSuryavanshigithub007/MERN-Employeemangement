const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/myemployee", {
  useNewUrlParser: true,
  useUnifiedTopology: true, // Add this line for the latest Mongoose version
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("Database connection error:", error);
});

db.once("open", () => {
  console.log("Database is connected...");
});

const cors = require("cors");
app.use(cors());
app.use(express.json()); 



const user = require("../api/userapi")
app.use("/userlist",user) //http://localhost:8000/userlist

const register = require("../Authentication/api/registrationapi");
app.use("/account", register); // http://localhost:8000/account


app.listen(8000, function () {
    console.log(`this server is live.......`)
})