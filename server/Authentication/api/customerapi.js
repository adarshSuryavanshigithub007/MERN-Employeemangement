const  express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
module.exports = router

const User = require("../Schema/userSchema")

router.post("/", async (req, res) => {
    let newuser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        photo:req.body.photo
    });
    let newuserinfo = await newuser.save();
    res.status(201).json(newuserinfo);
});