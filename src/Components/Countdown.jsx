import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 10); // Target is 10 days from now

    const now = new Date();
    const difference = targetDate - now; // Time difference in milliseconds

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0 };
    }

    // Calculate days, hours, and minutes left
    const days = Math.floor(difference / (1000 * 60 * 60 * 24)); // Days
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Hours
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)); // Minutes

    return { days, hours, minutes };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft()); // Update the countdown every second
    }, 1000); // 1000 ms = 1 second

    return () => clearInterval(timer); // Clear the interval when the component unmounts
  }, []);

  return (
    <div className="flex space-x-6 justify-center items-center text-white bg-primaryPurple p-4 rounded-lg">
      <div className="text-center">
        <h2 className="text-3xl font-bold">{timeLeft.days}</h2>
        <p>Days</p>
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-bold">{timeLeft.hours}</h2>
        <p>Hours</p>
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-bold">{timeLeft.minutes}</h2>
        <p>Minutes</p>
      </div>
    </div>
  );
};

export default Countdown;
