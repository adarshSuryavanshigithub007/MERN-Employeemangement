import express  from "express";
import { addUser, deleteuser, edituser, getUser, getUsers } from "../controller/user-controller.js";



const router = express.Router()

router.post('/add', addUser);
router.get('/all', getUsers);
router.get('/:id', getUser);
router.put('/:id', edituser);
router.delete('/:id', deleteuser);



export default router
