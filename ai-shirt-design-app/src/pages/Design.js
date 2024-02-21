import React, { useState, useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import "../styles/design.css"
import Navbar from '../components/Navbar';
import axios from "axios"

function Design() {
    const [productArray, setProductArray] = useState([]);
    const canvasRef = useRef(null);
    const canvas = new fabric.Canvas(canvasRef.current);

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

    const handleCustomPictureChange = (e) => {
        const reader = new FileReader();

        reader.onload = (event) => {
            const imgObj = new Image();
            imgObj.src = event.target.result;

            imgObj.onload = () => {
                const img = new fabric.Image(imgObj);
                img.scaleToHeight(300);
                img.scaleToWidth(300);

                const canvasCenter = {
                    top: canvas.height / 2 - img.height / 2,
                    left: canvas.width / 2 - img.width / 2,
                };

                img.set({ top: canvasCenter.top, left: canvasCenter.left });
                

                canvas.add(img);
                canvas.renderAll();
            };
        };

        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
    };


    return (

        <div className='design-container'>
            <Navbar />
            <div className='main'>
                <div className='controllers'>
                    <div>
                        <label htmlFor="tshirt-custompicture">Upload your own design: </label>
                        <input type="file" id="tshirt-custompicture" onChange={handleCustomPictureChange} />
                    </div>
                    <button onClick={() => addToCart(product)}>Add to cart</button>
                </div>
                <div id="tshirt-div">
                    <img
                        alt='tshirt'
                        id="tshirt-backgroundpicture"
                        src="https://cdn.pixabay.com/photo/2017/01/13/04/56/t-shirt-1976334_1280.png"
                    />
                    <div id="drawingArea" className="drawing-area">
                        <div className="canvas-container">
                            <canvas id="tshirt-canvas" width="200" height="400" ref={canvasRef}></canvas>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Design;