import React, { useState,useEffect ,useRef} from "react";
import "./Home.css";

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { Pagination, Navigation } from "swiper";
import ScrollToTop from "react-scroll-to-top";

import ChatMessage from "../components/ChatMessage";
// import SwiperHome from './components/SwiperHome'

const reactLogo='react.svg'
const viteLogo ='vite.svg'
const abc1 = 'bc3.jpeg'
const kreslo = 'kreslo.jpeg'
const order = 'order.png'
const premium = 'premium.png'
const kresloPath=`/static/${kreslo}`
const rust = 'rust.png'
const iyne = 'iyne.png'

const rustPath = `/static/${rust}`
const premiumPath = `/static/${premium}`
const orderPath = `/static/${order}`
const iynePath = `/static/${iyne}`


const reactLogoPath=`/static/${reactLogo}`
const viteLogoPath=`/static/${viteLogo}`
const abcPath=`/static/${abc1}`



function Home() {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  const [homeModal, setHomeModal] = useState(false);
  const [homeModalCol2, setHomeModalCol2] = useState(false);
  const [homeModalCol3, setHomeModalCol3] = useState(false);
  const [homeModalCol4, setHomeModalCol4] = useState(false);
  const [homeModalCol5, setHomeModalCol5] = useState(false);

  const toggleHomeModal = () => {
    setHomeModal(!homeModal);
  };
  const toggleHomeModalCol2 = () => {
    setHomeModalCol2(!homeModalCol2);
  };
  const toggleHomeModalCol3 = () => {
    setHomeModalCol3(!homeModalCol3);
  };
  const toggleHomeModalCol4 = () => {
    setHomeModalCol4(!homeModalCol4);
  };
  const toggleHomeModalCol5 = () => {
    setHomeModalCol5(!homeModalCol5);
  };

  return (
    <>
      <header>
        <ChatMessage/>
      <ScrollToTop smooth top="300" width="20" height="20" color="#fff"/>
        <div className="heder-img">
          <div className="container">
            <div className="header-text-home">
              
              <h1>MODERN, CONTEMPORARY OUTDOOR FURNITURE</h1>
              <p>
              Furniture is one of the most important parts of our homes and makes our homes beautiful and comfortable. On our furniture e-commerce site, you can find all kinds of furniture products for your home. 
              </p>
              <Link to="/products">
                {" "}
                <button className="prmBtn">Shop Collections</button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      {/* /* collections */}
      <section className="sect1">
        <div className="container">
          <div className="collections">
            <div className="collection1">
              <img src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="cl1" />

              <button className="btnGray btn-modal" onClick={toggleHomeModal}>
                Collection 1
              </button>
              {homeModal && (
                <div className="modal-home">
                  <div className="overlay-home" onClick={toggleHomeModal}>
                    {" "}
                  </div>
                  <div className="modal-content">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={10}
                      loop={true}
                      autoplay={{
                        delay: 1000,
                        disableOnInteraction: true,
                      }}
                      navigation={true}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[Navigation, Autoplay]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1631048501786-4e97f20eac71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt="cl1"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt="cl1"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://plus.unsplash.com/premium_photo-1675745329042-f9a1330b2ef0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/flagged/photo-1573168710865-2e4c680d921a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt=""
                        />
                      </SwiperSlide>

                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1602028447187-cf69e6b802af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                    </Swiper>

                    <button className="modalBtn" onClick={toggleHomeModal}>
                      X
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="collection2">
              <img src="https://images.unsplash.com/photo-1619596662481-085e45d69762?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" alt="cl1" />
              <button className="btnGray" onClick={toggleHomeModalCol2}>
                Collection 2
              </button>
              {homeModalCol2 && (
                <div className="modal-home">
                  <div className="overlay-home" onClick={toggleHomeModalCol2}>
                    {" "}
                  </div>
                  <div className="modal-content-col2">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={10}
                      loop={true}
                      autoplay={{
                        delay: 1000,
                        disableOnInteraction: true,
                      }}
                      navigation={true}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[Navigation, Autoplay]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt="cl1"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt="cl1"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1601366533287-5ee4c763ae4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                          alt="cl1"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1589584649628-b597067e07a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt="cl1"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1575806980151-1078f5578718?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt="cl1"
                        />
                      </SwiperSlide>
                    </Swiper>

                    <button className="modalBtn" onClick={toggleHomeModalCol2}>
                      X
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="collection2">
              <img src="https://images.unsplash.com/photo-1558211583-d26f610c1eb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1106&q=80" alt="cl1" />
              <button className="btnGray" onClick={toggleHomeModalCol3}>
                Collection 3
              </button>
              {homeModalCol3 && (
                <div className="modal-home">
                  <div className="overlay-home" onClick={toggleHomeModalCol3}>
                    {" "}
                  </div>
                  <div className="modal-content">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={10}
                      loop={true}
                      autoplay={{
                        delay: 1000,
                        disableOnInteraction: true,
                      }}
                      navigation={true}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[Navigation, Autoplay]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                    </Swiper>

                    <button className="modalBtn" onClick={toggleHomeModalCol3}>
                      X
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="collection2">
              <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=958&q=80" alt="cl1" />
              <button className="btnGray" onClick={toggleHomeModalCol4}>
                Collection 4
              </button>
              {homeModalCol4 && (
                <div className="modal-home">
                  <div className="overlay-home" onClick={toggleHomeModalCol4}>
                    {" "}
                  </div>
                  <div className="modal-content-col2">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={10}
                      loop={true}
                      autoplay={{
                        delay: 1000,
                        disableOnInteraction: true,
                      }}
                      navigation={true}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[Navigation, Autoplay]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt="cl1"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt="cl1"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1601366533287-5ee4c763ae4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                          alt="cl1"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1589584649628-b597067e07a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt="cl1"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1575806980151-1078f5578718?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt="cl1"
                        />
                      </SwiperSlide>
                    </Swiper>

                    <button className="modalBtn" onClick={toggleHomeModalCol4}>
                      X
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="collection2">
              <img src="https://images.unsplash.com/photo-1638962502979-05d81dcaa096?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1954&q=80" alt="cl1" />
              <button className="btnGray" onClick={toggleHomeModalCol5}>
                Collection 5
              </button>
              {homeModalCol5 && (
                <div className="modal-home">
                  <div className="overlay-home" onClick={toggleHomeModalCol5}>
                    {" "}
                  </div>
                  <div className="modal-content">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={10}
                      loop={true}
                      autoplay={{
                        delay: 1000,
                        disableOnInteraction: true,
                      }}
                      navigation={true}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[Navigation, Autoplay]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                    </Swiper>

                    <button className="modalBtn" onClick={toggleHomeModalCol5}>
                      X
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="premium">
            <div className="premium-col">
              <div className="prm-img">
                <img src={orderPath} alt="order" />
              </div>

              <h2>8 YEAR GUARANTEE</h2>
              <p>For your 'peace' of mind</p>
            </div>
            <div className="premium-col">
              <div className="prm-img">
                <img src={rustPath} alt="order" />
              </div>

              <h2>Rust Free</h2>
              <p>Quality Materials</p>
            </div>
            <div className="premium-col">
              <div className="prm-img">
                <img src={premiumPath} alt="order" />
              </div>

              <h2>PREMIUM SERVICE</h2>
              <p>Premium delivery available</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="center-text">
            <h1>Ready To Ship</h1>
            <p>
           Your satisfaction is our success. On our furniture e-commerce site, we always try to provide the highest quality service to meet the needs of our customers. 
            </p>
          </div>
          {/*         
          <div className="ready-to"> */}
          {/* <div className="prev">
              <img src="./image/next.png" alt="" />
            </div> */}

          <div className="ready-ship">
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },

                550: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1000: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },

                1140: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: true,
              }}
              navigation={true}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                {" "}
                <Link to="/products">
                  <div className="set">
                    <div className="set-img">
                      <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=958&q=80" alt="" />
                    </div>
                    <div className="set-details">
                      <p className="set-name">Alma Velvet Armless</p>
                      <p className="set-price">£3,400.00</p>
                      <button>View Set</button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Link to="/products">
                  <div className="set">
                    <div className="set-img">
                      <img src="https://images.unsplash.com/photo-1619596662481-085e45d69762?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNoYWlyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                    <div className="set-details">
                      <p className="set-name">Alma Velvet Armless</p>
                      <p className="set-price">£3,400.00</p>
                      <button>View Set</button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/products">
                  <div className="set">
                    <div className="set-img">
                      <img src="https://images.unsplash.com/photo-1575806980151-1078f5578718?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGNoYWlyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                    <div className="set-details">
                      <p className="set-name">Alma Velvet Armless</p>
                      <p className="set-price">£3,400.00</p>
                      <button>View Set</button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/products">
                  <div className="set">
                    <div className="set-img">
                      <img src="https://images.unsplash.com/photo-1550226891-ef816aed4a98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGNoYWlyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                    <div className="set-details">
                      <p className="set-name">Alma Velvet Armless</p>
                      <p className="set-price">£3,400.00</p>
                      <button>View Set</button>
                    </div>{" "}
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Link to="/products">
                  <div className="set">
                    <div className="set-img">
                      <img src="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxjaGFpcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                    <div className="set-details">
                      <p className="set-name">Alma Velvet Armless</p>
                      <p className="set-price">£3,400.00</p>
                      <button>View Set</button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/products">
                  <div className="set">
                    <div className="set-img">
                      <img src="https://images.unsplash.com/photo-1575806980151-1078f5578718?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGNoYWlyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                    <div className="set-details">
                      <p className="set-name">Alma Velvet Armless</p>
                      <p className="set-price">£3,400.00</p>
                      <button>View Set</button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/products">
                  <div className="set">
                    <div className="set-img">
                      <img src="https://images.unsplash.com/photo-1550226891-ef816aed4a98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGNoYWlyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                    <div className="set-details">
                      <p className="set-name">Alma Velvet Armless</p>
                      <p className="set-price">£3,400.00</p>
                      <button>View Set</button>
                    </div>{" "}
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Link to="/products">
                  <div className="set">
                    <div className="set-img">
                      <img src="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxjaGFpcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                    <div className="set-details">
                      <p className="set-name">Alma Velvet Armless</p>
                      <p className="set-price">£3,400.00</p>
                      <button>View Set</button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            </Swiper>
            {/* </div> */}
          </div>
        </div>
      </section>
      <section>
        <div className="section-image">
          <div className="sel-text">
            <img src={iynePath} alt="iyne" />
            <p>COMMITED TO EUROPIAN MANUFACTURING</p>
            <h1>
              our Products are made with high quality european fabric and sewn
              by a small team CRAFTSPEOPLE in EUROPE
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="center-text">
            <h1>Explore each unique collection</h1>
            <p>
            On our furniture e-commerce site, we offer furniture products made from quality and durable materials at affordable prices that you can use for many years.
            </p>
          </div>
          <div className="collections">
            <div className="collection1">
              <img src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="cl1" />

              <button className="btnGray btn-modal" onClick={toggleHomeModal}>
                Collection 1
              </button>
              {homeModal && (
                <div className="modal-home">
                  <div className="overlay-home" onClick={toggleHomeModal}>
                    {" "}
                  </div>
                  <div className="modal-content">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={10}
                      loop={true}
                      autoplay={{
                        delay: 1000,
                        disableOnInteraction: true,
                      }}
                      navigation={true}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[Navigation, Autoplay]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1631048501786-4e97f20eac71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt="cl1"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt="cl1"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://plus.unsplash.com/premium_photo-1675745329042-f9a1330b2ef0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/flagged/photo-1573168710865-2e4c680d921a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt=""
                        />
                      </SwiperSlide>

                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1602028447187-cf69e6b802af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                    </Swiper>

                    <button className="modalBtn" onClick={toggleHomeModal}>
                      X
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="collection2">
              <img src="https://images.unsplash.com/photo-1619596662481-085e45d69762?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" alt="cl1" />
              <button className="btnGray" onClick={toggleHomeModalCol2}>
                Collection 2
              </button>
              {homeModalCol2 && (
                <div className="modal-home">
                  <div className="overlay-home" onClick={toggleHomeModalCol2}>
                    {" "}
                  </div>
                  <div className="modal-content-col2">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={10}
                      loop={true}
                      autoplay={{
                        delay: 1000,
                        disableOnInteraction: true,
                      }}
                      navigation={true}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[Navigation, Autoplay]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt="cl1"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt="cl1"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1601366533287-5ee4c763ae4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                          alt="cl1"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1589584649628-b597067e07a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt="cl1"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1575806980151-1078f5578718?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt="cl1"
                        />
                      </SwiperSlide>
                    </Swiper>

                    <button className="modalBtn" onClick={toggleHomeModalCol2}>
                      X
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="collection2">
              <img src="https://images.unsplash.com/photo-1558211583-d26f610c1eb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1106&q=80" alt="cl1" />
              <button className="btnGray" onClick={toggleHomeModalCol3}>
                Collection 3
              </button>
              {homeModalCol3 && (
                <div className="modal-home">
                  <div className="overlay-home" onClick={toggleHomeModalCol3}>
                    {" "}
                  </div>
                  <div className="modal-content">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={10}
                      loop={true}
                      autoplay={{
                        delay: 1000,
                        disableOnInteraction: true,
                      }}
                      navigation={true}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[Navigation, Autoplay]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                    </Swiper>

                    <button className="modalBtn" onClick={toggleHomeModalCol3}>
                      X
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="collection2">
              <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=958&q=80" alt="cl1" />
              <button className="btnGray" onClick={toggleHomeModalCol4}>
                Collection 4
              </button>
              {homeModalCol4 && (
                <div className="modal-home">
                  <div className="overlay-home" onClick={toggleHomeModalCol4}>
                    {" "}
                  </div>
                  <div className="modal-content-col2">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={10}
                      loop={true}
                      autoplay={{
                        delay: 1000,
                        disableOnInteraction: true,
                      }}
                      navigation={true}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[Navigation, Autoplay]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt="cl1"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt="cl1"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1601366533287-5ee4c763ae4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                          alt="cl1"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1589584649628-b597067e07a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt="cl1"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1575806980151-1078f5578718?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt="cl1"
                        />
                      </SwiperSlide>
                    </Swiper>

                    <button className="modalBtn" onClick={toggleHomeModalCol4}>
                      X
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="collection2">
              <img src="https://images.unsplash.com/photo-1638962502979-05d81dcaa096?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1954&q=80" alt="cl1" />
              <button className="btnGray" onClick={toggleHomeModalCol5}>
                Collection 5
              </button>
              {homeModalCol5 && (
                <div className="modal-home">
                  <div className="overlay-home" onClick={toggleHomeModalCol5}>
                    {" "}
                  </div>
                  <div className="modal-content">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={10}
                      loop={true}
                      autoplay={{
                        delay: 1000,
                        disableOnInteraction: true,
                      }}
                      navigation={true}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[Navigation, Autoplay]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                          alt=""
                        />
                      </SwiperSlide>
                    </Swiper>

                    <button className="modalBtn" onClick={toggleHomeModalCol5}>
                      X
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="section2-sing">
            <div className="section2-details">
              <p className="section2-title frunt-title">FURNITURE TO WRITE HOME ABOUT</p>
              <p className="section2-description">
              A furniture website is an online platform that specializes in selling furniture products to customers. These websites offer a wide range of furniture items that cater to the needs of different customers. Furniture websites allow customers to browse, select, and purchase products from the comfort of their homes, without the need to physically visit a brick-and-mortar store.

A furniture website typically features a user-friendly interface that allows customers to easily navigate and find the products they are looking for. The website may be organized by furniture type, room, style, or material. Each product is typically accompanied by detailed descriptions, specifications, and multiple high-quality images to help customers make informed purchase decisions.
              </p>

              <div className="coment">
                <ul>
                  <li>
                    <img src="./images/Home/ulduz.svg" alt="" />
                  </li>
                  <li>
                    <img src="./images/Home/ulduz.svg" alt="" />
                  </li>
                  <li>
                    <img src="./images/Home/ulduz.svg" alt="" />
                  </li>
                  <li>
                    <img src="./images/Home/ulduz.svg" alt="" />
                  </li>
                  <li>
                    <img src="./images/Home/ulduz.svg" alt="" />
                  </li>
                </ul>
                <h3>Wade Warren</h3>
              </div>
            </div>
            <div className="section2-img">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: true,
                }}
                navigation={true}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
              >
              
                 <SwiperSlide>
                  {" "}
                  <img
                    src="https://images.unsplash.com/photo-1585264550248-1778be3b6368?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=463&q=80"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img
                    src="https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img
                    src="https://images.unsplash.com/photo-1507904953637-96429a46671a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img
                    src="https://images.unsplash.com/photo-1547043736-b2247cb34b01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img
                    src="https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                    alt=""
                  />
                </SwiperSlide> 
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="word-instagram">
          <h1>Get Inspired & Find Us on Instagram</h1>
        </div>
      </div>
      <section>
        <div className="footer-imgs">
          <Link to="/product/46">
            {" "}
            <div className="footer-img-col">
              <img src="./images/Home/collection3.png" alt="" />
              <div className="overlay-foter-home">
                <div className="whiteBtn">View Product</div>
              </div>
            </div>
          </Link>
          <Link to="/product/3">
            <div className="footer-img-col">
              <img src="./images/Home/foter.png" alt="" />
              <div className="overlay-foter-home">
                <div className="whiteBtn">View Product</div>
              </div>
            </div>
          </Link>
          <Link to="/product/57">
            <div className="footer-img-col">
              <img src="./images/Home/foter2.png" alt="" />
              <div className="overlay-foter-home">
                <div className="whiteBtn">View Product</div>
              </div>
            </div>
          </Link>
          <Link to="/product/57">
            <div className="footer-img-col">
              <img src="./images/Home/collection4.png" alt="" />
              <div className="overlay-foter-home">
                <div className="whiteBtn">View Product</div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
