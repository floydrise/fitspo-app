'use client';
import React, { useState } from 'react';
import { Workout_history } from '../lib/definitions';

export function WorkoutCard({ workout }: { workout: Workout_history }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const date: string = workout.date.toDateString();
  const duration: number = Math.round(workout.duration / 60);
  const workoutName: { [key: number]: string } = {
    1: 'Upper Body',
    2: 'Lower Body',
    3: 'Core',
    4: 'Chest',
    5: 'Back',
    6: 'Biceps',
    7: 'Triceps',
    8: 'Shoulders',
  };
  return (
    <div className='mb-4 rounded-md border border-gray-200 bg-fitViolet'>
      <button
        type='button'
        onClick={handleToggle}
        className='w-full p-4 font-medium text-white focus:outline-none'
      >
        <h2 className='text-center'>
          <p> {workoutName[workout.workout_id]}</p>
          <p>{date} </p>
          <p>{duration} minutes </p>
        </h2>
      </button>
      {isOpen && (
        <div className='border-t border-gray-200 bg-gray-50 p-4'>
          {workout.exercise_list.map((exercise) => (
            <div
              key={exercise.name}
              className='rounded-md border border-gray-200 p-3 m-2'
            >
              <p className='mb-1 text-base font-medium'>{exercise.name}</p>
              <p className='text-sm text-gray-600'>
                Reps: {exercise.reps_count}
              </p>
              <p className='text-sm text-gray-600'>
                Weight: {exercise.weight} kg
              </p>
              <p className='text-sm text-gray-600'>
                Sets: {exercise.sets_count}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
