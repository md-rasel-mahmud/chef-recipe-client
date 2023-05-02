import React from 'react';
import Lottie from "lottie-react";
import foodAnimation from '../assets/food-animation.json'
import { FaArrowRight } from 'react-icons/fa'
import { useLoaderData } from 'react-router-dom';
import Chef from '../components/homeSection/Chef';

const Home = () => {

    const chefs = useLoaderData()
    console.log(chefs);

    return (
        <>
            <header className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse max-w-screen-lg mx-auto">
                    <Lottie animationData={foodAnimation} loop={true} />
                    <div className='lg:w-4/5'>
                        <h1 className="text-5xl font-bold">Satisfaction Recipe!</h1>
                        <p className="py-6">A satisfaction recipe is a meal that leaves you feeling full and content. It includes a balance of flavors, proteins, complex carbohydrates, healthy fats, and fiber-rich ingredients. Examples include soups, roasted vegetables, and stir-fries.</p>
                        <button className="btn btn-accent">Get Started <FaArrowRight className='ml-2' /> </button>
                    </div>
                </div>
            </header>
            <main>
                 {/* Chefs section  */}
                <div className="grid grid-cols-3 gap-20 my-10 max-w-screen-lg mx-auto">
                    {
                        chefs.map(chef => <Chef key={chef.id} chef={chef}/>)
                    }
                </div>
            </main>
        </>
    );
};

export default Home;