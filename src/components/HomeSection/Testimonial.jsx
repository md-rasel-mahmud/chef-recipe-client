import React, { useEffect, useState } from "react";

//import lazy load
import LazyLoad from "react-lazy-load";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Spinner from "../Spinner";

const Testimonial = ({chefs}) => {
  const [spinner, setSpinner] = useState(true);

  // stop spinner
  useEffect(() => {
    chefs.length > 0 ? setSpinner(false) : setSpinner(true);
  }, [chefs]);
  return (
    <>
      {/* spinner  */}
      {spinner && <Spinner />}
      <h2 className="text-center mt-24 text-3xl text-primary underline underline-offset-8">
        Testimonial
      </h2>

      <div className="max-w-screen-lg mx-auto h-screen">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {chefs.map((chef) => (
            <SwiperSlide key={chef.id}>
              <div className="flex h-[75vh] mx-2 lg:mx-auto items-center">
                <div className="card bg-base-200 shadow-xl">
                  <figure className="px-10 pt-10">
                    <LazyLoad>
                      <img
                        src={chef.testimonial.authorImage}
                        alt="Shoes"
                        className="mask mask-circle w-24"
                      />
                    </LazyLoad>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-accent">
                      {chef.testimonial.authorName}
                    </h2>
                    <p className="border-l-2 pl-3 border-indigo-900 italic font-semibold text-gray-400">
                      "{chef.testimonial.comment}"
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonial;
