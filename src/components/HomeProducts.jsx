import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { useFetch } from "../hooks/useFetch";
import { Loader } from "lucide-react";

const HomeProducts = () => {
  const {loading}=useFetch();
  const { products } = useSelector((state) => state.products);



  const homeProducts = useMemo(() => {
    return products.slice(-35);
  }, [products]);

   if(loading){
    return <Loader></Loader>
  }


  return (
    <div className="px-4 md:px-6 py-4">
      <div className="bg-white rounded-lg">
        <h2 className="text-2xl md:text-3xl font-semibold p-4">
          Products For You
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 md:gap-8 p-4">
          {homeProducts.map((pro) => (
            <ProductCard key={pro.id} product={pro}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
