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



router.delete("/:id",async(req,res)=>{
    let myuser = await User.findById(req.params.id)
    myuser.deleteOne()
    let msg = {"info":"Record Deleted Successfully !"};
    res.status(201).json(msg);
})


router.patch("/", async(req, res)=>{
    // let empdetails = await Employee.findById( req.body.id );
    let userdetails = await User.findById(req.body.id)
    if (!userdetails) {
        return res.status(404).json({ error: "User not found" });
      }
    if(req.body.name!==""){
        userdetails.name = req.body.name
    }
    if(req.body.fullname!==""){
        userdetails.fullname=req.body.fullname
    }
    if(req.body.mobile!==""){
        userdetails.mobile=req.body.mobile
    }
    if(req.body.gender!==""){
        userdetails.gender=req.body.gender
    }
    if(req.body.address!==""){
        userdetails.address=req.body.address
    }
    if(req.body.email!==""){
        userdetails.email=req.body.email
    }
    if(req.body.state!==""){
        userdetails.state=req.body.state
    }
    if(req.body.district!==""){
        userdetails.district=req.body.district
    }
    if(req.body.status!==""){
        userdetails.status=req.body.status
    }
    if(req.body.photo!==""){
        userdetails.photo=req.body.photo
    }

    userdetails.save()
    


})
