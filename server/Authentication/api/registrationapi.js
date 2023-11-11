const  express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
module.exports = router

const User = require("../Schema/registerationschema")

router.get("/", async (req,res) => {
    let allUser = await User.find()
    res.status(201).json(allUser)

})
router.post("/", async (req, res) => {
    let newuser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
    let newuserinfo = await newuser.save();
    res.status(201).json(newuserinfo);
});

router.put("/",async(req,res)=>{
    
    let input = {"email":req.body.email, "password":req.body.password};
    let allUser = await User.find(input);
    res.status(201).json(allUser);
    
})