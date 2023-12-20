import React from 'react';
import "../styles/home.css"
import Navbar from '../components/Navbar';
import DrawIcon from '@mui/icons-material/Draw';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Home() {

    return (

        <div className='home-container'>
            <Navbar />
            <div className='presentation'>
                <div className='main'>
                    <div className='left'>
                        <p className='text'>
                            Unleash your creativity by designing, customizing, and printing your own unique products
                        </p>
                        <p>
                            Elevate your style with personalized shirt designs—put your spin on essentials and order effortlessly from AiDesign.
                        </p>
                        <button className='text-button'>
                            Create your own design
                        </button>
                    </div>
                    <img className="shirt" src="https://cdn.pixabay.com/photo/2014/04/02/10/36/man-303968_640.png" />
                </div>

            </div>

            <div className='titles'>
                <div className='title'><div><DrawIcon /></div>Simple to craft and personalize</div>
                <div className='title'><div><AllInclusiveIcon /></div>Environmentally conscious and local manufacturing.</div>
                <div className='title'><div><LocalShippingIcon /></div>Fast and free shipping</div>
                <div className='title'><div><SentimentSatisfiedAltIcon /></div>A guarantee of customer happiness</div>
            </div>
            <h1 className='cards-title'>Start create your own design</h1>

            <div className='cards'>
                <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: '#1c1c1c' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="250"
                            image="https://cdn.pixabay.com/photo/2021/10/28/11/51/kids-6749530_1280.jpg"
                            alt="img"
                        />
                        <CardContent style={{ backgroundColor: '#transparent' }}>
                            <Typography gutterBottom variant="h5" component="div" color="white">
                                Comfort
                            </Typography>
                            <Typography variant="body2" color="white">
                                Discover our new collection. Comfort and style meet in every size!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: '#1c1c1c' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="250"
                            image="https://cdn.pixabay.com/photo/2019/07/27/21/42/t-shirt-4367577_1280.jpg"
                            alt="img"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="white">
                                Sizes and colors
                            </Typography>
                            <Typography variant="body2" color="white">
                                Sizes and colors to meet all customer needs
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: '#1c1c1c' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="250"
                            image="https://cdn.pixabay.com/photo/2017/05/28/18/38/t-shirt-2351761_1280.jpg"
                            alt="img"
                        />
                        <CardContent >
                            <Typography gutterBottom variant="h5" component="div" color="white">
                                Detailed printing
                            </Typography>
                            <Typography variant="body2" color="white">
                                High quality prints printed on quality and comfortable fabrics
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>

        </div>
    )
}

export default Home;