import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <div className="app__menuItem ">
    <div className="app__menuItem-head">
      <div className="app__menuItem-head_title">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
      </div>
      <div className="app__menuItem-head_title-dash" />
      <div className="app__menuItem-head_price">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {price}
        </p>
      </div>
    </div>
    <div className="app__menuItem-tail">
      <div className="app__menuItem-tail_tags">
        <p className="p__opensans" style={{ color: "#AAA" }}>
          {tags}
        </p>
      </div>
    </div>
  </div>
);

export default MenuItem;
