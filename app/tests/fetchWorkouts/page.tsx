import { fetchWorkouts } from '@/app/lib/endpoints';
import React from 'react';

async function page() {
  const workouts = await fetchWorkouts();
  return (
    <div>
      <h1>workouts</h1>
      {workouts.map((workout) => (
        <div key={workout.workout_id}>
          <h2>{workout.workout_name}</h2>
          {workout.exercise_ids.map((exercise_id: string) => {
                {return(<ul key={exercise_id}>
                    {exercise_id}
                </ul>)}
        })}
        </div>
      ))}
    </div>
  );
}

export default page;