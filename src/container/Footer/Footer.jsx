import React from "react";
import "./Footer.css";
import { FooterOverlay, Newsletter } from "../../components";
const Footer = () => (
  <div className="app__footer app__bg app__wrapper section__padding">
    <FooterOverlay />
    <Newsletter />
  </div>
);

export default Footer;
