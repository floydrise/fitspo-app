import { Exercise } from '@/app/lib/definitions';
import { fetchWorkoutHistoryByUserId } from '@/app/lib/endpoints';
import React from 'react';

async function page() {
  const workout_history = await fetchWorkoutHistoryByUserId(1);
  console.log(workout_history)
  return (
    <div>
      <h1>workout history</h1>
      {workout_history.map((workout) => (
        <div key={workout.workout_history_id}>
          {workout.exercise_list.map((exercise: Exercise) => {
            {
              return (
                <ul style={{ margin: '10px' }} key={exercise.name}>
                  <li>Name: {exercise.name}</li>
                  <li>Previous weight: {exercise.previous_weight}</li>
                  <li>Reps: {exercise.reps_count}</li>
                  <li>Weight: {exercise.weight}kg</li>
                  <li>Sets: {exercise.sets_count}</li>
                </ul>
              );
            }
          })}
          <h3>Date: {new Date(workout.date).toLocaleDateString()}</h3>
          <h3>Length: {Math.round(workout.duration / 60)} minutes</h3>
        </div>
      ))}
    </div>
  );
}

export default page;
