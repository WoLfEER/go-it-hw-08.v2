import React from 'react';
import videoBg from '../..//image/Pexels Videos 1795797.mp4';

export const Video = () => {
  return (
    <div>
      <video src={videoBg} autoPlay loop muted></video>
    </div>
  );
};
