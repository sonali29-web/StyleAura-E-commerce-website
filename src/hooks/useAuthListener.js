import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logOut } from "../featureSlice/auth/authSlice";
import { setCart } from "../featureSlice/cart/cartSlice";
import { auth } from "../store/firebaseConfigure";
import { setWish } from "../featureSlice/wishlist/wishlistSlice";

const useAuthListener = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        dispatch(
          login({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
          }),
        );

        const savedCart = JSON.parse(
          localStorage.getItem(`cart-${firebaseUser.uid}`) || "[]",
        );
        dispatch(setCart(savedCart));

        const savedWish = JSON.parse(
          localStorage.getItem(`cart-${firebaseUser.uid}`) || "[]",
        );
        dispatch(setWish(savedWish));
      } else {
        dispatch(logOut());
        dispatch(setCart([]));
        dispatch(setWish([]));
      }
    });

    return () => unSub();
  }, [dispatch]);
};

export default useAuthListener;
