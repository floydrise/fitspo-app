'use client'
import React, { useState } from 'react';
import TrackerCard from './TrackerCard';
import Timer from './timer';
import FinishAndCancel from './FinishAndCancel';
import { Workout } from '../lib/definitions';

function TrackerLayout({
  workout,
  exerciseNames,
  user_id,
}: {
  workout: Workout;
  exerciseNames: string[];
  user_id: number;
}) {
    const [seconds, setSeconds] = useState(0);


  return (
    <div>
      <div className='mx-1 mt-2 flex max-w-[100%] items-center justify-between rounded-[5px] bg-fitViolet p-2'>
        <h1 className='text-2xl font-bold text-white'>
          {workout.workout_name} workout
        </h1>
        <Timer seconds={seconds} setSeconds={setSeconds}/>
        <div className='text-xl font-bold text-white'></div>
      </div>
      {exerciseNames.map((exerciseName) => (
        <ul key={exerciseName} className='flex items-center justify-center p-1'>
          <TrackerCard
            exerciseName={exerciseName}
            user_id={user_id}
            workout_id={workout.workout_id}
          />
        </ul>
      ))}
      <FinishAndCancel />
    </div>
  );
}

export default TrackerLayout;
