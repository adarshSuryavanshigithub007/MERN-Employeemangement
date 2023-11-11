import express  from "express";
import { addUser, deleteuser, edituser, getUser, getUsers } from "../controller/user-controller.js";
import { adminRegister } from "../controller/admin/admincontroller.js";
import { userRegister } from "../controller/user/userController.js";



const router = express.Router()

router.post('/add', addUser);
router.get('/all', getUsers);
router.get('/:id', getUser);
router.put('/:id', edituser);
router.delete('/:id', deleteuser);
router.post('/adminregister',adminRegister)
router.post('/userregister',userRegister)



export default router
