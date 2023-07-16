import React from "react";
import { FaThumbsUp } from "react-icons/fa";

const ChefsOfTheDay = ({ chefs }) => {

  // random id for randomly show chefs 
  const randomId = Math.floor(Math.random() * (chefs.length - 2));

  return (
    <section id="recipe-of-the-day" className="py-16 bg-base-200">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Chefs of the Day</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {chefs.slice(randomId, randomId + 2).map((chef) => (
            <div className="bg-base-100 rounded-lg shadow-lg p-6 relative">
              <img
                src={chef.picture}
                alt={chef.name}
                className="rounded-lg h-44 w-44 object-cover object-top mb-4"
              />
              <h4 className="text-xl font-semibold mb-2 ">
                Chef: <span className="uppercase text-accent">{chef.name}</span>
              </h4>
              <div className="flex gap-2 items-center">
                <p className="badge badge-primary badge-outline">
                  <FaThumbsUp />{" "}
                  <span className="ml-2 text-white">{chef.likes}</span>{" "}
                </p>
                <p className="badge badge-primary badge-outline">
                  Recipes:{" "}
                  <span className="ml-2 text-white"> {chef.recipes}</span>
                </p>
              </div>
              <p className="badge badge-primary absolute -top-2 -right-2">
                 Experience: {chef.experience}y +
                </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefsOfTheDay;
