import React, { useState } from 'react';
import "../styles/design.css"
import Navbar from '../components/Navbar';
import axios from "axios"

function Design() {

    const addToCart = async (product) => {

        try {
            const response = await axios.post("http://localhost:8000/cart/add", product)
            
        } catch (error) {
            console.error(error)
        }

    }

    const product = {
        id: "1",
        name: "tshirt",
        created_date: "11.09.2001",
        price: "200",
        pictures: "sssssss",
        cart_id: "1",
    }

    return (

        <div className='design-container'>
            <Navbar />
            <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
    )
}

export default Design;