import React from 'react';
// import TrackerClient from './TrackerClient';
import { fetchWorkoutByName } from '@/app/lib/endpoints';
import { notFound } from 'next/navigation';
import { Workout } from '@/app/lib/definitions';



export default async function Page(props: { params: Promise<{workout_name: string}>} ) {
  const pathname = await props.params;
  const removeSpace = pathname.workout_name.match(/[a-z]+/gmi)?.join(" ");

  const workout: Workout = await fetchWorkoutByName(removeSpace)
  if (!workout) {
    notFound()
  }
  console.log(workout);
  return <div>
    <p>{workout.workout_name}</p>
    {/*<TrackerClient workouts={workouts} />*/}
  </div>;
}
