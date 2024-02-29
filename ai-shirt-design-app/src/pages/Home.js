import React from 'react';
import "../styles/home.css"
import Navbar from '../components/Navbar';
import DrawIcon from '@mui/icons-material/Draw';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';


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
                        <p className='sub-text'>
                            Elevate your style with personalized shirt designs, put your spin on essentials and order effortlessly from AiDesign.
                        </p>
                        <a href='/design'><button className='text-button'>
                            Create your own design
                        </button></a>
                    </div>
                    <img className="shirt" src="https://images.pexels.com/photos/10250614/pexels-photo-10250614.jpeg" />
                </div>

            </div>

            <div className='titles'>
                <div className='title'><div><DrawIcon /></div>Simple to craft and personalize</div>
                <div className='title'><div><AllInclusiveIcon /></div>Environmentally conscious and local manufacturing</div>
                <div className='title'><div><LocalShippingIcon /></div>Fast and free shipping</div>
                <div className='title'><div><SentimentSatisfiedAltIcon /></div>A guarantee of customer happiness</div>
            </div>
            <h1 className='cards-title'>Start create your own design</h1>

            <div className='cards'>
                <div className='card'>
                    <img src='https://cdn.pixabay.com/photo/2021/10/28/11/51/kids-6749530_1280.jpg'/>
                    <div className='card-text'>
                        <h2>Comfort</h2>
                        <p>Discover our new collection. Comfort and style meet in every size!</p>
                    </div>
                </div>

                <div className='card'>
                    <img src='https://cdn.pixabay.com/photo/2019/07/27/21/42/t-shirt-4367577_1280.jpg'/>
                    <div className='card-text'>
                        <h2>Sizes and colors</h2>
                        <p>Sizes and colors to meet all customer needs</p>
                    </div>
                </div>

                <div className='card'>
                    <img src='https://cdn.pixabay.com/photo/2017/05/28/18/38/t-shirt-2351761_1280.jpg'/>
                    <div className='card-text'>
                        <h2>Detailed printing</h2>
                        <p>High quality prints printed on quality and comfortable fabrics</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;