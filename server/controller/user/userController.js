
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
export const userLogin = async (request, response) => {
    try {
        const input = { "email": request.body.email, "password": request.body.password };
        const user = await Userauth.findOne(input);

        if (user) {
            response.status(200).json({ message: "Login Successfull" });
        } else {
            response.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};