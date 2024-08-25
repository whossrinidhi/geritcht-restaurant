import React from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import "./Intro.css";
import { meal } from "../../constants";
import { useRef, useState } from "react";
const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef();
  const handleVideo = () => {
    setPlayVideo((prev) => !prev);
    if (playVideo) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };
  return (
    <div className="app__video">
      <video
        src={meal}
        type="video/mp4"
        ref={videoRef}
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
