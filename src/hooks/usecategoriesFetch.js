import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchCategoryProducts,
  setcategories,
} from "../featureSlice/categories/categoroiesSlice";

const usecategoriesFetch = () => {
  const dispatch = useDispatch();

  const handlecategory = async (category) => {
    const res = await fetch(
      `https://dummyjson.com/products/category/${category}`,
    );
    const data = await res.json();
    dispatch(fetchCategoryProducts(data.products));
  };

  useEffect(() => {
    const fetchlist = async () => {
      const res = await fetch("https://dummyjson.com/products/category-list");
      const data = await res.json();
      dispatch(setcategories(data));
    };

    fetchlist();
  }, [dispatch]);

  return { handlecategory };
};

export default usecategoriesFetch;
