
import { request, response } from "express";
import Userauth from "../../schema/userauth-schema.js";

export const userRegister = async (request, response) => { // Add All user
    const userauth = request.body;
    const newUser = new Userauth(userauth)
    try {
        await newUser.save()
        response.status(201).json(newUser)
    } catch (error) {
        response.status(409).json({ message: error.message })
    }
}