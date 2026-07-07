import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import decorImg from "../assets/image/homedecor-removebg-preview.png";
import fragrances from "../assets/image/perfume.jfif";
import homeDecor from "../assets/image/homedecor-removebg-preview.png";
import womanBags from "../assets/image/bag.webp";
import menShoes from "../assets/image/mensshoes.jfif";
import skincare from "../assets/image/skincare.jfif";
import womenDress from "../assets/image/womenDress.webp";
import beauty from "../assets/image/makeup.jfif";
import womenheels from "../assets/image/heels.webp";
import menShirt from "../assets/image/mensShirt.webp";
import laptop from "../assets/image/laptops.webp";
import menWatches from "../assets/image/watch.jpg";
import { useNavigate } from "react-router-dom";
import {motion} from "motion/react"

const Categories = () => {
  const navigate = useNavigate();

  const ViewAll = () => {
    navigate("/categoriesProducts");
  };

  const categories = [
    {
      id: 1,
      slug: "fragrances",
      name: "Fragrances",
      image: fragrances,
    },

    {
      id: 2,
      slug: "home-decoration",
      name: "Home Decoration",
      image: homeDecor,
    },

    {
      id: 3,
      slug: "womens-bags",
      name: "Women's Bags",
      image: womanBags,
    },

    {
      id: 4,
      slug: "mens-shoes",
      name: "Men's Shoes",
      image: menShoes,
    },

    {
      id: 5,
      slug: "skincare",
      name: "Skincare",
      image: skincare,
    },

    {
      id: 6,
      slug: "womens-dresses",
      name: "Women's Dresses",
      image: womenDress,
    },

    {
      id: 7,
      slug: "beauty",
      name: "Beauty",
      image: beauty,
    },
    {
      id: 8,
      slug: "womens-shoes",
      name: "Women's heels",
      image: womenheels,
    },
    {
      id: 9,
      slug: "mens-shirts",
      name: "Men's Shirts",
      image: menShirt,
    },

    {
      id: 10,
      slug: "laptops",
      name: "Laptops",
      image: laptop,
    },

    {
      id: 11,
      slug: "mens-watches",
      name: "Men's Watches",
      image: menWatches,
    },
  ];

  return (
    <div className="px-4 md-px-6">
      <motion.div

      initial={{opacity:0,y:60}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.5}}
      viewport={{once:true}}



      className="p-4 bg-white  rounded-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            {" "}
            Shop By Categories
          </h2>
          <p
            className="text-md text-purple-800 underline hover:text-purple-700 cursor-pointer"
            onClick={ViewAll}
          >
            View All
          </p>
        </div>

        <div className="w-full">
          <div className=" pt-6">
            <Swiper
              modules={[Autoplay]}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 12,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 16,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 24,
                },
              }}

              loop={true}
              speed={600}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
            >
              {categories.map((cateory) => (
                <SwiperSlide key={cateory.id}>
                  <div
                    onClick={ViewAll}
                    className="cursor-pointer flex flex-col items-center gap-3 p-2 rounded-lg"
                  >
                    <div className="w-full rounded-lg">
                      <img
                        src={cateory.image}
                        alt=""
                        className="w-full h-28 sm:h-36 md:h-40 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <h2 className="text-xs sm:text-sm md:text-base font-medium text-center">
                      {cateory.name}
                    </h2>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Categories;
