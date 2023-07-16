import React, { useEffect, useState } from "react";

import Spinner from "../components/Spinner";

import Banner from "../components/homeSection/Banner";
import WhyBest from "../components/HomeSection/WhyBest";
import Testimonial from "../components/HomeSection/Testimonial";
import Services from "../components/HomeSection/Services";
import About from "../components/HomeSection/About";
import OurPartners from "../components/HomeSection/OurPartnars";
import useChefs from "../hooks/useChefs";
import Chefs from "../components/HomeSection/Chefs";
import ChefsOfTheDay from "../components/HomeSection/ChefsOfTheDay";

const Home = () => {
  const [chefs] = useChefs();

  const [spinner, setSpinner] = useState(true);

  // stop spinner
  useEffect(() => {
    setSpinner(false);
  }, [chefs]);

  console.log(chefs);

  return (
    <>
      {/* spinner  */}
      {spinner && <Spinner />}

      {/* Banner section  */}
      <Banner />

      {/* Main section  */}
      <main>
        <div className="divider max-w-screen-lg mx-auto"></div>

        {/* About section  */}
        <About />

        
        {/* Chefs section  */}
        <Chefs chefs={chefs} />

        <div className="divider max-w-screen-lg mx-auto"></div>

        {/* Recipe of the day  */}
        <ChefsOfTheDay chefs={chefs} />
        
        {/* Services section  */}
        <Services />

        <div className="divider"></div>

        {/* why our chef is best section  */}
        <WhyBest />

        <div className="divider max-w-screen-lg mx-auto"></div>

        {/* Brands  */}
        <OurPartners></OurPartners>

        <div className="divider max-w-screen-lg mx-auto"></div>

        {/* Testimonial section  */}
        <Testimonial chefs={chefs} />
      </main>
    </>
  );
};

export default Home;
