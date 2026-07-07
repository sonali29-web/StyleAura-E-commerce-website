import React from "react";
import { useSelector } from "react-redux";
import { Heart, IndianRupee, Loader } from "lucide-react";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { convertPrice } from "../utils/currency";
import { useMemo } from "react";
import useAddToWish from "../hooks/useAddToWish";
import { motion } from "motion/react";

const FeaturesProduct = () => {
  const navigate = useNavigate();

  const { handleAddwish } = useAddToWish();

  const { products } = useSelector((state) => state.products);

  const {loading}=useFetch();

  const bestRatingProducts = useMemo(() => {
    return products.filter((product) => product.rating >= 4.5).slice(-5);
  }, [products]);

  const viewAll = () => {
    navigate("/products");
  };

if(loading){
  return <Loader></Loader>
}

  return (
    <>
      <div className="px-4">
        <div className="flex justify-between items-center p-4 bg-white  rounded-t-lg ">
          <h2 className="text-start  text-xl md:text-3xl font-semibold ">
            Best Selling Products
          </h2>
          <p
            className="text-end text-purple-500 underline p-1 cursor-pointer"
            onClick={viewAll}
          >
            View All
          </p>
        </div>
        <div className="grid-cols-[repeat(auto-fit,minmax(160px,1fr))]  md:grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 bg-white p-4 rounded-b-lg">
          {bestRatingProducts.map((product) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              key={product.id}
              className="flex flex-col  p-2 border border-gray-400 rounded-lg "
            >
              <div className="bg-gray-50 relative">
                <img
                  src={product.thumbnail}
                  alt=""
                  className="cursor-pointer  w-full h-50 sm:h-48 md:h-56 object-cover rounded-md object-top"
                />{" "}
                <span onClick={() => handleAddwish(product)}>
                  <Heart
                    color="#0a0a0a"
                    strokeWidth={1.25}
                    size={22}
                    className="absolute top-2 right-2"
                  />
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-md truncate font-semibold">
                  {product.title}
                </h3>
                <div className="flex items-center text-purple-800 font-bold">
                  <span>
                    <IndianRupee strokeWidth={1.5} size={18} />
                  </span>
                  <h2>{convertPrice(product.price)}</h2>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturesProduct;
