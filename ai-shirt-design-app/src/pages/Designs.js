import Navbar from "../components/Navbar"
import "../styles/designs.css"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import React, { useState, useEffect } from 'react';

function Designs() {

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
        <div className="design-container">
            <Navbar />
            {(windowDimensions.width > 992) ?
                <div className="profile">
                    <ul className="profile-navbar">
                        <a href="/profile/"><li id="about">About</li></a>
                        <a href="/profile/designs"><li id="designs">Designs</li></a>
                        <a href="/profile/orders"><li id="orders">Orders</li></a>
                    </ul>
                    <div className="designs">
                        <ImageList className="image-list">
                            {itemData.map((item) => (
                                <ImageListItem key={item.img} className="image-item">
                                    <img
                                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        src={`${item.img}?w=248&fit=crop&auto=format`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                    <ImageListItemBar
                                        title={item.title}
                                        subtitle={<span>by: {item.author}</span>}
                                        position="below"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                </div>
                :
                <div className="mobile-designs">
                    <div className="designs">
                        <ImageList className="image-list">
                            {itemData.map((item) => (
                                <ImageListItem key={item.img} className="image-item">
                                    <img
                                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        src={`${item.img}?w=248&fit=crop&auto=format`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                    <ImageListItemBar
                                        title={item.title}
                                        subtitle={<span>by: {item.author}</span>}
                                        position="below"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                </div>
            }
        </div>
    )
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        author: '@bkristastucchio',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@nolanissac',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        author: '@hjrc33',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
        author: '@katie_wasserman',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        author: '@silverdalex',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
        author: '@shelleypauls',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
        author: '@peterlaster',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        author: '@southside_customs',
    },
];

export default Designs