import React from "react";
import { images } from "../../constants";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { SubHeading } from "../../components";
import { useRef } from "react";
import "./Gallery.css";
const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];
const Gallery = () => {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery app__wrapper app__bg section__padding">
      <div className="app__gallery_title">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "var(--color-grey)" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button className="custom__button" style={{ marginTop: "2rem" }}>
          View More
        </button>
      </div>
      <div className="app__gallery-photos">
        <div className="app__gallery-photos_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div
              className="app__gallery-photos_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery" />
              <BsInstagram className="gallery_image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-photos_arrow">
          <BsArrowLeftShort
            className="app__gallery-photos_arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="app__gallery-photos_arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};
export default Gallery;
