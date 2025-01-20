import React from 'react';
import { fetchExerciseById, fetchWorkoutByName } from '@/app/lib/endpoints';
import { notFound } from 'next/navigation';
import { Workout } from '@/app/lib/definitions';
import TrackerCard from '@/app/ui/TrackerCard';

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
    <div>
      <p>{workout.workout_name}</p>
      {exerciseNames.map((exerciseName) => (
        <ul key={exerciseName}>
          <TrackerCard exerciseName={exerciseName} />
        </ul>
      ))}
    </div>
  );
}
