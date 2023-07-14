import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/swiper.min.css";
import { Autoplay } from "swiper";

//import sliders
import slider1 from "../../assets/General-Mills-logo.svg";

const OurPartners = () => {
  const sliders = [
    slider1,
    "https://www.nestle.com/themes/custom/da_vinci_code/logo.svg",
    "https://www.coca-colacompany.com/content/dam/company/us/en/the-coca-cola-company-logo.svg",
    "https://www.unilever.com/core-assets/logos/logo-static.svg",
    "https://www.mars.com/themes/custom/mars_regeneration/logo.svg",
    "https://www.mondelezinternational.com/-/media/Mondelez/Images/logo.png",
    "https://www.kelloggs.com/content/dam/NorthAmerica/kelloggs/en_US/images/logoMain.png",
    "https://smartmedia.digital4danone.com//is/content/danonecs/logo-danone-jo-banniere-en?wid=320&fmt=png-alpha&fit=wrap",
    "https://www.kraftheinzcompany.com/images/logo_main.png",
  ];
  return (
    <div className="min-h-[50vh] max-w-screen-lg mx-auto flex flex-col justify-center">
      <h2 className="text-center text-3xl font-bold my-8">Our Partners</h2>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          speed={1000}
          autoplay={{
            enabled: true,
            delay: 100,
            reverseDirection: false,
          }}
          onDurationChange={false}
          breakpoints={{
            768: {
              slidesPerView: 4,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {sliders.map((slider, index) => (
            <SwiperSlide key={index}>
              <img
                className="h-20 bg-gray-300 rounded-lg px-5 py-2"
                src={slider}
                alt="slider"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurPartners;
