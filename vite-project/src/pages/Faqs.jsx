import { useState,useEffect } from "react";
import "./Faqs.css";
import ScrollToTop from "react-scroll-to-top";
const suall = "sual3.png"
const sual=`/static/${suall}`
function Faqs() {
  useEffect(() => {
    document.title = 'FAQ ';
  }, []);
  return (
    <>
      <div className="faq-header">
        <div className="container">
          <div className="faq-con-hed">
          <div className="faq-hedar-text">
            <h1 data-text="Do You Have Questions?">  Do You Have Questions?</h1>
        
        </div>
        <div className="faq-headar-img">
          <img src={sual} alt="" />
        </div>
          </div>
       
        </div>
       
      </div>
      <ScrollToTop smooth top="20" width="20" height="20" color="#fff"/>

      <div className="container">
        <div className="faq-title">
          <h1>Frequently Asked Questions</h1>
        </div>
        <div id="faq">
          <ul>
            <li>
              <input type="checkbox" defaultChecked />
              <i></i>
              <h2>How long does it take for my products to be made and delivered?</h2>
              <p>
              Production and delivery time varies depending on the item(s) ordered, your customisation options and your location. We always aim to deliver within 4 weeks from the date of your order. 
              </p>
            </li>
            <li>
              <input type="checkbox" defaultChecked />
              <i></i>
              <h2>How much is shipping?</h2>
              <p>
              Shipping prices inside EU countries are included in all FIT products. For shipping outside the EU, please contact us at hello@meridian-furniture.com
              </p>
            </li>
            <li>
              <input type="checkbox" defaultChecked />
              <i></i>
              <h2>How can I track my order?</h2>
              <p>
              To track your order, you will receive an email with our delivery service tracking details of your order.
              </p>
            </li>
            <li>
              <input type="checkbox" defaultChecked />
              <i></i>
              <h2>Does someone need to be home to accept delivery?</h2>
              <p>
              Yes. It is necessary for someone to be available to accept delivery as we use a secure courier who requires a signature as proof of receipt. 
<br />
Furthermore, our carriers provide a door-to-door service, which does not include carrying the items inside, carrying items up stairs, placement, or removal of packaging. If your order includes larger items or you are not comfortable carrying your items, we suggest having an additional person to assist with the placement of your items inside.
              </p>
            </li>
            <li>
              <input type="checkbox" defaultChecked />
              <i></i>
              <h2>My items haven’t arrived yet. What can I do?</h2>
              <p>
              Please allow up to 4 weeks from the day you received the order confirmation. For any additional concern, please do not hesitate to email us at hello@meridian-furniture.com


              </p>
            </li>
            <li>
              <input type="checkbox" defaultChecked />
              <i></i>
              <h2>Can I Install/upload anything I want on there?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                non potenti imperdiet porttitor. Nunc eget ornare elementum
                risus eu in. Varius id senectus id viverra sollicitudin lacus
                ante nullam egestas.{" "}
              </p>
            </li>
            <li>
              <input type="checkbox" defaultChecked />
              <i></i>
              <h2>How will I know how my order is progressing?</h2>
              <p>
              Once your payment is received, your purchase is sent directly to the workshop. So that you can monitor the progress of your purchase you will receive three emails regarding the status of your order. You will be alerted by email at the following stages;
<br />
Once your payment has been accepted
<br />
Once your order is dispatched from our manufacturer into your chosen address
<br />
Once your order has been delivered
              </p>
            </li>
            <li>
              <input type="checkbox" defaultChecked />
              <i></i>
              <h2>What happens if I don’t like the product once it arrives?</h2>
              <p>
              We’re confident you will like your product But just in case, we have a Return for Any Reason policy. If you are unhappy, simply contact us to arrange for your return.
              </p>
            </li>
            <li>
              <input type="checkbox" defaultChecked />
              <i></i>
              <h2>What do I do if I have a problem with a MERIDIAN product?</h2>
              <p>
              We will help you with any queries after your purchase. Contact us at hello@meridian-furniture.com if you require any assistance with your product after purchase.
              </p>
            </li>
            <li>
              <input type="checkbox" defaultChecked />
              <i></i>
              <h2>I have purchased from you before. How can I match materials and finish from this earlier purchase with my next?</h2>
              <p>
              All purchase information would have been outlined in the receipt that was sent to you from hello@MERIDIAN-furniture.com. Please email hello@fit-furniture.com, state the email address that was used to make your purchase and we will supply your previous order information.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Faqs;
