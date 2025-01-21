'use client';

import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState(0); // Current time in seconds
  const [isRunning, setIsRunning] = useState(false); // Timer running status

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (timer) {
      clearInterval(timer);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRunning]);

  // Format the time as minutes:seconds
  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className='mx-auto flex max-w-md items-center justify-between rounded-lg bg-gray-100 p-1 shadow-md'>
      {/* Timer and button section/CSS */}
      <div className='flex items-center space-x-4'>
        <span className='text-xl font-bold text-blue-600'>
          {formatTime(seconds)}
        </span>
        <button
          onClick={() => setIsRunning((prev) => !prev)}
          className={`rounded-md px-4 py-2 font-semibold text-white transition ${
            isRunning
              ? 'bg-red-500 hover:bg-red-600'
              : 'bg-green-500 hover:bg-green-600'
          }`}
        >
          {isRunning ? 'Stop' : 'Start'}
        </button>
      </div>
    </div>
  );
};

export default Timer;
