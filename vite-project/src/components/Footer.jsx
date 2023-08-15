import React from 'react'
import {FaFacebookF } from "react-icons/fa";
import {BsInstagram } from "react-icons/bs";

const tel='tel.svg'
const telPath=`/static/${tel}`

const m='m.svg'
const mPath=`/static/${m}`

const tel2='tel2.svg'
const tel2Path=`/static/${tel2}`

const mail='m.svg'
const mailPath=`/static/${mail}`

const arrow='arrow.svg'
const arrowPath=`/static/${arrow}`

const visa='visa.png'
const visaPath=`/static/${visa}`

const visa2='visa2.png'
const visa2Path=`/static/${visa2}`

const visa3='visa3.png'
const visa3Path=`/static/${visa3}`

const visa4='visa4.png'
const visa4Path=`/static/${visa4}`



function Footer() {
  return (
   <>
       <footer>

<div className="foter-background">
  <div className="container">

    <div className="back">
      <div className="back-text">
        <h1>How Can We Help You?</h1>
        <p>We pride ourselves on superior customer service. Speak to a member of our sales team to help with your order. </p>
        <h5>Get In Touch support@Meridian.com </h5>
      </div>
      <div className="back-tel">
        <button> <img src={telPath} alt="" /> 01789 339533</button>
        <h5>8am to 6pm, 7 days a week</h5>
      </div>
    </div>
  </div>
</div>
<div className="footer">
  <div className="container">
    <div className="foter-m">
      <img src={mPath} alt="" />
    </div>
    <div className="footer-text">
      <div className="footer-col-1">
        <h3>
          Head Office
        </h3>
        <p>32 Plum St, Trenton, NJ 08638, United States</p>
        <div className="footer-contact">
          <p><img src={tel2Path} alt="tel" /> 01789 730695</p>
          <p><img src={mailPath} alt="tel" />support@Meridian.com</p>
        </div>



      </div>
      <div className="footer-col-2">
        <div className="footer-coll">
          <h3>
            Product
          </h3>
          <ul>
            <li><a href="#">New Arrival</a></li>
            <li><a href="#">Living Room</a></li>
            <li><a href="#"> Kitchen & Dining Room</a></li>
            <li>
              <a href="#">Bed Room</a>
            </li>
            <li><a href="#">Accent</a></li>
            <li><a href="#">Occasional Table</a></li>
            <li><a href="#">Office/Home Office</a></li>
            <li><a href="#">Outdoor Furniture</a></li>
          </ul>
        </div>
        <div className="footer-coll">
          <h3>
            Help
          </h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

      </div>
      <div className="footer-col-3">
        <h3>Join Meridian for Exclusive Offers</h3>
        <div className="footer-mail">
          <input type="email"  placeholder='Email adress' />
          <button><img src={arrowPath} alt="arrow" /></button>
        </div>
        <p>Our newsletter is packed full of style ideas, new products and exclusive disounts. We are GDPR compliant, your information is secure with us.</p>
      </div>
    </div>
    <div className="terms">
      <ul>
        <li>
          <a href="#">Terms & Conditions</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Shipping Policy</a>
        </li>
      </ul>
      <ul>
        <li>
        <FaFacebookF/>
        </li>
       <li>
       <BsInstagram/>
       </li>
    

      </ul>
    </div>
    <div className="footer-cart-img">
      <img src={visaPath} alt="" />
      <img src={visa2Path} alt="" />
      <img src={visa3Path} alt="" />
      <img src={visa4Path} alt="" />

    </div>

  </div>

</div>

</footer>
   </>
  )
}

export default Footer