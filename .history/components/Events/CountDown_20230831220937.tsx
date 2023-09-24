/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useEffect, useState } from 'react';

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeRemaining = () => {
    const currentTime = new Date().getTime();
    const difference = targetDate?.getTime() - currentTime;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const currentTime = new Date().getTime();
      const difference = targetDate?.getTime() - currentTime;
  
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
      return {
        days,
        hours,
        minutes,
        seconds,
      };
    };
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate, calculateTimeRemaining]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-center text-white px-[30px] ">
        <p className="text-[2.154rem] leading-[2.154rem] font-light mb-1">{timeRemaining.days}</p>
        <span className="font-semibold uppercase">days</span>
      </div>
      <div className="flex flex-col items-center text-white px-[30px] ">
        <p className="text-[2.154rem] leading-[2.154rem] font-light mb-1">{timeRemaining.hours}</p>
        <span className="font-semibold uppercase">hours</span>
      </div>
      <div className="flex flex-col items-center text-white px-[30px] ">
        <p className="text-[2.154rem] leading-[2.154rem] font-light mb-1">{timeRemaining.minutes}</p>
        <span className="font-semibold uppercase">min</span>
      </div>
      <div className="flex flex-col items-center text-white px-[30px] ">
        <p className="text-[2.154rem] leading-[2.154rem] font-light mb-1">{timeRemaining.seconds}</p>
        <span className="font-semibold uppercase">sec</span>
      </div>
    </div>
  );
};

export default Countdown;
