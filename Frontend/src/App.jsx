import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import { Helmet } from "react-helmet";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <Helmet>
        <title>Online Food Delivery App</title>
        <meta
          name="description"
          content="We provide online food delivery services at your door step.Order your food 24x7 from anywhere from your local restaurents"
        />
        <meta property="og:title" content="Online Food Delivery App" />
        <meta
          property="og:description"
          content="We provide online food delivery services at your door step.Order your food 24x7 from anywhere from your local restaurents"
        />
        <meta
          property="og:image"
          content="https://cdn.vectorstock.com/i/500p/82/28/tomato-fruit-vegetable-logo-vector-14888228.jpg"
        />
        <meta
          property="og:url"
          content="https://food-app-eosin-six.vercel.app/"
        />
        <meta name="twitter:title" content="Online Food Delivery App" />
        <meta
          name="twitter:description"
          content="We provide online food delivery services at your door step.Order your food 24x7 from anywhere from your local restaurents"
        />
        <meta
          name="twitter:image"
          content="https://cdn.vectorstock.com/i/500p/82/28/tomato-fruit-vegetable-logo-vector-14888228.jpg"
        />
        <meta
          name="twitter:url"
          content="https://food-app-eosin-six.vercel.app/"
        />
      </Helmet>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
