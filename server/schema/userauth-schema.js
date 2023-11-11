import mongoose from "mongoose";

const userauthschema = mongoose.Schema({
    username: String,
    email: String,
    password:String
})

const Userauth =  mongoose.model('userauth',userauthschema)

export default Userauth