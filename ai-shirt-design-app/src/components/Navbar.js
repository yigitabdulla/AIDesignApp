import React, { useState,useEffect } from 'react';
import "../styles/navbar.css"
import logo from "../images/logo.png"
import BrushIcon from '@mui/icons-material/Brush';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import Logout from './Logout';
import Login from './Login';
import {gapi} from 'gapi-script'

const clientId = "726899538432-jjmckcjuugvvg0vlp3ace9dmrhv2jrd3.apps.googleusercontent.com"

function Navbar() {

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: ""
            })
        }

        gapi.load('client:auth2',start)
    })

    const [signed,setSigned] = useState(false)

    return (
        <nav className="navbar">
            <div className='logo'>
                <a href="/"><img className="logo" src={logo} /></a>
                <a href="/">Ai Shirt Design</a>
            </div>
            <ul>
                <li><a href="/design">Design <BrushIcon /></a></li>
                {signed ? <li><a href="/profile">Profile <AccountCircleIcon /></a></li> : <li className='sign-in'><a><Login/></a></li>}
            </ul>
        </nav>
    )
}

export default Navbar;