import React, { useState, useEffect, useRef , useContext } from 'react';
import "../styles/navbar.css"
import logo from "../images/logo.png"
import BrushIcon from '@mui/icons-material/Brush';
import { useCookies } from "react-cookie";
import Login from './Login';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';


function Navbar() {

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
   
    const [myArray, setMyArray] = useState([]);
    const [user, setUser] = useState({
        picture: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    })

    const [cookies, setCookies] = useCookies(["access_token"])
    const [userCookie,setUserCookie] = useCookies(["user_info"])

    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("dropdown-menu")
    }

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
      };
    
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    };

    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      } else if (event.key === 'Escape') {
        setOpen(false);
      }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);

    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }

      prevOpen.current = open;
    }, [open]);


    useEffect(() => {
        // Retrieve the array from local storage when the component mounts
        const storedArray = JSON.parse(localStorage.getItem('productArray')) || [];
        setMyArray(storedArray);
        console.log(userCookie.user_info)
        setUser(userCookie.user_info)
    },[]);


    const total_item = myArray.reduce((sum, item) => sum + parseInt(item.quantity), 0);

    return (
        <>
            <nav className="navbar">
                <div className='logo'>
                    <a href="/"><img className="logo" src={logo} /></a>
                    <a href="/">Ai Shirt Design</a>
                </div>
                <ul>
                    <li><a href="/products">Products <SearchIcon /></a></li>
                    <li><a href="/design">Design <BrushIcon /></a></li>
                    <li><a href="/cart">Cart <ShoppingCartIcon /></a><span id='cart-num'>{total_item}</span></li>
                    {cookies.access_token && 
                    <li id='mu-menu'>
                        <Stack direction="row" spacing={2}>
                            <div>
                                <Button
                                ref={anchorRef}
                                id="composition-button"
                                aria-controls={open ? 'composition-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={handleToggle}
                                style={{color:'black'}}
                                >
                                <img className='navbar-img' src={user.picture} />
                                <ArrowDropDownIcon/>
                                </Button>
                                <Popper
                                open={open}
                                anchorEl={anchorRef.current}
                                role={undefined}
                                placement="bottom-start"
                                transition
                                disablePortal
                                >
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                    {...TransitionProps}
                                    style={{
                                        transformOrigin:
                                        placement === 'bottom-start' ? 'left top' : 'left bottom',
                                    }}
                                    >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList
                                            autoFocusItem={open}
                                            id="composition-menu"
                                            aria-labelledby="composition-button"
                                            onKeyDown={handleListKeyDown}
                                            style={{display: 'flex', alignItems: 'center', justifyContent: 'center',textAlign: 'center'}}
                                        >
                                            <MenuItem style={{margin: 'auto'}} onClick={handleClose}><a href='/profile'>Profile</a></MenuItem>
                                            <MenuItem style={{margin: 'auto'}} onClick={handleClose}><a href='/profile/orders'>Orders</a></MenuItem>
                                            <MenuItem style={{margin: 'auto'}} onClick={handleClose}><a href='/profile/designs'>Designs</a></MenuItem>
                                            <MenuItem style={{margin: 'auto'}} onClick={handleClose}>{cookies.access_token &&<a><Login /></a>}</MenuItem>
                                        </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                    </Grow>
                                )}
                                </Popper>
                            </div>
                        </Stack>
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