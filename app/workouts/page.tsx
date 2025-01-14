import React from 'react';
import { fetchWorkouts } from '@/app/lib/endpoints';
import { fetchExerciseById } from '@/app/lib/endpoints';

async function Page() {
  const workouts = await fetchWorkouts();
  console.log(workouts[0], 'workouts');
  console.log(workouts[0].exercise_ids, 'exercise_ids');

  const exercise = await fetchExerciseById();

  console.log(exercise.data.name, 'exercise');

  return (
    <div>
      <h1
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          margin: '10px',
        }}
      >
        Workouts list
      </h1>
      <p>{workouts[0].exercise_ids}</p>
      <p></p>
    </div>
  );
}

export default Page;

/*
      {workouts.map((workout) => (
        <div key={workout.workout_id}>
          <h2 style={{ marginBottom: '10px' }}>{workout.workout_name}</h2>
          {workout.exercise_ids.map((exercise_id: string) => {
            {
              return (
                <ul style={{ marginBottom: '5px' }} key={exercise_id}>
                  {fetchExerciseById(exercise_id).then((exercise) => (
                    <li key={exercise.exercise_id}>a</li>
                  ))}
                </ul>
              );
            }
          })}
        </div>
      ))}
*/
