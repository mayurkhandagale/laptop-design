import { useState } from "react";
import BasePanel from "./BasePanel";
import TopPanel from "./TopPanel";

const Laptop = () => {
  const [power, setPower] = useState(false);
  const [show, setShow] = useState(false);
  const [fingerScan, setFingerScan] = useState(false);
  const [celebrate, setcelebrate] = useState(false);
  const [shuttingDown, setShuttingDown] = useState(false);

  const keyboardToggle = () => {
    const keyboard = document.querySelector('.base');
    keyboard.classList.toggle('show-keyboard');
    if (keyboard.classList.contains('show-keyboard')) {
      setShow(true);
    } else {
      setShow(false);
    }
  };


  return (
    <div className="full-screen flex sm:flex-row xs:flex-col xs:gap-12 md:gap-24 lg:gap-40 items-center justify-center hover:cursor-pointer w-screen h-screen">
      <div className="laptop-wrapper flex flex-col  xs:w-4/5 xs:h-3/4 sm:w-1/2 sm:h-[65%] md:h-3/4 lg:h-4/5 xl:h-[95vh] xl:w-[42%]">
        <TopPanel />
        <BasePanel />
      </div>
      <button
        onClick={keyboardToggle}
        className="text-white bg-gradient-to-br from-purple-700 to-blue-600 active:scale-110 transition ease-in duration-900 sm:w-40 hover:bg-gradient-to-bl  hover:scale-105 font-semibold rounded-lg text-xl p-2 shadow-lg text-center"
      >
        {show ? "Hide" : "Show"} Keyboard
      </button>
    </div>
  );
}

export default Laptop;

