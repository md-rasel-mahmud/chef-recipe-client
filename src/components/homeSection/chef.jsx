import React, { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

//Import Lazy Load
import LazyLoad from "react-lazy-load";

const Chef = ({ chef }) => {
  const [like, setLike] = useState(false);
  const { id, picture, name, likes, recipes, experience } = chef;
      // like added toast
      const likeAdded = () => toast.success("Like added");

      // like remove toast
      const likeRemove = () => toast.warn("like Removed");
      // handle favorite button
      const handleFavBtn = () => {
        setFavBtn(true);
        favoriteToast();
      };
    
      //handle like
      const handleLike = () => {
        setLike(!like);
        if (!like) {
          likeAdded();
        } else {
          likeRemove();
        }
      };
  return (
    <div className="card bg-base-300 h-96 shadow-xl">
      <figure>
        <LazyLoad>
          <img
            className="rounded-xl object-none object-top"
            src={picture}
            alt="chef image"
          />
        </LazyLoad>
      </figure>
      <div className="card-body p-3 gap-4">
        <h2 className="card-title text-accent">{name}</h2>
        <div className="card-actions items-center justify-start">
        <button
          onClick={handleLike}
          className={`btn btn-xs ${
            like ? "btn-primary " : "btn-outline btn-primary"
          } rounded-full`}
        >
          <FaThumbsUp className="mr-1" /> {like ? likes + 1 : likes}
        </button>
          <div className="badge badge-outline">Recipes: {recipes}</div>
          <div className="badge badge-outline">Experience: {experience}</div>
        </div>
        <Link to={`/chef-recipes/${id}`} className="btn btn-accent btn-sm mt-3">
          view recipe
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Chef;
