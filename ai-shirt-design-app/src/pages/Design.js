import React, { useState , useEffect } from 'react';
import "../styles/design.css"
import Navbar from '../components/Navbar';
import axios from "axios"

function Design() {
    const [productArray, setProductArray] = useState([]);

    useEffect(() => {
        // Retrieve the array from local storage when the component mounts
        const storedArray = JSON.parse(localStorage.getItem('productArray')) || [];
        setProductArray(storedArray);
      }, []);

    const addToCart = async (product) => {

        try {
            const added_product = await axios.post("http://localhost:8000/cart/add", product)
            addToLocalStorageArray(product)
            console.log(added_product.statusText)
            
        } catch (error) {
            console.error(error)
        }

    }

    const send = async (type) => {
        try {
            const response = await fetch("https://localhost:7253/api/types/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(type),
            });
    
            console.log('Response status:', response.status);
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const addedType = await response.json();
            console.log('Added type:', addedType);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    const addToLocalStorageArray = (item) => {
        // Add a new item to the array and update local storage
        const updatedArray = [...productArray, item];
        setProductArray(updatedArray);
        localStorage.setItem('productArray', JSON.stringify(updatedArray));
        window.location.reload()
      };

    const product = {
        id: "1",
        name: "tshirt",
        created_date: "11.09.2001",
        price: "200",
        pictures: "sssssss",
        cart_id: "1",
        quantity: 1,
        img: "https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008_640.png"
    }

    const type = {
        name: "asdasdkljasdkhjasılşkdjaskljdaklsjdkjashd",
    }

    return (

        <div className='design-container'>
            <Navbar />
            <button onClick={() => addToCart(product)}>Add to cart</button>
            <input type='text'></input>
            <button onClick={() => send(type)}>send</button>
        </div>
    )
}

export default Design;