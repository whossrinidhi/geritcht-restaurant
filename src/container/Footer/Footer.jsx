import React from "react";
import "./Footer.css";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { Newsletter } from "../../components";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer app__bg app__wrapper section__padding">
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="p__cormorant">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230 </p>
        <p className="p__opensans">+1 212-555-1230 </p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="logo" />
        <p className="p__opensans">
          "The best way to find yourself is to lose yourself in the service of
          others.”
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_logo-social">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_working">
        <h1 className="p__cormorant">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am -12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00am -11:00 pm </p>
      </div>
    </div>
    <div className="app__footer_copyright">
      <p className="p__opensans">2021 Gerícht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
