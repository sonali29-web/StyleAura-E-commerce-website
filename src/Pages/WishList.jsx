import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteWish } from "../featureSlice/wishlist/wishlistSlice";
import { IndianRupee, ShoppingCart } from "lucide-react";
import { AddCart } from "../featureSlice/cart/cartSlice";
import { FcLike } from "react-icons/fc";

const WishList = () => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      localStorage.setItem(`wish-${user.uid}`, JSON.stringify(wishlist));
    }
  }, [wishlist, user]);

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col pt-20 bg-white h-screen p-4">
      <h2 className="text-3xl font-semibold py-2">Wishlist</h2>
      <p className="text-md ">
        <span className="hover:text-purple-700">Home</span> {">"}{" "}
        <span className="hover:text-purple-700">wishist</span>
      </p>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-8 bg-white p-4">
        {wishlist.map((wish) => (
          <div
            key={wish.id}
            className="flex flex-col  p-2 border border-gray-400 rounded-lg "
          >
            <div className="bg-gray-50 relative">
              <img
                src={wish.thumbnail}
                alt=""
                className="  w-full h-full object-cover "
              />{" "}
              <span>
                <FcLike
                  color="#0a0a0a"
                  onClick={() => dispatch(DeleteWish(wish.id))}
                  strokeWidth={1.25}
                  size={22}
                  className="absolute top-2 right-2"
                />
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-md truncate font-semibold">{wish.title}</h3>
              <div className="flex items-center text-purple-800 font-bold ">
                <span>
                  <IndianRupee strokeWidth={1.5} size={18} />
                </span>
                <h2>{wish.price}</h2>
              </div>
              <div className="flex justify-center  items-center">
                <button
                  onClick={() => dispatch(AddCart(wish))}
                  className=" flex bg-purple-800 rounded-md px-4 text-white p-1 shadow-md hover:bg-purple-900"
                >
                  Add to Cart <ShoppingCart strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
