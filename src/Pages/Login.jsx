import React from "react";
import loginImg from "../assets/icons/Computer login-pana.png";
import { useNavigate } from "react-router-dom";
import { loginIn } from "../store/auth";
import { useState } from "react";
import {Eye,EyeOff} from "lucide-react"

const Login = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

const [showPass,setShowPass]=useState(false)

  const navigate = useNavigate();

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginIn(email, password);
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 pt-16">
      <div className="grid grid-cols-1  md:grid-cols-[40%_60%] w-full max-w-5xl rounded-lg w-200  overflow-hidden  border border-gray-400 shadow-lg">
        <div className="hidden md:flex flex-col justify-center bg-purple-100 p-8 gap-6">
          <h2 className="text-4xl font-semibold text-purple-800">Login</h2>
          <p>Get access to your cart, Orders, Wishlist and Recommendations</p>
          <img src={loginImg} alt="" className="w-full max-w-xs mx-auto" />
        </div>
        <form
          className="flex justify-center items-center p-6 md:p-10 bg-white"
          onSubmit={handleSubmit}  autoComplete="off"
        >
          <div className="  w-full max-w-md">
            <div className="flex flex-col p-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-center text-purple-800">
                Login
              </h2>
              <p className="text-center text-sm">
                Welcome! Enter your Login Information
              </p>
              <div className="flex flex-col p-4">
                <label htmlFor="">Email</label>
                <input
                  name="email"
                  value={email}
                  onChange={emailChange}
                  type="email"
                  placeholder="Enter Email"
                  className="w-full p-2 border border-gray-300 outline-none rounded-lg"
                />
              </div>

              <div className="flex flex-col p-4 rounded-lg">
                <label htmlFor="">Password</label>
                <div className="relative">
                <input
                  name="password"
                  value={password}
                  onChange={passwordChange}
                  autoComplete="off"
                  type={showPass ? "text" :"password"}
                  placeholder="Enter Password"
                  className="w-full p-2 border border-gray-300 outline-none rounded-lg"
                />

                <button onClick={()=>setShowPass(!showPass)}   className="absolute top-1/2 right-3 -translate-y-1/2">
{showPass ? <Eye strokeWidth={1.75} size={18} /> :<EyeOff strokeWidth={1.75} size={18}/> }
                </button>
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-lg bg-purple-900 p-3 font-semibold text-white hover:bg-purple-800 transition-colors"
              >
                Login
              </button>

              <p className="text-xs text-center p-2">
                Dont have account ?{" "}
                <span
                  className="cursor-pointer font-semibold text-purple-800 hover:underline"
                  onClick={() => navigate("/signUp")}
                >
                  SignUp
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
