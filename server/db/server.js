const mongoose = require("mongoose");
 const express = require('express')
const app = express()
mongoose.connect("mongodb://127.0.0.1:27017/myemployee",{useNewUrlParser:true});
const db = mongoose.connection; // to connect with databasev   


db.on("error", (error)=>console.log( error ));
db.on("open", ()=> console.log("Database is Connected..."));   

const cors = require("cors");
app.use(cors());
app.use(express.json()); 



const user = require("../api/userapi")
app.use("/userlist",user) //http://localhost:8000/userlist

const userlogin = require("../Authentication/api/customerapi")
app.use("/customerlogin",userlogin) //http://localhost:8000/customerlogin


app.listen(8000, function () {
    console.log(`this server is live.......`)
})