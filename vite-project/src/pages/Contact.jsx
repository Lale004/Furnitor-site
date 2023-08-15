
import Text from '../components/Text'

import ContactSection from '../components/ContactSection'
import './Contact.css'
import { useEffect } from 'react'
import ScrollToTop from "react-scroll-to-top";
function Contact() {
  useEffect(() => {
    document.title = 'Contact';
  }, []);
  useEffect(() => {
   
  
  }, [])
  
  return(
    <div className="app">
      <ScrollToTop smooth top="20" width="20" height="20" color="#fff"/>

      <Text />
  
      <ContactSection />
      <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3045.683754787635!2d-74.74066912426576!3d40.238333171468824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c244f8a5638bd5%3A0xe36d397cc1f35e97!2sMeridian%20Furniture%20Warehouse!5e0!3m2!1sru!2saz!4v1681485194912!5m2!1sru!2saz" 

      height="500"
       allowfullscreen=""
        loading="lazy"
         referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
     
    </div>

  )
}

export default Contact
