import { useState,useEffect } from "react";
import {Link} from 'react-router-dom'
import VideoAbout from "../components/VdeoAbout"
import "./About.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { Pagination, Navigation } from "swiper";
import ScrollToTop from "react-scroll-to-top";
import VdeoAbout from "../components/VdeoAbout";
function About() {
  useEffect(() => {
    document.title = 'About';
  }, []);
  return (
    <>
      <div className="header">
      <ScrollToTop smooth top="20" width="20" height="20" color="#fff"/>
        <div className="container">
          <div className="header-content">
            <h1>Meridian Furniture</h1>
            <p>
            As a direct importer, we are able to provide the most competitive pricing while still maintaining the highest level of quality and service. We are constantly updating our product line, so visit our website often to see whats new.
            </p>
          <Link to="/products">  <button>See Our Collection</button></Link>
          </div>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="section2-sing">
            
            <div className="section2-img">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}


                loop={true}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: true,

                }}
                navigation={true}



                freeMode={true}
                watchSlidesProgress={true}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide> <img src="https://images.unsplash.com/photo-1557592722-a0a649c8c5c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" /></SwiperSlide>
                <SwiperSlide> <img src="https://images.unsplash.com/photo-1600488999593-83309d5d766e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" /></SwiperSlide>
                <SwiperSlide> <img src="https://images.unsplash.com/photo-1619596658767-f3bbb82b0dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" /></SwiperSlide>
                <SwiperSlide> <img src="https://images.unsplash.com/photo-1533008093099-e2681382639a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzg0fHxmdXJuaXR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" /></SwiperSlide>
                <SwiperSlide> <img src="https://images.unsplash.com/photo-1553855994-da8397e155c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" /></SwiperSlide>
                <SwiperSlide> <img src="https://images.unsplash.com/photo-1632935187086-49a9d8027292?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1922&q=80" alt="" /></SwiperSlide>


              </Swiper>
            </div>
            
            <div className="section2-details">
              <p className="section2-title">We Are Meridian</p>
              <p className="section2-description">  Family owned and operated for over 20 years, Meridian Furniture has grown to become the premier home furnishings importer & distributor and continues to rapidly grow in recognition for offering top quality furniture and unique designs at an affordable price. Featuring a product line of over 5,000 SKUs, you can be sure to find something you'll love for any room in your home! With our user friendly portal, dealers have access to real-time stock as well as a vast variety of drop-shipping options ranging from Curbside to White Glove.  We strive to deliver today's best customer service, while maintaining a personal relationship with our dealers so they can ensure success and profitability.
              </p>

            </div>
          </div>
    
    <div className="video-sec">
      <h1>How are the mebels of the Meridian mebel store prepared?</h1>
<VdeoAbout/>
    </div>
           </div>
      </section>

   
    </>
  );
}

export default About;
