import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 42,
    seconds: 8
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer);
          return prev;
        }
        
        let h = prev.hours;
        let m = prev.minutes;
        let s = prev.seconds - 1;

        if (s < 0) {
          s = 59;
          m -= 1;
        }
        if (m < 0) {
          m = 59;
          h -= 1;
        }

        return { hours: h, minutes: m, seconds: s };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => num.toString().padStart(2, '0');

  return (
    <div className="d-none d-lg-flex align-items-center gap-2 text-white ms-auto pe-2">
      <span className="fw-bold" style={{ fontSize: '14px' }}>Starts in</span>
      <div className="d-flex align-items-center fw-bold text-dark" style={{ fontSize: '15px' }}>
        <span className="bg-white rounded px-1">{formatNumber(timeLeft.hours)}</span>
        <span className="text-white mx-1">:</span>
        <span className="bg-white rounded px-1">{formatNumber(timeLeft.minutes)}</span>
        <span className="text-white mx-1">:</span>
        <span className="bg-white rounded px-1">{formatNumber(timeLeft.seconds)}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
