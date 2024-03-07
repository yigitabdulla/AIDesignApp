import React, { useState , useEffect } from 'react'
import "../styles/products.css"
import Navbar from "../components/Navbar"
import View from '../components/View'
import axios from "axios"


function Products() {

    const [products,setProducts] = 
    useState([{id:1,name:"laptop", price:5000, image:"https://media.wired.com/photos/64daad6b4a854832b16fd3bc/master/pass/How-to-Choose-a-Laptop-August-2023-Gear.jpg", created_date: "11.09.2001",cart_id: "1",quantity:1,},
            {id:2,name:"telefon",price:4000, image:"https://img.freepik.com/free-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1709424000&semt=sph", created_date: "11.09.2001",cart_id: "1",quantity:1,},
            {id:3,name:"tablet", price:3000, image:"https://images-cdn.ubuy.qa/633b51122af1ce605a57ae50-10-1.jpg", created_date: "11.09.2001",cart_id: "1",quantity:1,}])

    const [productArray, setProductArray] = useState([]);

    useEffect(() => {
        const storedArray = JSON.parse(localStorage.getItem('productArray')) || [];
        setProductArray(storedArray);
    }, []);

    const addToLocalStorageArray = (item) => {
        const updatedArray = [...productArray, item];
        setProductArray(updatedArray);
        localStorage.setItem('productArray', JSON.stringify(updatedArray));
        
    };


    const addToCart = async (id,name,price,image,cart_id,quantity,created_date) => {
        console.log(name,price,image)

        try {
            const product = {
                name: name,
                price: price,
                image: image,
                cart_id: cart_id,
                quantity: quantity,
                created_date: created_date,
            }
            console.log(product)
            const added_product = await axios.post("http://localhost:8000/cart/add", product)
            addToLocalStorageArray(product)
            console.log(added_product.statusText)

        } catch (error) {
            console.error(error)
        }
    }

  return (
    <>
        <Navbar />
        <div className='products-container'>
        
            <View products={products} addToCart={addToCart}/>
         </div>
    </>
    
  )
}

export default Products