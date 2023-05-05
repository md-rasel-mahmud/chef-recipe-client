import React from "react";
import LazyLoad from "react-lazy-load";
import foodBg from "../../assets/food-bg.jpg";

const WhyBest = () => {
  return (
    <LazyLoad>
      <div
        style={{
          background: `url(${foodBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        className="min-h-screen my-10"
      >
        <div className="min-h-screen flex items-center bg-gradient-to-b to-indigo-500/75 from-black/75 p-4 backdrop-blur-sm mx-auto">
          <div className="max-w-screen-lg mx-auto">
            <h2 className="text-center text-3xl my-5 text-primary  underline underline-offset-8">
              Why our chef is best?
            </h2>
            <p className="drop-shadow-sm">
              Our recipe for Classic Spaghetti and Meatballs is the best because
              of the perfect balance of flavors and textures. The meatballs are
              juicy and tender, and the spaghetti is cooked to a perfect al
              dente texture. The tomato sauce is rich and flavorful, with just
              the right amount of acidity and sweetness to complement the
              meatballs. The combination of fresh herbs and Parmesan cheese adds
              depth and complexity to the dish. Finally, the dish is garnished
              with a sprinkle of fresh parsley and a drizzle of extra-virgin
              olive oil for added freshness and richness. All these elements
              come together to create a delicious and satisfying meal that is
              sure to please any pasta lover.
            </p>
          </div>
        </div>
      </div>
    </LazyLoad>
  );
};

export default WhyBest;
