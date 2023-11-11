import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewDetails = () => {
    const {id} = useParams()

let [productlist, updateProduct] = useState({});

const getUser = () => {
    const url = "http://localhost:8000/userlist/" + id;
    console.log(url)
          const postdata = { method: "PUT" }
          fetch(url, postdata)
            .then(response => response.json())
            .then(productArray=>{
                updateProduct(productArray);
            })
        }

useEffect(() => {
    getUser();
}, [id]);
console.log(productlist)

    return (
        <div>ViewDetails</div>
    )
}

export default ViewDetails