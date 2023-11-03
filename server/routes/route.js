import express,{Router}  from "express";
import { addUser, edituser, getUser, getUsers } from "../controller/user-controller.js";



const router = express.Router()

router.post('/add', addUser);
router.get('/all', getUsers);
router.get('/:id', getUser);
router.get('/:id', edituser);

export default router
