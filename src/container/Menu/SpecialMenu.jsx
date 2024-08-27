import React from "react";
import { SubHeading, MenuItem } from "../../components";
import "./SpecialMenu.css";
import { images, data } from "../../constants";
const SpecialMenu = () => (
  <div className="app__specialMenu section__padding app__bg ">
    <div className="app__specialMenu-title flex__center" id="menu">
      <SubHeading title="Menu That Fits Your Palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    <div className="app__specialMenu-content app__wrapper">
      <div className="app__specialMenu-content">
        <p className="app__specialMenu-content_title">Wine & Beer</p>
        <div className="app__specialMenu-content_listItems">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={images.menu} alt="cocktail glass" />
      </div>
      <div className="app__specialMenu-content">
        <p className="app__specialMenu-content_title">Cocktails</p>
        <div className="app__specialMenu-content_listItems">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
