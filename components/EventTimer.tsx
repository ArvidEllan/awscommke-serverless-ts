import React, { useState, useEffect } from 'react';

const EventTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const targetDate = new Date('2024-08-01T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      setTimeLeft(difference);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div>
      <h2>Next Event In:</h2>
      <p>{days}d {hours}h {minutes}m {seconds}s</p>
    </div>
  );
};

export default EventTimer;