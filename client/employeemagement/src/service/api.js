import axios from "axios"
    const url = "http://localhost:8000"
    export const addUser = async(data)=>{ // add user
        try {
            return await axios.post(`${url}/add`,data)
        } catch (error) {
            console.log(`error while calling  add user api`,error)
        }
    }
    export const getUsers = async()=>{ // getAll user
        try {
            return await axios.get(`${url}/all`)
        } catch (error) {
            console.log(`error while calling  add user api`,error)
        }
    }
    export const getUser = async(id)=>{ // get user on Id
        try {
            return await axios.get(`${url}/${id}`)
        } catch (error) {
            console.log(`error while calling  add user api`,error)
        }
    }
    export const editUser = async(user,id)=>{ // edit user
        try {
            return await axios.put(`${url}/${id}`,user)
        } catch (error) {
            console.log(`error while calling  add user api`,error)
        }
    }
    export const getDeleteUser = async(id)=>{ // delete user
        try {
            return await axios.delete(`${url}/${id}`)
        } catch (error) {
            console.log(`error while calling  add user api`,error)
        }
    }