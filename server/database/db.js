import mongoose from "mongoose";

const connection = async()=>{
    const url="mongodb://127.0.0.1:27017/myemployee"
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology:true});
        console.log(`database connected succesfully`)
    } catch (error) {
        console.log(`Error while connecting`,error)
        
    }
}

export default connection;

// http://localhost:8000