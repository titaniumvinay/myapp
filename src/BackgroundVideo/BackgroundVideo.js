import React from 'react';
import './BackgroundVideo.scss';
import BackgroundVideo from '../video/BackgroundVideo.mp4'; // Adjust the path if necessary

const BackgroundVideoComponent = () => {
  return (
    <div className="background-video-container">
      <video className="background-video" autoPlay loop muted>
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        {/* Overlay content */}
        
      </div>
    </div>
  );
};

export default BackgroundVideoComponent;
