import { fetchWorkoutById } from '@/app/lib/endpoints';
import React from 'react';

async function page() {
  const workout = await fetchWorkoutById(1);
  return (
    <div>
      <h1>Workout</h1>
      <div key={workout.workout_id}>
        <h2>{workout.workout_name}</h2>
      </div>
    </div>
  );
}

export default page;
