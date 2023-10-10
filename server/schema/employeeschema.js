const mongoose = require('mongoose');
const validator = require("validator")
const userStructure = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    fullname: {
        type: String,
        require: true,
        trim: true
    },
    gender: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Not a valid email address");
            }
        },
    },
    mobile: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        minlength: 10,
        maxlength: 10,
    },
    dof: {
        type: String,
        require: true,
        trim: true
    },
    state: {
        type: String,
        require: true,
        trim: true
    },
    district: {
        type: String,
        require: true,
        trim: true
    },

    department: {
        type: String,
        require: true,
        trim: true
    },
    address: {
        type: String,
        require: true,
        trim: true
    },
    status: {
        type: String,
        require: true,

    },
    profileImage:{
        type:String,
        required:false
    }

})

module.exports = mongoose.model("user", userStructure)