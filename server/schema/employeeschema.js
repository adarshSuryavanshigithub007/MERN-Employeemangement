const mongoose = require('mongoose');

const userStructure = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    fullname: {
        type: String,
        require: true
    },
    mobile: {
        type: String,
        require: true
    },
    dof: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true
    },
    district: {
        type: String,
        require: true
    },
    taluka: {
        type: String,
        require: true
    },
    village: {
        type: String,
        require: true
    },

    department: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    photo: {
        type: String,
        require: true
    }

})

module.exports = mongoose.model("user", userStructure)