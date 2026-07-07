import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Heart, IndianRupee, ShoppingCart, X } from "lucide-react";
import { AddCart, DeleteCart } from "../featureSlice/cart/cartSlice";
import { AddWish } from "../featureSlice/wishlist/wishlistSlice";
import { convertPrice } from "../utils/currency";
import cartImg from "../assets/icons/cart-removebg-preview.png";

const CartList = () => {
  const { cart } = useSelector((state) => state.cart);

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { totalprice, aditionalFee, totalItemPrice } = useMemo(() => {
    const totalprice = cart.reduce(
      (acc, item) => acc + convertPrice(item.price) * item.quantity,
      0,
    );

    const aditionalFee = cart.length > 0 ? 99 : 0;

    const totalItemPrice = totalprice + aditionalFee;

    return { totalprice, aditionalFee, totalItemPrice };
  }, [cart]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(`cart-${user.uid}`, JSON.stringify(cart));
    }
  }, [cart, user]);

  return (
    <>
      <div className="bg-white min-h-screen">
        <div className="flex flex-col pt-20 gap-2 bg-white p-4">
          <h2 className="text-3xl font-semibold ">Shopping Cart</h2>
          <p className="text-md">
            <span className="hove:text-purple-800">Home</span> {">"}{" "}
            <span className="hove:text-purple-800">Cart</span>
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col justify-start items-center">
            <img className="w-100 object-contain" src={cartImg} alt="" />
            <p className="mt-4 text-purple-500">Your wishlist is empty</p>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto px-4 py-6 bg-white">
            <div className="grid grid-cols-1  md:grid-cols-[1fr_1fr] gap-6 p-6 bg-white">
              <div className=" space-y-9">
                {cart.map((mycart) => (
                  <div
                    key={mycart.id}
                    className="   flex flex-col sm:flex-row gap-6 border border-gray-100 rounded-lg shadow-sm bg-white p-4"
                  >
                    <div className="bg-gray-50 relative  w-full sm:w-32 h-40 sm:h-32 rounded-lg overflow-hidden">
                      <img
                        src={mycart.thumbnail}
                        alt=""
                        className="w-full h-full object-cover "
                      />{" "}
                      <span></span>
                    </div>

                    <div className=" flex-1 space-y-3">
                      <h3 className="text-md truncate font-semibold">
                        {mycart.title}
                      </h3>
                      <div className="flex items-center text-purple-800 font-bold ">
                        <span>
                          <IndianRupee strokeWidth={1.5} size={18} />
                        </span>
                        <h2>{convertPrice(mycart.price)}</h2>
                      </div>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          className="px-2 py-1 bg-gray-200 rounded"
                          onClick={() => dispatch(DeleteCart(mycart))}
                        >
                          -
                        </button>
                        <span>{mycart.quantity}</span>
                        <button
                          className="px-2 py-1 bg-gray-200 rounded"
                          onClick={() => dispatch(AddCart(mycart))}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex sm:flex-col gap-2 justify-end">
                      <button
                        className="p-1  shadow-sm rounded-lg "
                        onClick={() => dispatch(AddWish(mycart))}
                      >
                        <Heart strokeWidth={1.25} />
                      </button>
                      <button className="p-1 text-white shadow-sm rounded-lg">
                        <X
                          color="#e50b0b"
                          strokeWidth={1.5}
                          onClick={() => dispatch(DeleteCart(mycart.id))}
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border border-gray-300 p-2 h-fit sticky top-24 rounded-lg shadow-sm">
                <div className=" p-4 max-w-225">
                  <div className="flex flex-col">
                    <h2 className="text-lg font-semibold p-2">Price Details</h2>
                    <div className="flex justify-between p-2">
                      <h2>Product Price</h2>
                      <h2>{totalprice}</h2>
                    </div>

                    <div className="flex justify-between p-2">
                      <h2>Additional Fees</h2>
                      <h2>{aditionalFee}</h2>
                    </div>
                    <hr className="text-gray-300" />

                    <div className="flex justify-between p-2">
                      <h2 className="text-md font-semibold">Total Price</h2>
                      <h2>{totalItemPrice}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartList;
