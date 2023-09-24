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
      <div className="flex flex-col items-center">
        <p className="">{timeRemaining.days}</p>
        <span className="">days</span>

      </div>
      <p>{timeRemaining.hours} hours</p>
      <p>{timeRemaining.minutes} minutes</p>
      <p>{timeRemaining.seconds} seconds</p>
    </div>
  );
};

export default Countdown;
