import React from "react";
import { images } from "../../constants";
import "./Chef.css";
import { SubHeading } from "../../components";
const Chef = () => (
  <div className="app__chef app__bg app__wrapper section__padding">
    <div className="app__wrapper_img">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <p className="headtext__cormorant">What We Believe In</p>
      <div className="app__wrapper_info-quote">
        <img src={images.quote} alt="quote" />
        <p className="p__opensans sub_info">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia ad
          consequatur dolores pariatur corrupti itaque iste iusto, nobis
          doloribus, rem quia quos perferendis! Nobis non alias, enim excepturi
          omnis est!
        </p>
      </div>
      <div className="app__chef_info">
        <p className="chef_name">Kevin Luo</p>
        <p className="p__opensans chef_designation">Chef & Founder</p>
      </div>
      <img className="chef_sign" src={images.sign} alt="sign" />
    </div>
  </div>
);

export default Chef;
