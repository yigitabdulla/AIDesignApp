import Navbar from "../components/Navbar"
import "../styles/profile.css"
import React, { useState, useEffect } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';

function Profile() {

    const [user, setUser] = useState({})

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
        const user = JSON.parse(window.localStorage.getItem("user"))
        setUser(user)
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
        <>
            <div className="profile-container">
                <Navbar />
                {
                    (windowDimensions.width > 992) ?
                        <div className="profile">
                            <ul className="profile-navbar">
                                <a href="/profile/"><li id="about">About</li></a>
                                <a href="/profile/designs"><li id="designs">Designs</li></a>
                                <a href="/profile/orders"><li id="orders">Orders</li></a>
                            </ul>
                            <div className="about">
                                <span>Full Name: {user.name +" " + user.familyName}</span>
                                <span>Email: {user.email}</span>
                                <span>Phone:</span>
                                <span>Adress:</span>
                            </div>
                        </div>
                        :
                        <div className="mobile-container">
                            <div className="profile-info">
                                <AccountCircleIcon style={{ fontSize: 60 }} />
                                <div className="profile-info-text">
                                    <div>John Doe</div>
                                    <div>johndoe@gmail.com</div>
                                </div>
                            </div>

                            <div className="button-container">
                                <div className="buttons">
                                    <a className="button" href="/profile/orders"><li id="orders">Orders</li></a>
                                    <a className="button" href="/profile/designs"><li id="designs">Designs</li></a>
                                </div>
                                <div className="buttons">
                                    <a className="button" href="/profile/orders"><li id="orders">Buy Again</li></a>
                                    <a className="button" href="/profile/orders"><li id="orders">My reviews</li></a>
                                </div>

                            </div>




                            <div></div>
                        </div>
                }
            </div>



        </>
    )
}

export default Profile