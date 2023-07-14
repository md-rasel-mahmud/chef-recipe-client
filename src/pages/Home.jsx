import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import Spinner from "../components/Spinner";

import Banner from "../components/homeSection/Banner";
import Chefs from "../components/HomeSection/chefs";
import WhyBest from "../components/HomeSection/WhyBest";
import Testimonial from "../components/HomeSection/Testimonial";
import LazyLoad from "react-lazy-load";
import Services from "../components/HomeSection/Services";
import About from "../components/HomeSection/About";
import OurPartners from "../components/HomeSection/OurPartnars";

const Home = () => {
  const chefs = useLoaderData();

  const [spinner, setSpinner] = useState(true);

  // stop spinner
  useEffect(() => {
    setSpinner(false);
  }, [chefs]);

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
