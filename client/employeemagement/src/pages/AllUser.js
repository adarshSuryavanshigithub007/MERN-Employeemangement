import React, { useEffect } from 'react'
import { getUser, getUsers } from '../service/api'

const AllUser = () => {

    const getAllUsers = async()=>{
        let response = await getUsers()
        console.log(response)
    }
    useEffect(()=>{
        getAllUsers()
    })
    return (
        <div>AllUser</div>
    )
}

export default AllUser