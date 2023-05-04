import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { BsHeart, BsHeartFill } from 'react-icons/bs'

const ChefRecipes = () => {

    const [favBtn, setFavBtn] = useState(false)

    // load data
    const singleChef = useLoaderData()

    // Destructure data 
    const { name, bio, likes, picture, rating, recipe_list, recipes, experience } = singleChef;

    // tost 
    const notify = () => toast.success("Recipe added in your Favorite list");

    // handle favorite button 
    const handleFavBtn = () => {
        setFavBtn(true)
        notify()
    }


    return (
        <div className="flex flex-col-reverse lg:flex-row gap-2 m-3 lg:h-[85vh] items-center">

            <div className="lg:w-72 w-full h-full rounded-lg bg-base-200 lg:overflow-y-auto">
                <h2 className="text-center text-accent mt-1 uppercase font-semibold text-2xl">Chef Recipes</h2>
                {
                    recipe_list.map((recipe, index) =>
                        <div key={index}>
                            <ul className="menu bg-base-100 rounded-lg p-2 m-3 ">
                                <h2 className='text-semibold text-xl underline underline-offset-4'>Recipe : {index + 1}</h2>
                                <small className='text-gray-400'>
                                    {recipe.ingredients.map((ingredient, index) => <li id={index}>{ingredient}</li>)}
                                </small>
                            </ul>
                        </div>
                    )
                }

            </div>

            <div className="card overflow-hidden flex-1 h-full bg-base-200 shadow-xl">
                <figure className="pl-3 !justify-start">
                    <img src={picture} alt="Chef" className="h-52 my-2 rounded-full" />
                </figure>
                <div className="card-body bg-base-300 p-3">
                    <h2 className="card-title text-accent">{name}</h2>
                    <div className="card-actions items-center bg-base-100 p-2 rounded-lg justify-center lg:justify-between">
                        <div className='card-actions justify-center lg:justify-start'>
                            <div className="badge badge-secondary"><FaThumbsUp className='mr-1' /> {likes}</div>
                            <div className="badge badge-outline">Number of Recipes : {recipes}</div>
                            <div className="badge badge-outline">{experience} Years of Experience</div>
                        </div>

                        <button onClick={handleFavBtn} disabled={favBtn} className="btn btn-ghost btn-circle">
                            {
                                favBtn ?
                                    <BsHeartFill className='text-2xl text-error' />
                                    :
                                    <BsHeart className='text-2xl' />
                            }
                        </button>

                    </div>
                    <div className="card-actions justify-start py-4">
                        <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                    </div>
                    <p className='w-4/5'>{bio}</p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ChefRecipes;