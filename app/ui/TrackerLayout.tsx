'use client';
import React, { useEffect, useState } from 'react';
import TrackerCard from './TrackerCard';
import Timer from './timer';
import FinishAndCancel from './FinishAndCancel';
import { SubmitData, Workout, Workout_history } from '../lib/definitions';

function TrackerLayout({
  workout,
  exerciseNames,
  user_id,
}: {
  workout: Workout;
  exerciseNames: string[];
  user_id: number;
}) {
  const [exerciseList, setExerciseListAction] = useState<SubmitData[]>(
    [] as SubmitData[]
  );
  const [submitData, setSubmitData] = useState<Workout_history>({
    user_id: user_id,
    workout_id: workout.workout_id,
    date: new Date(),
    duration: 0,
    exercise_list: [],
  });
  const [counter, setCounterAction] = useState(0);

  const [time, setTimeAction] = useState(0);
  const [isRunning, setIsRunningAction] = useState(true);

  const workoutLength = workout.exercise_ids.length;

  useEffect(() => {
    setSubmitData((prev: Workout_history) => {
      const copy = structuredClone(prev);
      copy.exercise_list = exerciseList;
      copy.duration = time;
      return copy;
    });
  }, [exerciseList, time]);

  console.log(submitData);

  return (
    <div>
      <div className='mx-1 mt-2 flex max-w-[100%] items-center justify-between rounded-[5px] bg-fitViolet p-2'>
        <h1 className='text-2xl font-bold text-white'>
          {workout.workout_name} workout
        </h1>
        <div className='text-xl font-bold text-white'>
          <Timer
            setTimeAction={setTimeAction}
            isRunning={isRunning}
            setIsRunningAction={setIsRunningAction}
          />
        </div>
      </div>
      {exerciseNames.map((exerciseName) => (
        <ul key={exerciseName} className='flex items-center justify-center p-1'>
          <TrackerCard
            exerciseName={exerciseName}
            setExerciseListAction={setExerciseListAction}
            setCounterAction={setCounterAction}
          />
        </ul>
      ))}
      <FinishAndCancel
        submitData={submitData}
        counter={counter}
        workoutLength={workoutLength}
        isRunning={isRunning}
      />
    </div>
  );
}

export default TrackerLayout;
