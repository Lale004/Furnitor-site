import "./App.css";
import Register from "./pages/Register"
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Faqs from "./pages/Faqs";
import ProductPage from "./pages/ProductPage";
import Blog from "./pages/Blog";
import Blog_details from "./pages/Blog_details";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Login from "./pages/Login";
import { connect } from "react-redux";
import Favicon from "react-favicon";
import Page404 from "./pages/404";
import Favorites from "./pages/Favorites";
function App({ dispatch }) {
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/list/`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "SET_PRODUCTS",
          payload: json,
        });
      });
  }, []);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Favicon url="./images/favicon.svg" />
      {pathname !== "/not-found" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Collection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Blog_details />} />
        <Route path="/not-found" element={<Page404 />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
      {pathname !== "/not-found" && <Footer />}
    </>
  );
}
export default connect()(App);
