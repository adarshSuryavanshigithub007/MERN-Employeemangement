import mongoose from "mongoose";


const userschema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    mobile: String,
    photo:String,
    birthdate:String,

})

const User =  mongoose.model('user',userschema)

export default User