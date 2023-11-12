import Admin from "../../schema/admin-schema.js";
import { request, response } from "express";

export const adminRegister = async (request, response) => { // Add All user
    const admin = request.body;
    const newAdmin = new Admin(admin)
    try {
        await newAdmin.save()
        response.status(201).json(newAdmin)
    } catch (error) {
        response.status(409).json({ message: error.message })
    }
}
export const adminLogin = async (request, response) => {
    try {
        const input = { "email": request.body.email, "password": request.body.password };
        const admin = await Admin.findOne(input);

        if (admin) {
            response.status(200).json({ message: "Login Successfull" });
        } else {
            response.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};
