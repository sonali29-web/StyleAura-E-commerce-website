import React, { useState } from "react";
import { Heart, Handbag, UserRound, LogOut } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { House, Blocks } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../featureSlice/auth/authSlice";
import { setCart } from "../featureSlice/cart/cartSlice";
import { setWish } from "../featureSlice/wishlist/wishlistSlice";
import { ECommsignOut } from "../store/auth";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [userLogout, setuserLogout] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const handleuser = () => {
    if (user) {
      setuserLogout((prev) => !prev);
    } else {
      navigate("/login");
    }
  };

  const handleLogout = () => {
    ECommsignOut();
    dispatch(logOut());
    dispatch(setCart([]));
    dispatch(setWish([]));
    navigate("/");
    setuserLogout(false);
  };

  return (
    <>
      <div className="flex justify-between items-center w-full px-4 md:px-6 border-b border-gray-100 fixed top-0 h-15 z-50 shadow-md bg-white">
        <div>
          <h2 className="relative text-2xl md:text-3xl font-bold ">
            Style<i className="text-purple-800">Aura</i>
          </h2>
        </div>

        <ul className="hidden md:flex  items-center gap-3 md:gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative text-lg font-semibold px-4 after:content-[''] after:left-4 after:absolute after:-bottom-2 after:h-0.5 after:rounded-md after:w-0 after:duration-300 after:bg-purple-800   after:transition-all ${isActive ? "text-purple-800 after:w-[calc(100%-2em)]" : "after:w-0 hover:after:w-[calc(100%-2em)]  hover:text-purple-900"}`
            }
          >
            <li>Home</li>
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `relative text-lg font-semibold px-4 after:content-[''] after:left-4 after:absolute after:-bottom-2 after:h-0.5 after:rounded-md after:w-0 after:duration-300 after:bg-purple-800   after:transition-all ${isActive ? "text-purple-800 after:w-[calc(100%-2em)]" : "after:w-0 hover:after:w-[calc(100%-2em)]  hover:text-purple-900"}`
            }
          >
            <li>Shop</li>
          </NavLink>
          <NavLink
            to="/categoriesProducts"
            className={({ isActive }) =>
              `relative text-lg font-semibold px-4 after:content-[''] after:left-4 after:absolute after:-bottom-2 after:h-0.5 after:rounded-md after:w-0 after:duration-300 after:bg-purple-800   after:transition-all ${isActive ? "text-purple-800 after:w-[calc(100%-2em)]" : "after:w-0 hover:after:w-[calc(100%-2em)]  hover:text-purple-900"}`
            }
          >
            <li>Categories</li>
          </NavLink>
          {/* <NavLink
            to="/footer"
            className={({ isActive }) =>
              `relative text-lg font-semibold px-4 after:content-[''] after:left-4 after:absolute after:-bottom-2 after:h-0.5 after:rounded-md after:w-0 after:duration-300 after:bg-purple-800   after:transition-all ${isActive ? "text-purple-800 after:w-[calc(100%-2em)]" : "after:w-0 hover:after:w-[calc(100%-2em)]  hover:text-purple-900"}`
            }
          >
            <li>About us</li>
          </NavLink> */}
        </ul>

        <div className="hidden md:flex justify-around items-center gap-5">
          <NavLink to="/wishlist">
            <div className="flex flex-col items-center justify-center">
              <Heart
                strokeWidth={1.25}
                className="     hover:text-purple-900 hover:scale-90 transition-transform duration-300"
              />

              <h2 className="text-sm">Wishlist</h2>
            </div>
          </NavLink>
          <NavLink to="/cartlist">
            <div className="flex flex-col items-center justify-center">
              <Handbag
                strokeWidth={1.25}
                className="hover:text-purple-900 hover:scale-90 transition-transform duration-300"
              />

              <h2 className="text-sm">Bag</h2>
            </div>
          </NavLink>
          <div className="relative">
            <div className="flex flex-col items-center justify-center">
              <UserRound
                onClick={handleuser}
                strokeWidth={1.25}
                className="relative hover:text-purple-900 hover:scale-90 transition-transform duration-300"
              />
              <h2 className="text-sm">Login</h2>
            </div>

            {userLogout && (
              <div className="absolute top-12 right-0  bg-white border border-gray-300 shadow-sm w-36 rounded-lg ">
                <div className="flex items-center w-full text-left hover:bg-gray-100 p-2 rounded">
                  <span></span>
                  <h2
                    onClick={handleLogout}
                    className="text-red-800 flex gap-2"
                  >
                    <span>
                      <LogOut color="#d01616" strokeWidth={1.5} />
                    </span>
                    Logout
                  </h2>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex md:hidden">
          <Link to="/wishlist">
            <Heart
              strokeWidth={1.25}
              className="hover:text-purple-900 hover:scale-90 transition-transform duration-300"
            />
          </Link>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-gray-300 shadow-lg z-50 ">
        <ul className="flex justify-around items-center py-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-purple-900"
                : "text-lg font-semibold px-4 hover:text-purple-900"
            }
          >
            <li className="relative ">
              <House strokeWidth={1.75} />
            </li>
          </NavLink>

          <NavLink
            to="/categoriesProducts"
            className={({ isActive }) =>
              isActive
                ? "text-purple-900"
                : "text-lg font-semibold px-4 hover:text-purple-900"
            }
          >
            <li className="relative text-lg font-semibold px-4">
              <Blocks strokeWidth={1.75} />
            </li>
          </NavLink>
          <NavLink
            to="/cartlist"
            className={({ isActive }) =>
              isActive
                ? "text-purple-900"
                : "text-lg font-semibold px-4 hover:text-purple-900"
            }
          >
            <li className="relative text-lg font-semibold px-4">
              <Handbag strokeWidth={1.75} />
            </li>
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-purple-900"
                : "text-lg font-semibold px-4 hover:text-purple-900"
            }
          >
            <li className="relative text-lg font-semibold px-4">
              <UserRound strokeWidth={1.75} />
            </li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Header;
