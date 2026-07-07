import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddWish } from "../featureSlice/wishlist/wishlistSlice";

const useAddToWish = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const handleAddwish = (product) => {
    if (!user) {
      navigate("/login");
      return;
    }
    dispatch(AddWish(product));
  };

  return { handleAddwish };
};

export default useAddToWish;
