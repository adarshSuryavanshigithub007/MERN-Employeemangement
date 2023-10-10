const mongoose = require('mongoose')

const userStructure = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:false
    }

})

module.exports = mongoose.model("customer",userStructure)