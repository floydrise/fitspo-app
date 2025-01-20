import React from 'react';
import {fetchWorkouts } from '@/app/lib/endpoints';
import { Workout } from '@/app/lib/definitions';
import WorkoutCard from '@/components/ui/workoutCard';

async function Page() {

  const workouts: Workout[] = await fetchWorkouts();
  return (
    <section className={"flex flex-wrap justify-center items-center gap-6 m-6"}>
      {workouts.map((workout) => (
        <WorkoutCard key={workout.workout_id} workoutName={workout.workout_name}/>
      ))}
    </section>
  );
}

export default Page;
