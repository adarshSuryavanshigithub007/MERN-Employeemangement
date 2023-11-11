const mongoose = require('mongoose');
const registrationStructure = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("registration", registrationStructure);