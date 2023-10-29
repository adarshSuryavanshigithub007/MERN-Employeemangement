import express,{Router}  from "express";
import { addUser, getUser, getUsers } from "../controller/user-controller.js";


const router = express.Router()

router.post('/add', addUser);
router.get('/all', getUsers);
router.get('/:id', getUser);


export default router
