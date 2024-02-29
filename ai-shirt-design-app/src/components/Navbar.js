import React, { useState, useEffect, useRef , useContext } from 'react';
import "../styles/navbar.css"
import logo from "../images/logo.png"
import BrushIcon from '@mui/icons-material/Brush';
import { useCookies } from "react-cookie";
import Login from './Login';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const clientId = "726899538432-jjmckcjuugvvg0vlp3ace9dmrhv2jrd3.apps.googleusercontent.com"

function Navbar() {

   
    const [myArray, setMyArray] = useState([]);
    const [user, setUser] = useState({
        profile: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    })

    const [cookies, setCookies] = useCookies(["access_token"])

    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("dropdown-menu")
    }


    useEffect(() => {
        // Retrieve the array from local storage when the component mounts
        const storedArray = JSON.parse(localStorage.getItem('productArray')) || [];
        const user = JSON.parse(window.localStorage.getItem("user"))
        setMyArray(storedArray);
        setUser(user)
        console.log()
    },[]);


    const total_item = myArray.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <>
            <nav className="navbar">
                <div className='logo'>
                    <a href="/"><img className="logo" src={logo} /></a>
                    <a href="/">Ai Shirt Design</a>
                </div>
                <ul>
                    <li><a href="/design">Design <BrushIcon /></a></li>
                    <li><a href="/cart">Cart <ShoppingCartIcon /></a><span id='cart-num'>{total_item}</span></li>
                    {cookies.access_token && 
                    <li>
                        {cookies.acces_token ? <img className='navbar-img' src={user.profile}/> : <img className='navbar-img' src={user.picture}/>}
                        <ul id='sub-menu'>
                            <li><a href='/profile'>Profile</a></li>
                            <li><a href='/profile/designs'>Designs</a></li>
                            <li><a href='/profile/orders'>Orders</a></li>
                            <li><a><Login /></a></li>
                        </ul>
                    </li>}
                    {!cookies.access_token && <li className='sign-in'><a><Login /></a></li>}
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