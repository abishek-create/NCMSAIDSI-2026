import React, { useState, useEffect } from 'react';

export default function Countdown() {
  const targetDate = new Date('2026-04-08T09:00:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        // If the date is in the past, keep at 0 or show active
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds }
  ];

  return (
    <div 
      id="conference-countdown"
      className="bg-[#800055] py-14 px-4 text-white text-center flex flex-col justify-center items-center shadow-lg select-none"
    >
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 md:gap-16 max-w-4xl">
        {timeBlocks.map((block, idx) => (
          <React.Fragment key={block.label}>
            <div className="flex flex-col items-center">
              <span className="text-4xl sm:text-6xl md:text-7xl font-sans font-bold tracking-tight block drop-shadow-sm min-w-[70px] sm:min-w-[100px] text-center">
                {String(block.value).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-display font-medium tracking-widest text-pink-200 mt-2 block">
                {block.label}
              </span>
            </div>
            {idx < timeBlocks.length - 1 && (
              <span className="text-3xl sm:text-5xl md:text-6xl font-light text-pink-300/60 self-start mt-1 sm:mt-2 hidden sm:inline select-none">
                :
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
