import React from 'react';
import Lottie from "lottie-react";
import foodAnimation from '../assets/food-animation.json'

const Home = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse max-w-screen-lg mx-auto">
                <Lottie animationData={foodAnimation} loop={true} />
                <div className='lg:w-1/2'>
                    <h1 className="text-5xl font-bold">Satisfaction Recipe!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-info">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Home;