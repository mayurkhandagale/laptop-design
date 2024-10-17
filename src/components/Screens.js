import React, { useEffect, useState } from 'react';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import ShutDown from './ShutDown';


const Screens = ({
  power,
  fingerScan,
  celebrate,
  handleCelebrate,
  handleShutDown,
  handleRestart,
  shuttingDown,
}) => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [shutDown, setShutDown] = useState(true);

  useEffect(() => {
    if (power) {
      setFirst(true);
      setTimeout(() => {
        setSecond(true);
      }, 2000);
    } else {
      setFirst(false);
      setSecond(false);
      setThird(false);
      setFourth(false);
      setShutDown(false);
    }
  }, [power]);

  useEffect(() => {
    if (shuttingDown) {
      setShutDown(true);
      setFirst(false);
      setSecond(false);
      setThird(false);
      setFourth(false);
    }
  }, [shuttingDown]);

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

  const handleClick = () => {
    setThird(true);
  };
  const handleFourth = () => {
    setFourth(true);
  };
  const handleSleep = () => {
    setFourth(false);
    setThird(false);
    setSecond(true);
    setFirst(false);
  };
  useEffect(() => {
    if (third && fingerScan) {
      setTimeout(() => {
        setFourth(true);
      }, 2000);
    }
  }, [third, fingerScan]);

  return (
    <div className='screen bg-slate-800 w-[95%] h-5/6'>
      <ScreenSequence />
    </div>
  );
}

export default Screens;