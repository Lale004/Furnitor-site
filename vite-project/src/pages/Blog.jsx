
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import './Blog.css'
import {FiChevronRight} from "react-icons/fi";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import './styles.css';
import { Navigation } from 'swiper';

function Blog() {
  
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/blogs/")
    .then((response) => response.json())
        .then((data) => {
          setBlogs(data);
          console.log(data);
        });
    }, []);



  return (
    <main>

      <section className='mainsec__header'>
        <div className="container">
          <div className='whitebox__sec'>
            <h1>Article</h1>
            <p>Furniture/Design</p>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
        <div className="yazicilar">
          <div className="yazici">
            <div className="yazici_img">
            <img src="https://i.pinimg.com/736x/c0/6e/d0/c06ed026b6a1a8563340a614d577a756.jpg" alt="" />
            </div>
            <div className="yazici_adi">
           <h3>
           Anna Torv
           </h3>
            </div>
          </div>
          <div className="yazici">
            <div className="yazici_img">
           <img src="https://i.pinimg.com/736x/41/06/bc/4106bc059ec6b52bae0384be355efe63.jpg" alt="" />
            </div>
            <div className="yazici_adi">
           <h3>
           David Paulsen
           </h3>
            </div>
          </div>
          <div className="yazici">
            <div className="yazici_img">
              <img src="https://i.pinimg.com/564x/02/bb/91/02bb91e7384431515474e44f3d952120.jpg" alt="" />
            </div>
            <div className="yazici_adi">
           <h3>
           Paul Rudd
           </h3>
            </div>
          </div>
        </div>
        </div>
       
      </section>
      <section className="swiper__secmain">
        <div className="container">
   
        </div>
     
        <Swiper
          // slidesPerView={1}
          spaceBetween={80}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper swiper__sec">
          <SwiperSlide>
            <div className="bigswiper__sec">
              <div className="swiperimage__sec">
                <img src="https://johnlewis.scene7.com/is/image/JohnLewis/furnitureandlight-livingroom-carousel-gb-010323" alt="" />
              </div>
              <div className="swipertext__sec">
                {/* <div className="swipertext_h1">
                  <h1>Yataq otağı dəstləri</h1>
                </div> */}
             
                <p>You may be anywhere in the world, but the only place that is completely personal to you and where you want to be completely your own is your bedroom. Bedrooms can be of different styles and the style also depends on the climate of the place which determines how to design your bedroom.</p>
                <button>Continue</button>
                <p>"True visual and physical comfort is essential for every room"</p>
                <h4>Mark Hampton</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bigswiper__sec">
              <div className="swipertext__sec ">
              {/* <div className="swipertext_2">
                <h3>Qonaq otağı dəstləri</h3>
                </div> */}
                <p>The key to choosing living room accessories is to understand that they all need to coordinate with each other. You can't pick them individually. Think of them as a collection.</p>
                <button>Continue</button>
                <p>"A house should be like a Gesamtkunstwerk. Everything should fit together and be thought out."</p>
                <h4>Alyssa Kapito</h4>
              </div>
              <div className="swiperimage__sec">
                <img src="https://www.universalfurniture.com/images/pages/home/2022/U030501_RM.jpg?v=fcYu7oTsSUAyVfxWs5MbR2L0Jpeg0JzIiZ4Eaa_BqPw" alt="" />
              </div>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bigswiper__sec">
              <div className="swiperimage__sec">
                <img src="https://ak1.ostkcdn.com/img/mxc/08142023-SPCOOP-Desktop_Furniture_iNSPIREQ.png?imwidth=680" alt="" />
              </div>
              <div className="swipertext__sec">
                {/* <div className="swper_3">
                <h1>Yumşaq dəstlər</h1>
                </div> */}
                
                <p>YBuying a nursery is one of the most important investments you can make for your home. In the living room, it's a piece for lounging, reading, eating, entertaining, watching TV, and even sleeping, so it makes sense that we invest in one that will last for years to come.</p>
                <button>Continue</button>
                <p>"Your sofa is a big piece that will define your relaxation space"</p>
                <h4>Brittney Morgan</h4>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>






      </section>
      <section className="blogs">
        <div className="container">
          <h2>Articles</h2>
          <div className="blogs__list">
            
            {blogs.map((blog) => (
              <div className="blog" key={blog.id}>
                <div className="product__image">
                  <img
                    src={blog.image}
                    alt=""
                  />
                  <span className='minicard__onimage'>
                    Design
                     {/* {blog.description} */}
                  </span>
                </div>
                <div className="blog_text">
                  <h1>{blog.title}</h1>
                  <div className='foot-notesec'>
                    <p>{blog.created_date}</p>
                    <Link to={`/blog/${blog.id}`}><div className="yonlendir">
                    <FiChevronRight/>

                     </div></Link>
                     
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;
