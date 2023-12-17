import React, { useState, useEffect, useRef } from 'react';
import "../styles/navbar.css"
import logo from "../images/logo.png"
import BrushIcon from '@mui/icons-material/Brush';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useCookies } from "react-cookie";
import Login from './Login';
import { gapi } from 'gapi-script'
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const clientId = "726899538432-jjmckcjuugvvg0vlp3ace9dmrhv2jrd3.apps.googleusercontent.com"

function Navbar() {

    const [cookies,setCookies] = useCookies(["access_token"])

    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("dropdown-menu")
    }

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: ""
            })
        }

        gapi.load('client:auth2', start)
    })

    return (
        <>
            <nav className="navbar">
                <div className='logo'>
                    <a href="/"><img className="logo" src={logo} /></a>
                    <a href="/">Ai Shirt Design</a>
                </div>
                <ul>
                    <li><a href="/design">Design <BrushIcon /></a></li>
                    <li><a href="/cart">Cart <ShoppingCartIcon /></a><span>0</span></li>
                    {cookies.access_token && <li><a href="/profile">Profile <AccountCircleIcon /></a></li>}
                    <li className='sign-in'><a><Login /></a></li>
                </ul>
                <div className="toggle-button" onClick={showNavbar}>
                    <MenuIcon style={{ color: 'white' }} />
                </div>
            </nav>

            <div className="dropdown-close" ref={navRef}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/design">Design</a></li>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </div>

        </>
    )
}

export default Navbar;