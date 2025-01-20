import React from 'react';
import { fetchExerciseById, fetchWorkoutByName } from '@/app/lib/endpoints';
import { notFound } from 'next/navigation';
import { Workout } from '@/app/lib/definitions';
import TrackerCard from '@/app/ui/TrackerCard';
import { Button } from '@/components/ui/button';

export default async function Page(props: {
  params: Promise<{ workout_name: string }>;
}) {
  const pathname = await props.params;
  const removeSpace = pathname.workout_name.match(/[a-z]+/gim)?.join(' ');

  const workout: Workout = await fetchWorkoutByName(removeSpace);
  if (!workout) {
    notFound();
  }

  const exercises = workout.exercise_ids.map(async (exericse_id: string) => {
    const Exercises = await fetchExerciseById(exericse_id);
    return Exercises.data.name;
  });

  const exerciseNames: string[] = await Promise.all(exercises);

  return (
    <section>
      <div className='flex items-center justify-center'>
        {/* Timer will go here, and workout name will be on left-hand side of it */}
        <h1 className='pt-1 text-2xl font-bold'>
          {workout.workout_name} workout
        </h1>
      </div>
      {exerciseNames.map((exerciseName) => (
        <ul key={exerciseName} className='flex items-center justify-center p-1'>
          <TrackerCard exerciseName={exerciseName} />
        </ul>
      ))}
      <div className='flex items-center justify-center gap-20'>
        <button className='rounded-[15px] bg-fitGreen px-[33px] py-[10px] text-[18px] font-bold transition ease-in-out hover:bg-fitBlue hover:text-fitGreen'>
          Finish
        </button>
        <button className='rounded-[15px] bg-fitBlue px-[33px] py-[10px] text-[18px] font-bold text-fitGreen transition ease-in-out hover:bg-fitRed hover:text-fitBlue'>
          Cancel
        </button>
      </div>
    </section>
  );
}
