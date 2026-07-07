import { useEffect, useState } from "react";
import { setProducts } from "../featureSlice/product/productsSlice";
import { useDispatch } from "react-redux";

export const useFetch = () => {
  const dispatch = useDispatch();

  const [loading,setLoading]=useState(true)

  useEffect(() => {

    const productApi = async () => {
      try{
        setLoading(true)
        const res = await fetch("https://dummyjson.com/products?limit=194");
      const data = await res.json();
      dispatch(setProducts(data.products));
      }catch(err){
        console.log(err.message)
      }finally{

      }
  setLoading(false)
    };

    productApi();

  }, []);

  return {loading}
};
