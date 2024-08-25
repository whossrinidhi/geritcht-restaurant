import React from "react";

import "./Header.css";
import { SubHeading } from "../../components";
import { images } from "../../constants";
const Header = () => (
  <div className="app__header app__wrapper section__padding app__bg" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the New Flavour" />
      <p className="headtext__cormorant">The Key To Fine Dining</p>
      <p className="p__opensans" style={{ margin: "1rem 0", color: "#AAA" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
        cupiditate quis adipisci, vel voluptatem eum numquam exercitationem
        magni tempora iste doloremque quod, enim consequatur, eligendi neque
        inventore voluptatibus? Quasi, ex?
      </p>
      <button className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;
