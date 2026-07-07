import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCart, DeleteCart } from "../featureSlice/cart/cartSlice";
import { AddWish } from "../featureSlice/wishlist/wishlistSlice";
import { FcLike } from "react-icons/fc";
import { Heart, IndianRupee, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useAddToCart from "../hooks/useAddToCart";
import useAddToWish from "../hooks/useAddToWish";
import { convertPrice } from "../utils/currency";
import Loader from "./Loader";
import {motion} from "motion/react"

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);

  const { handleAddcart } = useAddToCart();
  const { handleAddwish } = useAddToWish();

  const { user } = useSelector((state) => state.auth);

  const isWishlisted = (id) => {
    if (!user) return false;
    return wishlist.some((item) => item.id === id);
  };

  if (product.length === 0) {
    return <Loader></Loader>;
  }

  return (
    <>
      <motion.div

      initial={{opacity:0,y:20}}
      whileInView={{opacity:1,y:0}}

      transition={{duration:0.5}}
      whileHover={{scale:1.03,y:-5}}
      viewport={{once:true}}

      key={product.id}
        className="flex flex-col  p-2 border border-gray-400 rounded-lg cursor-pointer"
      >
        <div
          className="bg-gray-50 relative"

        >
          <img
            src={product.thumbnail}
            alt=""
            onClick={() => navigate(`/product/${product.id}`)}
            className="  w-full h-full object-cover "
          />{" "}
          <span onClick={() => handleAddwish(product)}>
            {isWishlisted(product.id) ? (
              <FcLike size={22} className="absolute top-2 right-2" />
            ) : (
              <Heart
                color="#0a0a0a"
                strokeWidth={1.25}
                size={22}
                className="absolute top-2 right-2"
              />
            )}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-md truncate font-semibold">{product.title}</h3>
          <div className="flex items-center text-purple-800 font-bold ">
            <span>
              <IndianRupee strokeWidth={1.5} size={18} />
            </span>
            <h2>{convertPrice(product.price)}</h2>
          </div>
          <div className="flex justify-center  items-center">
            <button
              onClick={() => handleAddcart(product)}
              className=" flex bg-purple-800 rounded-md px-4 text-white p-1 shadow-md hover:bg-purple-900 "
            >
              Add to Cart <ShoppingCart strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProductCard;
