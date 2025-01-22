'use client';

import React, { useState, useEffect } from 'react';
import { formatTime } from '@/lib/utils';

const Timer = ({
  setTimeAction,
  isRunning,
  setIsRunningAction,
}: {
  setTimeAction: React.Dispatch<React.SetStateAction<number>>;
  isRunning: boolean;
  setIsRunningAction: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [seconds, setSeconds] = useState(0);
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


  const handleClick = (seconds: number) => {
    setIsRunningAction((prev) => !prev);
    setTimeAction(seconds);
  };

  return (
    <div className='mx-auto flex max-w-md items-center justify-between p-1 '>
      <div className='flex items-center space-x-4'>
        <span className='text-xl flex gap-2 font-bold text-gray-50'>
          <p>Timer:</p>
          {formatTime(seconds)}
        </span>
        <button
          onClick={() => handleClick(seconds)}
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
