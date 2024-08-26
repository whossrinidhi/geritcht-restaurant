import React from "react";
import { images, data } from "../../constants";
import "./Laurels.css";
import { SubHeading } from "../../components";
const AwardCard = ({ award: { imgUrl, title, subtitle }, key }) => (
  <div className="app__laurels_awards-cards">
    <img src={imgUrl} alt="award" />
    <div className="app__laurels_awards-cards_title">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      <p className="p__opensans" style={{ color: "var(--color-grey)" }}>
        {subtitle}
      </p>
    </div>
  </div>
);

const Laurels = () => (
  <div
    className="app__laurels app__wrapper app__bg flex__center section__padding"
    id="awards"
  >
    <div className="app__wrapper_info">
      <SubHeading title="Awards & Recognition" />
      <p className="headtext__cormorant">Our Laurels</p>
      <div className="app__laurels_awards">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
