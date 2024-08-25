import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
const FindUs = () => (
  <div
    className="app__findUs app__wrapper section__padding app__bg"
    id="contact"
  >
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <p className="headtext__cormorant">Find Us</p>
      <p className="p__opensans" style={{ margin: "1rem 0", color: "#AAA" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>

      <p
        className="p__cormorant"
        style={{ margin: "1rem 0", color: "#DCCA87" }}
      >
        Opening Hours
      </p>
      <p
        className="p__opensans"
        style={{ marginBottom: "1rem", color: "white" }}
      >
        Mon - Fri: 10:00 am - 02:00 am
      </p>
      <p
        className="p__opensans"
        style={{ marginBottom: "1rem", color: "white" }}
      >
        Sat - Sun: 10:00 am - 03:00 am{" "}
      </p>
      <button className="custom__button">Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="welcome" />
    </div>
  </div>
);

export default FindUs;
