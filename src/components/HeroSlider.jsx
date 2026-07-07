import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import fashion1 from "../assets/charming-ladyfashion-2.webp";
import fashion2 from "../assets/freestocks-_3Q3tsJ01nc-unsplash.webp";
import fashion3 from "../assets/woman-wearing-red-clothes-holding-bags.webp";
import { useNavigate } from "react-router-dom";

const Slider1 = () => {
  const navigate = useNavigate()

  const handleShop = () => {
    navigate("/products");
  };

  return (
    <>
      <section className="min-h-[70vh] md:min-h-[calc(90vh-60px)] flex items-center bg-white">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-8 py-8">
          <div className="relative rounded-xl md:rounded-3xl overflow-hidden">
            <img
              src={fashion1}
              alt="Fashion Banner"
              className="w-full h-[420px]  sm:h-[500px] md:h-[650px] object-cover object-top"
            />

            <div className="absolute inset-0 bg-black/35"></div>

            <div className="absolute inset-0 flex items-center">
              <div className="pl-8 md:pl-16 max-w-xl text-white">
                <p className="text-purple-200 font-semibold uppercase tracking-widest">
                  New Collection
                </p>

                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-4 leading-tight">
                  Discover Your
                  <br />
                  Perfect Style
                </h1>

                <p className="mt-5 text-lg text-gray-200">
                  Premium fashion with elegant designs crafted for every season.
                </p>

                <button
                  onClick={handleShop}
                  className=" cursor-pointer mt-8 bg-purple-600 hover:bg-purple-700 px-5 py-2.5 md:px-8 md:py-3 rounded-full font-semibold transition duration-300"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Slider2 = () => {
  return (
    <>
      <section className="min-h-[70vh] md:min-h-[calc(100vh-60px)] flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8 w-full">
          <div className="relative rounded-xl md:rounded-3xl overflow-hidden">
            <img
              src={fashion2}
              alt=""
              className="w-full h-[420px]  sm:h-[500px] md:h-[650px] object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-r from-black/70 to-transparent"></div>

            <div className="absolute inset-0 flex items-center">
              <div className="pl-10 md:pl-20 text-white max-w-xl">
                <span className="bg-purple-600 px-4 py-2 rounded-full">
                  50% OFF
                </span>

                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-6">
                  Exclusive
                  <br />
                  Fashion Sale
                </h1>

                <p className="mt-5 text-lg">
                  Upgrade your wardrobe with limited-time offers.
                </p>

                <button className="mt-8 bg-white text-purple-700 px-5 py-2.5 md:px-8 md:py-3 rounded-full font-semibold hover:bg-gray-100">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Slider3 = () => {
  const navigate = useNavigate();

  const handleCollection = () => {
    navigate("/categoriesProducts");
  };

  return (
    <>
      <section className="min-h-[70vh] md:min-h-[calc(100vh-60px)] flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8 w-full">
          <div className="relative rounded-xl md:rounded-3xl overflow-hidden">
            <img
              src={fashion3}
              alt=""
              className="w-full h-[420px]  sm:h-[500px] md:h-[650px] object-cover object-top"
            />

            <div className="absolute inset-0 bg-black/30"></div>

            <div className="absolute inset-0 flex items-center justify-center md:justify-end">
              <div className="pr-10 md:pr-20 text-center md:text-right text-white max-w-lg">
                <p className="uppercase tracking-widest text-purple-200">
                  Luxury Edition
                </p>

                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-4">
                  Elegant
                  <br />
                  Everyday Wear
                </h1>

                <p className="mt-5 text-lg">
                  Premium quality clothing designed for comfort and style.
                </p>

                <button
                  onClick={handleCollection}
                  className="mt-8 bg-purple-600 px-5 py-2.5 md:px-8 md:py-3 rounded-full hover:bg-purple-700"
                >
                  View Collection
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const HeroSlider = () => {
  return (
    <div className="py-5 ">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <Slider1 />
        </SwiperSlide>
        <SwiperSlide>
          <Slider2 />
        </SwiperSlide>
        <SwiperSlide>
          <Slider3 />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
