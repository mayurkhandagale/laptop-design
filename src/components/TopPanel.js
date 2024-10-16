import React from 'react';
import hp_Logo from "../assets/hp_Logo.png";
import webcam from "../assets/webcam.png";
import Screens from './Screens';

const TopPanel = () => {
  return (
    <div className="top flex relative justify-center items-center basis-1/2 bg-black rounded-lg border-2 border-gray-300 shadow-inner">
      <Screens />
      <figure className="absolute sm:w-6 xs:w-4 bottom-0">
        <img src={hp_Logo} alt="hp_logo" />
      </figure>
      <figure className="absolute bg-white rounded-full sm:w-6 xs:w-4 top-0">
        <img src={webcam} alt="webcam" />
      </figure>
    </div>
  );
}

export default TopPanel;