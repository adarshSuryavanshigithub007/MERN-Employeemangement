import mongoose from "mongoose";


const userschema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    mobile: String

})

const user =  mongoose.model('user',userschema)

export default user