import { useEffect, useState } from "react";
import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayOut from "./Pages/LayOut";
const Home = lazy(() => import("./Pages/Home"));
const Products = lazy(() => import("./Pages/Products"));
const CartList = lazy(() => import("./Pages/CartList"));
const WishList = lazy(() => import("./Pages/WishList"));
const Login = lazy(() => import("./Pages/Login"));
const SignUp = lazy(() => import("./Pages/SignUp"));
const CategoriesProducts = lazy(() => import("./Pages/CategoriesProducts"));
const ProductView = lazy(() => import("./Pages/ProductView"));
import useAuthListener from "./hooks/useAuthListener";
import Loader from "./components/Loader";

function App() {
  useAuthListener();

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader></Loader>}>
          <Routes>
            <Route path="/" element={<LayOut></LayOut>}>
              <Route index element={<Home></Home>}></Route>

              <Route path="/cartlist" element={<CartList></CartList>}>
                {" "}
              </Route>

              <Route path="/products" element={<Products></Products>}></Route>

              <Route path="/wishlist" element={<WishList></WishList>}></Route>

              <Route
                path="/categoriesProducts"
                element={<CategoriesProducts></CategoriesProducts>}
              ></Route>

              <Route
                path="/product/:id"
                element={<ProductView></ProductView>}
              ></Route>

              <Route path="/login" element={<Login></Login>}></Route>

              <Route path="/signUp" element={<SignUp></SignUp>}></Route>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
