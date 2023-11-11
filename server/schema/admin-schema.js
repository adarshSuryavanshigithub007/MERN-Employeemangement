import mongoose from "mongoose";

const adminschema = mongoose.Schema({
    username: String,
    email: String,
    password:String
})

const Admin =  mongoose.model('adminauth',adminschema)

export default Admin