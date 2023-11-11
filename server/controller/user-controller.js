
import { request, response } from "express";
import user from "../schema/user-schema.js";
import User from "../schema/user-schema.js";

export const addUser = async (request, response) => { // Add All user
    const user = request.body;
    const newUser = new User(user)
    try {
        await newUser.save()
        response.status(201).json(newUser)
    } catch (error) {
        response.status(409).json({ message: error.message })
    }
}

export const getUsers = async (request, response) => { // Get All user
    try {
        const users = await User.find({})
        response.status(200).json(users)
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}

export const getUser = async (request, response) => { // get user on Id
    try {
        const user = await User.findById(request.params.id)
        response.status(200).json(user)
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}

export const edituser = async (request, response) => { // edit user on Id
    let user = request.body
    const editUser = new User(user)
    try {
        await User.updateOne({ _id: request.params.id }, editUser);
        response.status(201).json(editUser)
    } catch (error) {
        response.status(409).json({ message: error.message })
    }
}

export const deleteuser = async(request,response)=>{ // delete user on Id
    try {
        const user = await User.deleteOne({ _id: request.params.id })
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}




