import "./ProductPage.css";
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Review from "../components/Review";
import { connect } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { Pagination, Navigation } from "swiper";
import ScrollToTop from "react-scroll-to-top";
import SingleCardSwiper from "../components/SingleCartSwiper";
import { MdLock } from "react-icons/md";
function ProductPage({ products, basket, dispatch }) {
  useEffect(() => {
    document.title = 'Single product';
  }, []);
  const [data, setData] = useState([]); // Başlangıçta boş bir dizi ile başlatın
  const { id } = useParams();

  useEffect(() => {
    fetch('http://127.0.0.1:8000/list/')
      .then((response) => response.json())
      .then((json) => {
        console.log('API Response:', json);
        setData(json);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log(id);
  const product = data.find((item) => item.id === parseInt(id));
  console.log(product);
  console.log( product?.name); 
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const addBasket = (id) => {
    dispatch({
      type: "SET_BASKET",
      payload: [...basket, { id: id, count: 1 }],
    });
    localStorage.setItem(
      "basket",
      JSON.stringify([...basket, { id: id, count: 1 }])
    );
  };
  const removeBasket = (id) => {
    dispatch({
      type: "SET_BASKET",
      payload: [...basket.filter((basket) => basket.id !== id)],
    });
    localStorage.setItem(
      "basket",
      JSON.stringify([...basket.filter((basket) => basket.id !== id)])
    );
  };
  const inBasket = basket.find((a) => a.id == product?.id);

  const discountPercentage = Math.round(((product?.old_price - product?.new_price) / product?.old_price) * 100);
  const offText = discountPercentage > 0 ? `${discountPercentage}% OFF` : '';

  return (
    <>
      <div className="container">
      <ScrollToTop smooth top="1000" width="20" height="20" color="#fff"/>
      <div className="single-card-navigation">
        <p>
          <Link to="/">HOME</Link> / <Link to="/products">SIAM </Link> /
        </p>
        <p>{product?.category}</p>
      </div>
      <div className="single-card">
        <div className="single__card-cols">
          <div className="images">
            <SingleCardSwiper props={product} />
          </div>
          <div className="cart-text-col">
            <div className="card-title">
              <p>{product?.name}</p>
            </div>
            <div className="card-price">
              <p>${product?.new_price}</p>
              <p>${product?.old_price}</p>
              <p> {offText}</p>
            </div>
            <div className="description">
              <p style={{color:"#848484",marginTop:'10px',lineHeight:"37px"}}>{product?.description}</p>
            </div>
            {/* <div className="starss">
              <div className="star_div">
                <img src="../images/ProductPage/star.png" alt="" />
                <img src="../images/ProductPage/star.png" alt="" />
                <img src="../images/ProductPage/star.png" alt="" />
                <img src="../images/ProductPage/star.png" alt="" />
                <img src="../images/ProductPage/star.png" alt="" />
              </div>

              <p>5.00 (200 customer review)</p>
            </div> */}

            {inBasket ? (
              <Link to="/cart">
                {" "}
                <button className="singleBtn">Add To Card</button>
              </Link>
            ) : (
              <Link to="/cart">
                {" "}
                <button
                  className="singleBtn"
                  onClick={() => addBasket(product?.id)}
                >
                  {" "}
                  Add to Card{" "}
                </button>
              </Link>
            )}
            {/* <div className="guaranteed">
              <p>
                Guaranteed Safe Checkout <span></span> <MdLock />
              </p>
            </div>
            <div className="bank">
              <img src="../images/ProductPage/Frame 177.png" alt="" />
              <img src="../images/ProductPage/Frame 178.png" alt="" />
              <img src="../images/ProductPage/Frame 181.png" alt="" />
              <img src="../images/ProductPage/Frame 180.png" alt="" />
            </div> */}
            <div className="delivery">
              <img src="../images/ProductPage/carbon_delivery.png" alt="" />
              <div className="delivery-text">
                <p>Free UK Delivery</p>
                <p>
                  Order now and enjoy free delivery on us! Restrictions apply.
                </p>
              </div>
            </div>
            <div className="bloc-tabs">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                What’s Included?
              </button>
              <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                Delivery
              </button>
              <button
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
              >
                Dimensions
              </button>
              <button
                className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(4)}
              >
                Finance
              </button>
            </div>
            <div className="content-tabs">
              <div
                className={
                  toggleState === 1 ? "t-content  active-content" : "t-content"
                }
              >
                <h2>Premium Delivery</h2>

                <p>
                  This bed set includes everything you need to set up a
                  queen-sized bed frame, including a headboard, footboard,
                  rails, and slats to support your mattress. Please note that
                  this product does not include a mattress or any bedding
                  accessories such as sheets or pillows.
                </p>
              </div>

              <div
                className={
                  toggleState === 2 ? "t-content  active-content" : "t-content"
                }
              >
                <h2>Fastest delivery</h2>

                <p>
                  Same-day delivery: Some courier companies and online stores
                  can deliver your order on the same day. This service is
                  usually available in a specific area and is subject to the
                  time of ordering.
                </p>
              </div>

              <div
                className={
                  toggleState === 3 ? "t-content  active-content" : "t-content"
                }
              >
                <h2>Desired measuremen</h2>

                <p>
                  The product is available in every dimension, you can find out
                  by contacting the company.
                </p>
              </div>
              <div
                className={
                  toggleState === 4 ? "t-content  active-content" : "t-content"
                }
              >
                <h2>Working capital finance</h2>

                <p>
                  We understand that purchasing furniture can be a big
                  investment, which is why we offer financing options to make it
                  more affordable. With our financing plans, you can spread out
                  the cost of your purchase over time, making it easier to
                  budget for your new furniture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="section2-sing">
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
              <SwiperSlide> <img src="https://images.unsplash.com/photo-1587401198681-2c762ab72bd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" /></SwiperSlide>
              <SwiperSlide> <img src="https://images.unsplash.com/photo-1609644124044-94dc4301872e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" /></SwiperSlide>
              <SwiperSlide> <img src="https://images.unsplash.com/photo-1606246481699-f16245882373?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=466&q=80" alt="" /></SwiperSlide>
              <SwiperSlide> <img src="https://images.unsplash.com/photo-1487695652027-48e475bfa86f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" /></SwiperSlide>
              <SwiperSlide> <img src="https://images.unsplash.com/photo-1515275844947-c28f9c617443?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" /></SwiperSlide>


            </Swiper>
          </div>
          <div className="section2-details">
            <p className="section2-title">Cast Aluminium Furniture</p>
            <p className="section2-description">
              Meridian furniture are designed and produced with you, the customer, in mind, so we made everything easy: Within 4 weeks from ordering a piece, it will arrive at your home, flat packed. You will find out that assembling the piece is simple, intuitive and fast, with no tools needed. And if you have to move to a new place, a Meridian furniture is easily disassembled and reassembled.
            </p>
          </div>
        </div>
        <div className="ask-qust">


          <div className="accordion-name">
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className="accordion-wrapper">
            <div className="accordion">
              <input type="radio" name="radio-a" id="check1" defaultChecked />
              <label className="accordion-label" htmlFor="check1">
                Can I return my furniture?
              </label>
              <div className="accordion-content">
                <p>
                  In the unlikely event that you wish to return your furniture,
                  Sabai Living offer a 30-day returns policy. However, you will be
                  charged an administrative fee to cover this. Your refund will be
                  processed as soon as the product has been returned to our
                  warehouse and has been thoroughly checked for any damage or
                  quality issues. Sabai Living can only issue refunds for items
                  that are not damaged.
                  <br />
                  <br />
                  What do I do if my item arrives damaged, or if I have received
                  the wrong item? In the unlikely event that you receive a damaged
                  item, please contact us within 24 hours of receiving your order.
                  You can contact us via telephone or email. We will ask you to
                  send photographs and a description of the damage and will then
                  thoroughly investigate. If required, we will repair, replace, or
                  refund your damaged item.
                  <br />
                  <br />
                  If you receive an incorrect item, please report it to us as soon
                  as possible and we will make arrangements for this to be
                  returned and the correct item sent to you.
                </p>
              </div>
            </div>
            <div className="accordion">
              <input type="radio" name="radio-a" id="check2" />
              <label className="accordion-label" htmlFor="check2">
                Can your furniture be left outside?
              </label>
              <div className="accordion-content">
                <p>
                  While aluminum, plastic, concrete and teak materials are ideal
                  for outdoor furniture year-round, materials like iron, steel and
                  wicker can be damaged by wet and cold weather conditions and
                  should not be left outside in the winter.
                </p>
              </div>
            </div>
            <div className="accordion">
              <input type="radio" name="radio-a" id="check3" />
              <label className="accordion-label" htmlFor="check3">
                What does powder coated mean?
              </label>
              <div className="accordion-content">
                <p>
                  Powder coating is a type of coating that is applied as a
                  free-flowing, dry powder. Unlike conventional liquid paint which
                  is delivered via an evaporating solvent, powder coating is
                  typically applied electrostatically and then cured under heat or
                  with ultraviolet light.
                  <br />
                  <br />
                  The powder may be a thermoplastic or a thermoset polymer. It is
                  usually used to create a hard finish that is tougher than
                  conventional paint.{" "}
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="radio" name="radio-a" id="check4" />
              <label className="accordion-label" htmlFor="check4">
                What is thermosetting polymer?
              </label>
              <div className="accordion-content">
                <p>
                  A thermosetting polymer which is also known as a thermoset or
                  thermosetting plastic is a polymer consisting of cross-linked
                  structure or heavily branched molecules.{" "}
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="radio" name="radio-a" id="check5" />
              <label className="accordion-label" htmlFor="check5">
                Are your cushions machine washable?
              </label>
              <div className="accordion-content">
                <p>
                  It all depends on the fabric that your cushions are made of.
                  Some fabrics can be washed in the washing machine. Ask your
                  fabric, furniture store, or furniture manufacturer if your
                  cushions can be washed in the washing machine.
                  <br />
                  <br />
                  The ones that can not be washed will be damaged in the washing
                  machine.
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="radio" name="radio-a" id="check6" />
              <label className="accordion-label" htmlFor="check6">
                Do the products fade in sunlight?
              </label>
              <div className="accordion-content">
                <p>
                  Ultraviolet rays are one of the causes of fading because they
                  can break down chemical bonds and fade the color in an object.
                  Other major contributors to fading include visible light and
                  solar heat. Some objects may be more prone to this bleaching
                  effect, such as dyed textiles and watercolors.{" "}
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="radio" name="radio-a" id="check7" />
              <label className="accordion-label" htmlFor="check7">
                How do I care for my furniture?
              </label>
              <div className="accordion-content">
                <p>
                  4 Easy Care Tips to Keep your Furniture Looking New
                  <br />
                  1.Read the Care Label. <br />
                  If your furniture came with a care label, read it! ... <br />
                  2.Avoid Sun Exposure. Keep your furniture out of the sun,
                  especially directly under windows to avoid fading over time. ...{" "}
                  <br />
                  3.Rotate. ... <br /> 4.Protect Surfaces.
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="radio" name="radio-a" id="check8" />
              <label className="accordion-label" htmlFor="check8">
                Is the furniture ‘flat packed’ or ‘fully assembled’?
              </label>
              <div className="accordion-content">
                <p>
                  There’s a lot of things to consider before purchasing furniture.
                  Color, design, quality, and quantity are on top of the list.
                  However, one point that you should keep in mind is how you want
                  them to be delivered. When it comes to delivery, pre-assembled
                  or flat pack furniture are two terms you should jot down when
                  purchasing furniture for your new place.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sets-title">
          <h1>Shop Our Other Popular Sets</h1>
        </div>
        <div className="sets">
          <Swiper
            slidesPerView={4}
            spaceBetween={50}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 10,
              },

              570: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              800: {
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
            <SwiperSlide> <Link to="/products">
              <div className="set">
                <div className="set-img">
                  <img src="../images/ProductPage/set1.png" alt="" />
                </div>
                <div className="set-details">
                  <p className="set-name">Alma Velvet Armless</p>
                  <p className="set-price">£3,400.00</p>
                  <button>View Set</button>
                </div>
              </div>
            </Link></SwiperSlide>
            <SwiperSlide> <Link to="/products">
              <div className="set">
                <div className="set-img">
                  <img src="../images/ProductPage/set2.png" alt="" />
                </div>
                <div className="set-details">
                  <p className="set-name">Alma Velvet Armless</p>
                  <p className="set-price">£3,400.00</p>
                  <button>View Set</button>
                </div>
              </div>
            </Link></SwiperSlide>
            <SwiperSlide>
              <Link to="/products">
                <div className="set">
                  <div className="set-img">
                    <img src="../images/ProductPage/set3.png" alt="" />
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
                    <img src="../images/ProductPage/set4.png" alt="" />
                  </div>
                  <div className="set-details">
                    <p className="set-name">Alma Velvet Armless</p>
                    <p className="set-price">£3,400.00</p>
                    <button>View Set</button>
                  </div> </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide> <Link to="/products">
              <div className="set">
                <div className="set-img">
                  <img src="../images/ProductPage/set1.png" alt="" />
                </div>
                <div className="set-details">
                  <p className="set-name">Alma Velvet Armless</p>
                  <p className="set-price">£3,400.00</p>
                  <button>View Set</button>
                </div>
              </div>
            </Link></SwiperSlide>
            <SwiperSlide> <Link to="/products">
              <div className="set">
                <div className="set-img">
                  <img src="../images/ProductPage/set2.png" alt="" />
                </div>
                <div className="set-details">
                  <p className="set-name">Alma Velvet Armless</p>
                  <p className="set-price">£3,400.00</p>
                  <button>View Set</button>
                </div>
              </div>
            </Link></SwiperSlide>
            <SwiperSlide>
              <Link to="/products">
                <div className="set">
                  <div className="set-img">
                    <img src="../images/ProductPage/set3.png" alt="" />
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
                    <img src="../images/ProductPage/set4.png" alt="" />
                  </div>
                  <div className="set-details">
                    <p className="set-name">Alma Velvet Armless</p>
                    <p className="set-price">£3,400.00</p>
                    <button>View Set</button>
                  </div> </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>


        {/* <Review /> */}
      </div>
    </>
  );
}
const t = (a) => a;
export default connect(t)(ProductPage);
