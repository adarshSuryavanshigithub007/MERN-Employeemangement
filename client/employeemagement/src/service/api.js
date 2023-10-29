import axios from "axios"


    const url = "http://localhost:8000"

    export const addUser = async(data)=>{
        try {
            return await axios.post(`${url}/add`,data)
        } catch (error) {
            console.log(`error while calling  add user api`,error)
        }
    }

    export const getUsers = async()=>{
        try {
            return await axios.get(`${url}/all`)
        } catch (error) {
            console.log(`error while calling  add user api`,error)
        }
    }

    export const getUser = async(id)=>{
        try {
            return await axios.get(`${url}/${id}`)
        } catch (error) {
            console.log(`error while calling  add user api`,error)
        }
    }