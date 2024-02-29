import React, { useState, useEffect, useRef } from 'react';
import "../styles/design.css"
import Navbar from '../components/Navbar';
import axios from "axios"

function Design() {

    const [productArray, setProductArray] = useState([]);

    const [tshirtColor, setTshirtColor] = useState('beyaz');

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

    const addToLocalStorageArray = (item) => {
        // Add a new item to the array and update local storage
        const updatedArray = [...productArray, item];
        setProductArray(updatedArray);
        localStorage.setItem('productArray', JSON.stringify(updatedArray));
        
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

    const handleColorChange = (color) => {
        setTshirtColor(color);
      };

    
    return (

        <div className='design-container'>
            <Navbar/>
            <div>
                    
                    <div className='tshirt'>
                      {/* Render the t-shirt image dynamically based on selected color */}
                      <img src={`${process.env.PUBLIC_URL}/${tshirtColor}.png`} alt="T-shirt" />
                    </div>

                    <div className='button-container'>
                        <p>Color:</p>
                        <button id='white' onClick={() => handleColorChange('beyaz')}></button>
                        <button id='red' onClick={() => handleColorChange('kirmizi')}></button>
                        <button id='blue' onClick={() => handleColorChange('mavi')}></button>
                        <button id='gri' onClick={() => handleColorChange('gri')}></button>
                        <button id='sari' onClick={() => handleColorChange('sari')}></button>
                        <button id='yesil' onClick={() => handleColorChange('yesil')}></button>
                        <button id='pembe' onClick={() => handleColorChange('pembe')}></button>
                        <button id='mor' onClick={() => handleColorChange('mor')}></button>
                        
                    </div>
                    
                    <button onClick={() => addToCart(product)}>Add to cart</button>
            </div>


        </div>
    )
}

export default Design;