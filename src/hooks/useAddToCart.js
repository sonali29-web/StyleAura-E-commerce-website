import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCart } from "../featureSlice/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const useAddToCart = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleAddcart = (product) => {
    if (!user) {
      navigate("/login");
      return;
    }

    dispatch(AddCart(product));
  };

  return { handleAddcart };
};

export default useAddToCart;
