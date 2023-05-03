import React from 'react';
import { FaThumbsUp } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    const {id, picture, name, likes, recipes, experience } = chef;
    return (
        <div className="card bg-base-200 shadow-xl">
            <figure className='p-3'><img className='rounded-xl' src={picture} alt="chef image" /></figure>
            <div className="card-body p-3 gap-4">
                <h2 className="card-title text-accent">{name}</h2>
                <div className="badge badge-secondary"><FaThumbsUp className='mr-1 ' /> {likes}</div>
                <div className="card-actions justify-start">
                    <div className="badge badge-outline">Recipes: {recipes}</div>
                    <div className="badge badge-outline">Experience: {experience}</div>
                </div>
                <Link to={`/chef-recipes/${id}`} className="btn btn-accent btn-sm mt-3">view recipe</Link>
            </div>
        </div>
    );
};

export default Chef;