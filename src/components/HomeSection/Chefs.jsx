import React from "react";
import ChefsCard from "./ChefsCard";

const Chefs = ({ chefs }) => {
  
  return (
    <>
      <h2 className="text-center text-3xl text-primary underline underline-offset-8">
        Our chefs
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 my-10 max-w-screen-lg mx-2 lg:mx-auto">

        {chefs.map((chef) => (
          <ChefsCard key={chef.id} chef={chef} />
        ))}
      </div>
    </>
  );
};

export default Chefs;
