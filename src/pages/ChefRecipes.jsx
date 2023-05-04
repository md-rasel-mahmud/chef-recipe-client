import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const ChefRecipes = () => {
    const singleChef = useLoaderData()
    const { name, bio, likes, picture, rating, recipe_list, recipes, experience } = singleChef;
    return (
        <div className="flex flex-col-reverse lg:flex-row gap-2 m-3 lg:h-[85vh] items-center">

            <div className="lg:w-72 w-full justify-center h-full rounded-lg bg-base-200 lg:overflow-y-auto">
                {
                    recipe_list.map((recipe, index) =>
                        <div>
                            <ul className="menu bg-base-100 rounded-lg p-2 m-3 ">
                                <h2 className='text-accent text-semibold text-xl underline underline-offset-4'>Recipe : {index + 1}</h2>
                                <small>
                                    {recipe.ingredients.map(ingredient => <li>{ingredient}</li>)}
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
                    <div className="card-actions justify-start">
                        <div className="badge badge-secondary"><FaThumbsUp className='mr-1' /> {likes}</div>
                        <div className="badge badge-outline">Number of Recipes : {recipes}</div>
                        <div className="badge badge-outline">{experience} Years of Experience</div>
                    </div>
                    <Rating style={{ maxWidth: 100 }} value={rating} readOnly />

                    <p className='w-4/5'>{bio}</p>
                </div>
            </div>
        </div>
    );
};

export default ChefRecipes;