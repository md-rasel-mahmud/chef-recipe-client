import React from "react";
import Lottie from "lottie-react";
import foodAnimation from "../../assets/food-animation.json";

const Banner = () => {
  return (
    <header className="hero py-3">
      <div className="hero-content flex-col lg:flex-row-reverse max-w-screen-lg mx-auto">
        <Lottie animationData={foodAnimation} loop={true} />
        <div className="lg:w-4/5">
          <h1 className="text-5xl font-bold">Satisfaction Chef Recipes!</h1>
          <p className="py-6">
            A Satisfaction Chef Recipes is a meal that leaves you feeling full and
            content. It includes a balance of flavors, proteins, complex
            carbohydrates, healthy fats, and fiber-rich ingredients. Examples
            include soups, roasted vegetables, and stir-fries.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Banner;
