import React from 'react';
import Lottie from "lottie-react";
import foodAnimation from '../assets/food-animation.json'
import { FaArrowRight } from 'react-icons/fa'
import { useLoaderData } from 'react-router-dom';
import Chef from '../components/homeSection/Chef';

import foodBg from '../assets/food-bg.jpg'

const Home = () => {

    const chefs = useLoaderData()
    console.log(chefs);

    return (
        <>
            <header className="hero py-3">
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
                <div className="divider max-w-screen-lg mx-auto"></div>
                {/* Chefs section  */}
                <h2 className='text-center text-3xl text-primary underline underline-offset-8'>Our chefs</h2>
                <div className="grid grid-cols-3 gap-20 my-10 max-w-screen-lg mx-auto">
                    {
                        chefs.map(chef => <Chef key={chef.id} chef={chef} />)
                    }
                </div>

                <div className="divider max-w-screen-lg mx-auto"></div>
                {/* Chefs section  */}
                <div style={{ background: `url(${foodBg}), linear-gradient(red, transparent) `,  backgroundSize: 'cover', backgroundPosition: 'center center' }} className='min-h-screen my-10'>
                    <div className='min-h-screen flex items-center bg-gradient-to-b to-indigo-500/75 from-black/75 p-4 backdrop-blur-sm mx-auto'>
                        <div className='max-w-screen-lg mx-auto'>
                            <h2 className='text-center text-3xl my-5 text-primary  underline underline-offset-8'>Why our chef is best?</h2>
                            <p className='drop-shadow-sm'>Our recipe for Classic Spaghetti and Meatballs is the best because of the perfect balance of flavors and textures.
                                The meatballs are juicy and tender, and the spaghetti is cooked to a perfect al dente texture.
                                The tomato sauce is rich and flavorful, with just the right amount of acidity and sweetness to complement the meatballs.
                                The combination of fresh herbs and Parmesan cheese adds depth and complexity to the dish.
                                Finally, the dish is garnished with a sprinkle of fresh parsley and a drizzle of extra-virgin olive oil for added freshness and richness.
                                All these elements come together to create a delicious and satisfying meal that is sure to please any pasta lover.</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;