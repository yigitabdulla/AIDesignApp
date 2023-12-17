import React from 'react';
import "../styles/home.css"
import Navbar from '../components/Navbar';

function Home() {
    return (

        <div className='home-container'>
            <Navbar />
            <div className='presentation'>
                <div className='main'>
                    <div className='left'>
                        <p className='text'>
                            Unlock the potential of your fashion ideas with the power of AI! Welcome to our AI-powered clothing design platform,
                            where your style dreams become reality. It's as simple as pie-just imagine, create, and watch as AI transforms your
                            ideas into fabulous fashion.<br /><br />
                            With our user-friendly AI tools, you can easily customize, experiment, and perfect your
                            designs. We're here to make your creative journey a breeze. No limits, no fuss-just your imagination at the helm,
                            with AI precision as your co-pilot. Join us on this exciting fashion adventure, where the future meets style.<br /><br />
                            Say goodbye to fashion frustrations and hello to your dream wardrobe. Let's create it together, effortlessly and
                            brilliantly!
                        </p>
                        <button className='text-button'>
                            Create your own design
                        </button>
                    </div>
                    <img className="shirt" src="https://cdn.pixabay.com/photo/2014/04/02/10/36/man-303968_640.png" />
                </div>

            </div>
        </div>
    )
}

export default Home;