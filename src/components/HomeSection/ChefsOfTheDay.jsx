import React from "react";
import { FaThumbsUp, FaUserCircle } from "react-icons/fa";

const ChefsOfTheDay = ({ chefs }) => {
  // random id for randomly show chefs
  const randomId = Math.floor(Math.random() * (chefs.length - 2));

  return (
    <section className="py-16 bg-base-200 max-w-screen-lg mx-auto rounded-lg p-5">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-center text-3xl text-accent underline underline-offset-8 mt-8">Chefs of the Day</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {chefs.slice(randomId, randomId + 2).map((chef) => (
            <div className="bg-base-100 rounded-lg shadow-lg p-6 flex gap-2 flex-col md:flex-row items-center relative">
              <img
                src={chef.picture}
                alt={chef.name}
                className="rounded-lg h-44 w-44 object-cover object-top mb-4"
              />
              <div className="divider md:divider-horizontal"></div>
              <div>
                <h4 className="text-lg font-semibold mb-2 flex gap-2 items-center">
                  <FaUserCircle/><span className="uppercase text-accent">{chef.name}</span>
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
