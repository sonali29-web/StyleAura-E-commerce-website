import React from "react";
import { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { useFetch } from "../hooks/useFetch";

import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";

const Products = () => {
  const {loading}=useFetch();

  const { products } = useSelector((state) => state.products);


if(loading){
  return <Loader>
  </Loader>
}

  return (
    <div className="bg-white pt-20 pb-20 md:pb-6 px-4 md:px-6">
      <h2 className="text-2xl md:text-4xl font-semibold py-4">Products </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 md:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
