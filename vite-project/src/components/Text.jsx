import React from "react";
import { FaFacebookF, FaTwitter,FaLinkedinIn, FaInstagram, FaPinterest} from "react-icons/fa";
import { BsTelephoneFill} from "react-icons/bs";
import {FiMail} from "react-icons/fi";
import {MdOutlineLocationOn} from "react-icons/md";

import { Typewriter } from 'react-simple-typewriter'
import {Link} from "react-router-dom"

const mail = "email-icon.png"
const mailPath=`/static/${mail}`

const arxasi = "arxas.png"
const arxa=`/static/${arxasi}`


function Text() {
  return (
    <>
      <div className="contact-img">
        <div className="contact-anime-text">
         <h1>Follow Us on Social Media <span className="media-text" style={{ fontWeight: 'bold' }}> <Typewriter  words={['Instagram', 'Facebook', 'Twitter', 'Pinterest', 'Linkedin']}  loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            /></span> </h1> 
         <p>Visit my offical media outlets to learn more about my work in congress</p>
        </div>
        <div className="contact-anime-img">
          <div className="anime-icons">
           <span > <FaFacebookF/> </span> 
          <span> <FaInstagram/> </span> 
          <span> <FaLinkedinIn/> </span> 
          <span> <FaTwitter/> </span> 
          <span> <FaPinterest/></span> 
          </div>
          <img className="emil-ico" src={mailPath} alt="" />
        </div>
        <img className="wave" src={arxa} alt="" />
        

      </div>
      <div className="section-form">


        <div className="container">
          <div className="center-text">
            <h1>We Ready To Help</h1>
            <p>
              Please submit your inquiry using the form below. Be sure to provide
              as much information as possible so we can assist you quickly.{" "}
            </p>
          </div>
          <div className="contactt">
            <div className="contact-col">
              <span>
            
              </span>
              <div className="contact-about">
                <h3>Phone Number</h3>
                <p>(62) 1829017</p>
              </div>
            </div>
            <div className="contact-col">
              <span>
              <FiMail/>
              </span>
              <div className="contact-about" >
                <h3>Email</h3>
                <p>Hello@Meridian.com</p>
              </div>
            </div>
            <div className="contact-col">
              <span>
              <MdOutlineLocationOn/>
              </span>
              <div className="contact-about">
                <h3>Map Street</h3>
                <p>John Bucarest St. 199</p>
              </div>
            </div>
          </div>
            </div>
   
            <div className="container">
          <div className="center-text">
            <h1>Let’s Talk With Us</h1>
            <p>
              Our trained staff will normally respond to your request within 1
              business day.
            </p>
          </div>
      </div>
       
      </div>
      
    </>
  );
}

export default Text;
