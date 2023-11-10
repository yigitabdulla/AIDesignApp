import Navbar from "../components/Navbar"
import "../styles/orders.css"
import { styled } from '@mui/material/styles';
import React, { useState, useEffect } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});


function Orders() {

    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const handleResize = () => {
        setWindowDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        // Check if window is defined (for example, during server-side rendering)
        if (typeof window !== 'undefined') {
            // Add event listener on component mount
            window.addEventListener('resize', handleResize);

            // Remove event listener on component unmount
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []); // Empty dependency array means this effect will only run on mount and unmount


    return (
        <div className="orders-container">
            <Navbar />
            {(windowDimensions.width > 992) ?
                <div className="profile">
                    <ul className="profile-navbar">
                        <a href="/profile/"><li id="about">About</li></a>
                        <a href="/profile/designs"><li id="designs">Designs</li></a>
                        <a href="/profile/orders"><li id="orders">Orders</li></a>
                    </ul>
                    <div className="main">
                        <div className="orders">
                            <div className="order">
                                <div className="img-container"><img src="https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008_640.png" /></div>
                                <div className="order-info">
                                    <div className="order-list">
                                        <div className="order-title">Order ID</div>
                                        <div>1019082</div>
                                    </div>
                                    <div className="order-list">
                                        <div className="order-title">Order Date</div>
                                        <div>22.10.2023</div>
                                    </div>
                                    <div className="order-list">
                                        <div className="order-title">Buyer</div>
                                        <div>Abdulla Yiğit</div>
                                    </div>
                                    <div className="order-list">
                                        <div className="order-title">Address</div>
                                        <div>Eri cahs</div>
                                    </div>
                                </div>

                                <button className="order-btn">More Info</button>
                            </div>


                        </div>
                    </div>
                </div>
                :
                <div className="mobile-orders">
                    <div className="main">
                        <div className="orders">
                            <div className="order">
                                <div className="order-info">
                                    <div className="order-item">
                                        <div className="order-list">
                                            <div className="order-title">Order Date</div>
                                            <div>22.10.2023</div>
                                        </div>
                                        <div className="order-list">
                                            <div className="order-title">Price</div>
                                            <div>200</div>
                                        </div>
                                    </div>
                                    <div><button className="order-btn">More Info <ArrowRightIcon/></button></div>

                                </div>
                                <div className="img-container"><img src="https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008_640.png" /></div>

                            </div>


                        </div>
                    </div>

                </div>
            }
        </div>
    )
}

export default Orders;