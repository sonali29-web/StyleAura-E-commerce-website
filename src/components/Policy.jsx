import React from "react";
import deliveryImg from "../assets/icons/fast-delivery.png";
import returnImg from "../assets/icons/return (2).png";
import cashOnImg from "../assets/icons/cash-on-delivery (2).png";
import {motion} from "motion/react"

const Policy = () => {
  return (
    <>
      <div className="p-4 rounded-lg">
        <div className="bg-white px-2 rounded-lg">
          <h2 className="text-2xl md:text-3xl  text-start font-semibold p-4">
            Our Best Policy
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-4 md:p-6">
            <motion.div

            initial={{opacity:0 ,x:-60}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.5}}
viewport={{once:true}}


            className="border border-gray-300 rounded-lg p-5 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center gap-3">
                <span className="p-3 md:p-4 rounded-full bg-purple-400 shadow-sm">
                  <img
                    src={deliveryImg}
                    alt=""
                    className="w-10 h-10 md:w-12 md:h-12"
                  />
                </span>
                <h2 className="text-lg md:text-xl font-semibold">
                  Fast Delivery
                </h2>
                <p>“Delivered faster than you think.”</p>
              </div>
            </motion.div>

            <div className="border border-gray-300 rounded-lg p-5 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center gap-3">
                <span className="p-3 md:p-4 rounded-full bg-purple-400 shadow-sm">
                  <img
                    src={returnImg}
                    alt=""
                    className="w-10 h-10 md:w-12 md:h-12"
                  />
                </span>
                <h2 className="text-sm md:text-base font-semibold">
                  7 days Return
                </h2>
                <p>“Buy confidently with 7 days return support.”</p>
              </div>
            </div>

            <motion.div
            initial={{opacity:0,x:60}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.5}}
viewport={{once:true}}


            className="border border-gray-300 rounded-lg p-5 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center gap-3">
                <span className="p-3 md:p-4 rounded-full bg-purple-400 shadow-sm">
                  <img
                    src={cashOnImg}
                    alt=""
                    className="w-10 h-10 md:w-12 md:h-12"
                  />
                </span>
                <h2 className="text-md font-semibold">Cash on delivery</h2>
                <p>"Pay when it arrives at your door"</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Policy;
