import  Express  from "express";
import connection from "./database/db.js";
import cors from 'cors'
import routes from './routes/route.js'
import bodyParser from "body-parser";
const app = Express();
app.use(cors())
app.use(bodyParser.json({extends:true}))
// app.use(bodyParser.urlencoded({extends:true}))
app.use('/', routes);

const PORT = 8000;


connection()


app.listen(PORT,()=>console.log(`server is running ${PORT}`))