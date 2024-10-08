import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__wrapper app__bg section__padding flex__center"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="spoon" />
        <p className="p__opensans">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, atque
          fugit ut exercitationem omnis similique doloribus eos delectus.
          Quaerat deserunt magni inventore quidem aliquam officia obcaecati
          voluptatem amet commodi fugit!
        </p>
        <button className="custom__button">Know More</button>
      </div>
      <div className="app__aboutus-content_knife flex__centre">
        <img src={images.knife} alt="knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img className="" src={images.spoon} alt="spoon" />
        <p className="p__opensans">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, atque
          fugit ut exercitationem omnis similique doloribus eos delectus.
          Quaerat deserunt magni inventore quidem aliquam officia obcaecati
          voluptatem amet commodi fugit!
        </p>
        <button className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
