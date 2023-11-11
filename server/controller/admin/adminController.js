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