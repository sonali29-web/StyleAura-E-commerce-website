import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useAddToCart from "../hooks/useAddToCart";
import { ShoppingCart,IndianRupee,CircleUserRound } from "lucide-react";
import { FaStar } from "react-icons/fa6";
import { convertPrice } from "../utils/currency";
import { useMemo } from "react";
import Loader from "../components/Loader";

const ProductView = () => {
  const { id } = useParams();

  const { handleAddcart } = useAddToCart();


  const { products } = useSelector((state) => state.products);

  const product =useMemo(()=>{
 return products.find((item) => {
    return item.id === Number(id);
  });
  },[products,id])


   const [selectedImg,setSelectedImg]=useState(null)

   useEffect(()=>{
    if(product?.images?.length){
      setSelectedImg(product.images[0])
    }
   },[product])


   if(!product){
    return <Loader></Loader>
   }

  return (
    <div className="pt-16 bg-white px-4 py-6 md:px-8" >
      <h2 className="text-3xl font-semibold p-2">Product Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">


<div >
    <div className="flex flex-col md:flex-row gap-4 p-2">
         <div className="flex flex-col gap-4">
            {product?.images?.map((img, index) => (
              <div key={index} className="flex flex-col p-2 rounded-lg hover:border border-purple-700">
                <img
                  className="w-20 h-20 md:w-24 md:h-24 object-cover bg-purple-100 p-2 "
                  src={img}
                  alt=""
                  onClick={()=>setSelectedImg(img)}
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col">
             <div className="p-4 border border-gray-300 rounded-lg">
              <img
                className="w-full max-w-md mx-auto h-72 md:h-96 object-contain bg-purple-100 p-4"
                src={selectedImg}
                alt={product.title}
              />
            </div>


             <div className="flex justify-center  items-center p-4">
              <button
                onClick={() => handleAddcart(product)}
                className="w-full md:w-auto flex justify-center items-center bg-purple-800 text-white rounded-md p-3 hover:bg-purple-900"
              >
                Add to Cart <ShoppingCart strokeWidth={1.5} />
              </button>
            </div>
          </div>
    </div>
</div>



        <div className="flex flex-col  gap-4">
          <div className=" flex flex-col border border-gray-300 rounded-lg p-4 items-start">
            <p className="text-md text-gray-500 font-semibold p-2 ">{product.description}</p>
          <div className="flex flex-wrap  items-center gap-2 p-2"><IndianRupee strokeWidth={1.5} size={25} /><h2 className="text-2xl"> {convertPrice(product.price)} </h2>  <p className="text-md font-semibold text-purple-800 p-2">{product.discountPercentage} % off onwards</p></div>
          <span className="bg-purple-700 text-white rounded-2xl w-14 h-7 flex items-center justify-center "> <p className="text-sm text-white font-semibold px-1">{product.rating} </p><FaStar size={12} /></span>
          </div>

          <h2 className="text-xl text-purple-800 font-semibold">Best Reviews</h2>

          {product.reviews?.map((review, index) => (
            <div
              key={index}
              className=" flex flex-col border border-gray-300 rounded-lg p-4"
            >



             <div className="flex gap-2 flex-wrap"><CircleUserRound strokeWidth={1.5}/><h2 className="text-md font-semibold ">{review.reviewerName}</h2></div>
              <div className="flex gap-2 flex-wrap"><span className="text-purple-800">Comment :</span><h2>  {review.comment}</h2></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductView;
