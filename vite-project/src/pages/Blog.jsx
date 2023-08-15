
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
            <h1>Məqalə</h1>
            <p>Mebel/Dizayn</p>
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
                <img src="images/Blog/collection1.png" alt="" />
              </div>
              <div className="swipertext__sec">
                {/* <div className="swipertext_h1">
                  <h1>Yataq otağı dəstləri</h1>
                </div> */}
             
                <p>Siz dünyanın hər yerində ola bilərsiniz, ancaq sizin üçün tamamilə fərdi olan və tamamilə öz üslubunuzda olmaq istədiyiniz tək yer yataq otağınızdır. Yataq otaqları müxtəlif üslubda ola bilər və üslub da yataq otağınızı necə dizayn edəcəyinizi müəyyən edən yerin iqlim şəraitindən asılıdır.</p>
                <button>Davamı</button>
                <p>"Əsl vizual və fiziki rahatlıq hər otaq üçün vacibdir"</p>
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
                <p>Qonaq otağı aksessuarlarının seçilməsinin açarı onların hamısının bir-biri ilə uyğunlaşmasının lazım olduğunu başa düşməkdir. Onları tək-tək seçə bilməzsiniz.Onları kolleksiya kimi düşünün.</p>
                <button>Davamı</button>
                <p>"Ev Gesamtkunstwerk kimi olmalıdır. Hər şey bir-biri ilə uyğunlaşmalıdır və düşünülmüş olmalıdır”.</p>
                <h4>Alyssa Kapito</h4>
              </div>
              <div className="swiperimage__sec">
                <img src="images/Blog/collection3.png" alt="" />
              </div>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bigswiper__sec">
              <div className="swiperimage__sec">
                <img src="images/Blog/bc2.jpeg" alt="" />
              </div>
              <div className="swipertext__sec">
                {/* <div className="swper_3">
                <h1>Yumşaq dəstlər</h1>
                </div> */}
                
                <p>Yumşaq dəst almaq, eviniz üçün edə biləcəyiniz ən vacib investisiyalardan biridir. Qonaq otağında bu, istirahət etmək, oxumaq, yemək, əylənmək, televizora baxmaq və hətta yatmaq üçün bir parçadır, buna görə də gələcək illər üçün davam edəcək birinə sərmayə qoymağımızın mənası var.</p>
                <button>Davamı</button>
                <p>"Divanınız istirahət məkanınızı müəyyən edəcək böyük bir parçadır"</p>
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
