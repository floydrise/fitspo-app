'use client';
import Link from 'next/link';
import React from 'react';
import { Workout_history } from '../lib/definitions';
import { postWorkoutHistory } from '../lib/endpoints';
import { redirect } from 'next/navigation';

function FinishAndCancel({
  counter,
  workoutLength,
  submitData,
  isRunning,
}: {
  counter: number;
  workoutLength: number;
  submitData: Workout_history;
  isRunning: boolean;
}) {
  const submit = async (data: Workout_history) => {
    await postWorkoutHistory(data);
    redirect('/dashboard');
  };
  return (
    <div className='flex items-center justify-center gap-20'>
      <div className={counter >= workoutLength && !isRunning ? "" : "tooltip"} data-tip={"Mark exercises as 'Done' and 'Stop' the timer"}>
      <button
        onClick={async () => {
          submit(submitData);
        }}
        disabled={!(counter >= workoutLength && !isRunning)}
        className={`rounded-[15px] px-[33px] py-[10px] text-[18px] font-bold ${counter >= workoutLength && !isRunning ? 'bg-fitGreen transition ease-in-out hover:bg-fitBlue hover:text-fitGreen' : 'cursor-not-allowed bg-gray-300'}`}
      >
        Finish
      </button>
      </div>
      <Link href='/workouts'>
        <button className='rounded-[15px] bg-fitBlue px-[33px] py-[10px] text-[18px] font-bold text-fitGreen transition ease-in-out hover:bg-fitRed hover:text-fitBlue'>
          Cancel
        </button>
      </Link>
    </div>
  );
}

export default FinishAndCancel;
