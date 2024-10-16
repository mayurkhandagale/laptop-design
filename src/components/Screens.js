import React, { useState } from 'react';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import ShutDown from './ShutDown';


const Screens = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [shutDown, setShutDown] = useState(true);

  const ScreenSequence = () => {
    if (fourth) {
      return (
        <div>Fourth Screen</div>
      )
    } else if (third) {
      return <Screen3 />
    } else if (second) {
      return <Screen2 />
    } else if (first) {
      return <Screen1 />
    } else if (shutDown) {
      return <ShutDown />
    } else return null;
  };

  return (
    <div className='screen bg-slate-800 w-[95%] h-5/6'>
      <ScreenSequence />
    </div>
  );
}

export default Screens;