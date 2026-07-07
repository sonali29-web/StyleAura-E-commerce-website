import React, { useState } from "react";
import signImg from "../assets/icons/Computer login-pana.png";
import { Link } from "react-router-dom";
import { signUp } from "../store/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
    } catch (err) {
      console.log(err.message);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-6 bg-gray-50 pt-16">
      <div className="grid grid-cols-1  md:grid-cols-[40%_60%] rounded-lg w-full max-w-5xl  overflow-hidden  border border-gray-400 shadow-lg">
        <div className=" hidden bg-purple-100 md:flex flex-col items-start p-4 gap-5">
          <h2 className="text-4xl font-semibold text-purple-800">Sign Up</h2>
          <p>Get access to your cart, Orders, Wishlist and Recommendations</p>
          <img
            src={signImg}
            alt=""
            className="w-full max-w-xs mx-auto"
          />
        </div>

        <form
          className="flex justify-center items-center p-4 bg-white"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div className="w-full max-w-md">
            <div className="flex flex-col p-4">
              <h2 className="text-2xl md:text-3xl font-semibold p-2 text-center text-purple-800">
                Sign Up
              </h2>
              <p className="text-center text-sm">
                Welcome! Enter your Information
              </p>
              <div className="flex flex-col p-4">
                <label htmlFor="">Email</label>
                <input
                  autoComplete="off"
                  type="email"
                  name="email"
                  value={email}
                  onChange={emailChange}
                  placeholder="Enter Email"
                  className="w-full p-2 border border-gray-300 outline-none rounded-lg"
                />
              </div>

              <div className="flex flex-col p-4 rounded-lg">
                <label htmlFor="">Password</label>
                <input
                  autoComplete="off"
                  type="password"
                  name="password"
                  value={password}
                  onChange={passwordChange}
                  placeholder="Enter Password"
                  className="w-full p-2 border border-gray-300 outline-none rounded-lg"
                />
              </div>

              <button
                type="submit"
                className="mt-6 text-md text-white rounded-lg font-semibold p-3 bg-purple-900 rounded-lg hover:scale-90 transition-transform duration-150"
              >
                Sign Up
              </button>

              <p className="text-xs text-center p-2">
                Dont have account ?{" "}
                <Link to="/login" className="cursor-pointer font-semibold text-purple-800 underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
