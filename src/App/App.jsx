import "./App.css";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Pages/Layout";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import ProductContext from "../Context/ProductContext";
import UserContext from "../Context/UserContext";
import CartContext from "../Context/CartContext";
import OrderContext from "../Context/OrderContext";
//import AboutUs from '../Pages/AboutUs';
import Cart from "../Components/Cart/CartPage";
import Checkout from "../Components/Payment/Checkout";
import ProtectedRoute from "../Components/Payment/ProtectedRoute";

const AboutUs = lazy(() => import("../Pages/AboutUs"));
//import PageNotFound from '../Pages/PageNotFound';
const PageNotFound = lazy(() => import("../Pages/PageNotFound"));
//import TryLogin from '../Pages/TryLogin';
const TryLogin = lazy(() => import("../Pages/TryLogin"));
//import UserProfile from '../Pages/UserProfile';
const UserProfile = lazy(() => import("../Pages/UserProfile"));

const basename = import.meta.env.PROD ? "/Glamorix" : "/";

function App() {
  return (
    <>
      <BrowserRouter basename={basename}>
        <CartContext>
          <UserContext>
            <ProductContext>
              <OrderContext>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route index={true} element={<Home />} />

                    <Route path="products" element={<Products />}></Route>
                    <Route element={<ProtectedRoute />}>
                      <Route path="checkout" element={<Checkout />}></Route>
                    </Route>
                    <Route path="cart" element={<Cart />}></Route>

                    <Route
                      path="profile/:userId"
                      element={<UserProfile />}
                    ></Route>
                    <Route path="aboutus" element={<AboutUs />}></Route>
                    <Route path="*" element={<PageNotFound />}></Route>
                  </Route>
                  <Route path="login" element={<TryLogin />}></Route>
                  {/* <Route path="home" element={<Home />}></Route> */}
                </Routes>
              </OrderContext>
            </ProductContext>
          </UserContext>
        </CartContext>
      </BrowserRouter>
    </>
  );
}

export default App;
