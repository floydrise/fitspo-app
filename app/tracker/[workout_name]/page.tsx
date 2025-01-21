import React from 'react';
import { fetchExerciseById, fetchWorkoutByName } from '@/app/lib/endpoints';
import { notFound } from 'next/navigation';
import { Workout } from '@/app/lib/definitions';
import TrackerCard from '@/app/ui/TrackerCard';

export default async function Page(props: {
  params: Promise<{ workout_name: string }>;
}) {
  const pathname = await props.params;
  let removeSpace = pathname.workout_name.match(/[a-z]+/gim)?.join(' ');
  
  if (removeSpace) {
    removeSpace = removeSpace[0].toUpperCase() + removeSpace.slice(1);
  }

  const workout: Workout = await fetchWorkoutByName(removeSpace);
  if (!workout) {
    notFound();
  }

  const exercises = workout.exercise_ids.map(async (exercise_id: string) => {
    const Exercises = await fetchExerciseById(exercise_id);
    return Exercises.data.name;
  });

  const exerciseNames: string[] = await Promise.all(exercises);

  return (
    <section>
      <div className='mx-1 mt-2 flex max-w-[100%] items-center justify-between rounded-[5px] bg-fitViolet p-2'>
        <h1 className='text-2xl font-bold text-white'>
          {workout.workout_name} workout
        </h1>
        <div className='text-xl font-bold text-white'>
          {'<'}Timer component{'>'}
        </div>
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
