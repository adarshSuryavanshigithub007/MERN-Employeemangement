const express = require('express')
const router = express.Router()
const multer = require('multer'); // Import Multer for file uploads
const upload = multer({ dest: 'uploads/' }); // Specify the upload directory

module.exports = router

const User = require("../schema/employeeschema")

router.get("/", async (req, res) => {
    let alluser = await User.find()
    res.status(201).json(alluser)
})

//serch

router.get("/:name", async (req, res) => {
    let alluser = await User.find({"name":req.params.name})
    res.status(201).json(alluser)
})

// to add new employee
router.post("/", async (req, res) => {
    let newemp = new User({
        name: req.body.name,
        fullname: req.body.fullname,
        mobile: req.body.mobile,
        gender:req.body.gender,
        email:req.body.email,
        dof: req.body.dof,
        state: req.body.state,
        district: req.body.district,
        department: req.body.department,
        address: req.body.address,
        status:req.body.status,
        photo:req.body.photo
    });
    let newempinfo = await newemp.save();
    res.status(201).json(newempinfo);
});

router.patch("/:id", async(req, res)=>{
    let Userdetails = await User.findById( req.body.id );
    
    if( req.body.name !=""){
        Userdetails.name = req.body.name;
    }

    if( req.body.department !=""){
        Userdetails.department = req.body.department;
    }
    if( req.body.fullname !=""){
        Userdetails.fullname = req.body.fullname;
    }
    if( req.body.mobile !=""){
        Userdetails.mobile = req.body.mobile;
    }
    if( req.body.gender !=""){
        Userdetails.gender = req.body.gender;
    }
    if( req.body.email !=""){
        Userdetails.email = req.body.email;
    }
    if( req.body.dof !=""){
        Userdetails.dof = req.body.dof;
    }
    if( req.body.state !=""){
        Userdetails.state = req.body.state;
    }
    if( req.body.district !=""){
        Userdetails.district = req.body.district;
    }
    if( req.body.address !=""){
        Userdetails.address = req.body.address;
    }

    if( req.body.status !=""){
        Userdetails.status = req.body.status;
    }
    if( req.body.photo !=""){
        Userdetails.photo = req.body.photo;
    }
    Userdetails.save();
    res.status(201).json(Userdetails);
})


router.delete("/:id",async(req,res)=>{
    let myuser = await User.findById(req.params.id)
    myuser.deleteOne()
    let msg = {"info":"Record Deleted Successfully !"};
    res.status(201).json(msg);
})

router.put("/:id",async(req,res)=>{
    let myuser = await User.findById(req.params.id)
    res.status(200).json(myuser);
})
