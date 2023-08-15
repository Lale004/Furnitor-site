import React from "react";
import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { TbHeartFilled, TbHeart } from "react-icons/tb";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";

import { connect } from "react-redux";
function Navbar({ dispatch, basketCount }) {
  const [barActiveInput, setBarActiveInput] = useState(false)

  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    console.log("kil");
  };

 const green='Green.png'
 const greenPath=`/static/${green}`
  return (
    <>
      <div className="sale-text">
        <h2>
          spring seaSon sale | 20% off entire store | Free Premium UK Delivery
        </h2>
      </div>
      <div className="navbar">
        <div className="container">
          <nav>
            <Link to="/"><div className="nav-img">
              <img src={greenPath} alt="" />
            </div></Link>
            <div className="nav-list">
              <ul className="ul-bir ul-home">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/products">Products</NavLink>
                </li>

                <li>
                  {" "}
                  <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/faqs">FAQ</NavLink>
                </li>
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>

                <li>
                  {" "}
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
            <button className="icon__nav" onClick={showNavbar}>
              <FaBars />
            </button>

            <div className="nav-two">
              {/* <div className="nav-list">
                <ul className="ul-bir">
                  
                </ul>
              </div> */}

              <div className="nav-icon">
                <NavLink to="/cart">
                  {" "}
                  <div className="icon-shop">
                    <div className="nav-shop-icon">
                      <HiOutlineShoppingBag />
                    </div>
                    <span className="icn">
                      {basketCount ? `${basketCount}` : "0"}
                    </span>
                  </div>
                </NavLink>

                <NavLink to="/favorites">
                  {" "}
                  <div className="nav-heart">

                    <TbHeartFilled />
                  </div>
                </NavLink>

                {/* <div className="searchBar">
                  <input type="text" placeholder="Search" className={barActiveInput ? 'searcBarInput barActiveInput':'searcBarInput'}/>
                  <button type="submit" className="nav-searchBtn" onClick={() => setBarActiveInput(!barActiveInput)}><FiSearch/></button>
               
                </div> */}

              </div>
              <NavLink to="/login"><div className="user-icon">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />
                {/* <NavLink to="/login"><AiOutlineUser/></NavLink> */}
              </div></NavLink>

              <div className="nav-list" ref={navRef}>
                <div className="nav-meridian">
                  <div className="nav-img-res">
                    <img src={greenPath} alt="" />

                  </div>
                  <button onClick={showNavbar} className=" close-icon">
                    <FaTimes />
                  </button>
                </div>

                <ul className="ul-iki">
                  <li onClick={showNavbar}>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li onClick={showNavbar}>
                    <NavLink to="/products">Products</NavLink>
                  </li>
                  <li onClick={showNavbar}>
                    {" "}
                    <NavLink to="/blog">Blog</NavLink>
                  </li>
                  <li onClick={showNavbar}>
                    {" "}
                    <NavLink to="/about">About Us</NavLink>
                  </li>
                  <li onClick={showNavbar}>
                    {" "}
                    <NavLink to="/contact">Contact</NavLink>
                  </li>

                  <li onClick={showNavbar}>
                    {" "}
                    <NavLink to="/faqs">FAQ</NavLink>
                  </li>
                </ul>


              </div>


            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
const t = (a) => {
  return {
    basketCount: a.basket.length,
  };
};
export default connect(t)(Navbar);
