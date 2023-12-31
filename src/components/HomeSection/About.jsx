import React from "react";
import chefAnimation from "../../assets/chef-animation.json";
import Lottie from "lottie-react";

const About = () => {
  return (
    <div style={{clipPath: "polygon(100% 100%, 0% 100% , 0.00% 10.00%, 2.00% 11.25%, 4.00% 12.49%, 6.00% 13.68%, 8.00% 14.82%, 10.00% 15.88%, 12.00% 16.85%, 14.00% 17.71%, 16.00% 18.44%, 18.00% 19.05%, 20.00% 19.51%, 22.00% 19.82%, 24.00% 19.98%, 26.00% 19.98%, 28.00% 19.82%, 30.00% 19.51%, 32.00% 19.05%, 34.00% 18.44%, 36.00% 17.71%, 38.00% 16.85%, 40.00% 15.88%, 42.00% 14.82%, 44.00% 13.68%, 46.00% 12.49%, 48.00% 11.25%, 50.00% 10.00%, 52.00% 8.75%, 54.00% 7.51%, 56.00% 6.32%, 58.00% 5.18%, 60.00% 4.12%, 62.00% 3.15%, 64.00% 2.29%, 66.00% 1.56%, 68.00% 0.95%, 70.00% 0.49%, 72.00% 0.18%, 74.00% 0.02%, 76.00% 0.02%, 78.00% 0.18%, 80.00% 0.49%, 82.00% 0.95%, 84.00% 1.56%, 86.00% 2.29%, 88.00% 3.15%, 90.00% 4.12%, 92.00% 5.18%, 94.00% 6.32%, 96.00% 7.51%, 98.00% 8.75%, 100.00% 10.00%)"}} className="bg-accent py-6">
        
      <div className="hero">
        <div className="hero-content min-h-[90vh] gap-10 flex-col lg:flex-row">
          <Lottie animationData={chefAnimation} loop={true} />

          <div className="lg:w-1/3 text-center lg:text-right text-white">
            <h1 className="text-5xl font-bold">About Us</h1>
            <p className="py-6">
            At our chef recipe website, we're passionate about making cooking enjoyable and accessible. Discover a diverse recipe database, search by ingredients and preferences. Join our community to share recipes and tips. Simplify meal planning with personalized plans and grocery lists. Let's cook together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
