import React, { useEffect, useState } from 'react';
import "../styles/cart.css"
import Navbar from '../components/Navbar';
import axios from "axios"
import "../styles/cart.css"
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Cart() {

    const [myArray, setMyArray] = useState([]);

    useEffect(() => {
        // Retrieve the array from local storage when the component mounts
        const storedArray = JSON.parse(localStorage.getItem('productArray')) || [];
        setMyArray(storedArray);
    }, []);

    const handleDelete = (index) => {
        // Create a copy of the array to modify
        const updatedArray = [...myArray];

        // Remove the item at the specified index
        updatedArray.splice(index, 1);

        // Update state and local storage with the modified array
        setMyArray(updatedArray);
        localStorage.setItem('productArray', JSON.stringify(updatedArray));
        window.location.reload()
    };

    const handleQuantityChange = (index, change) => {
        // Create a copy of the array to modify
        const updatedArray = [...myArray];

        // Update the quantity of the item at the specified index
        updatedArray[index].quantity += change;

        // Ensure quantity is not negative
        if (updatedArray[index].quantity < 1) {
            updatedArray[index].quantity = 1;
        }

        // Update state and local storage with the modified array
        setMyArray(updatedArray);
        localStorage.setItem('productArray', JSON.stringify(updatedArray));
        window.location.reload()
    };

    const calculateTotalPrice = (item) => {
        // Calculate the total price for a product based on its quantity
        return item.price * item.quantity;
    };

    return (

        <div className='cart-container'>
            <Navbar />
            <ul className='product-list'>
                {myArray.map((item, index) => (
                    <li className='product' key={index}>
                        <img className='list-img' src={item.img} />
                        <span>{item.name}</span>
                        <span>
                            Total Price: {calculateTotalPrice(item)}
                        </span>
                        <div className='quantity-section'>
                            <button id='decrease-button' onClick={() => handleQuantityChange(index, -1)}><RemoveIcon fontSize='18px'/></button>
                            {item.quantity}
                            <button id='increase-button' onClick={() => handleQuantityChange(index, 1)}><AddIcon fontSize='18px'/></button>
                        </div>
                        <button className='list-buttons' onClick={() => handleDelete(index)}><DeleteIcon fontSize='18px'/></button>
                    </li>

                ))}
            </ul>
        </div>
    )
}

export default Cart;