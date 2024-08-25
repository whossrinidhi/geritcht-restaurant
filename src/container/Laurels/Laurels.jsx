import React from "react";
import { images } from "../../constants";
import "./Laurels.css";
import { SubHeading } from "../../components";
const Laurels = () => (
  <div
    className="app__laurels app__wrapper app__bg flex__center section__padding"
    id="awards"
  >
    <div className="app__wrapper_info">
      <SubHeading title="Awards & Recognition" />
      <p className="headtext__cormorant">Our Laurels</p>
    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
