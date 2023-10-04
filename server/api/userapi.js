const express = require('express')
const router = express.Router()
module.exports = router

const User = require("../schema/employeeschema")

router.get("/", async (req, res) => {
    let alluser = await User.find()
    res.status(201).json(alluser)
})

// to add new employee
router.post("/", async (req, res) => {
    let newemp = new User({
        name: req.body.name,
        fullname: req.body.fullname,
        mobile: req.body.mobile,
        dof: req.body.dof,
        state: req.body.state,
        district: req.body.district,
        taluka: req.body.taluka,
        village: req.body.village,
        department: req.body.department,
        address: req.body.address,
        photo: req.body.photo
    });
    let newempinfo = await newemp.save();
    res.status(201).json(newempinfo);
});