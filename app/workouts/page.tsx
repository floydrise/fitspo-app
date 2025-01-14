import React from 'react';
import { fetchWorkouts } from '@/app/lib/endpoints';
import { fetchExerciseById } from '@/app/lib/endpoints';

async function Page() {
  const workouts = await fetchWorkouts();

  // Only proof of concept using the API to convert ids to details, will need to
  // use useEffect and useState I think to avoid function being called every render
  // and to avoid 'await' being used in React Render

  return (
    <div>
      <h1
        className='text-2xl font-bold'
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
      {workouts.map((workout) => (
        <ul
          key={workout.workout_id}
          className='mx-auto block max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow-lg transition-shadow hover:shadow-xl'
        >
          <h2
            className='text-1xl font-bold'
            style={{
              marginBottom: '10px',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {workout.workout_name}
          </h2>
          {workout.exercise_ids.map((exercise_id: string) => {
            {
              return (
                <ul style={{ marginBottom: '5px' }} key={exercise_id}>
                  {fetchExerciseById(exercise_id).then((exercise) => (
                    <li
                      style={{ marginLeft: '15px', listStyleType: 'square' }}
                      key={exercise.data.exerciseId}
                    >
                      {exercise.data.name}
                    </li>
                  ))}
                </ul>
              );
            }
          })}
        </ul>
      ))}
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
