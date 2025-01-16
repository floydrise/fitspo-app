import React from 'react';
import { fetchWorkouts, fetchExerciseById } from '@/app/lib/endpoints';
import ExerciseCard from '../ui/ExerciseCard';
import Link from 'next/link';

async function Page() {
  const workouts = await fetchWorkouts();

  const workoutsWithExercises = await Promise.all(
    workouts.map(async (workout) => {
      const exercises = await Promise.all(
        workout.exercise_ids.map(async (exercise_id: string) => {
          const {
            data: { name },
          } = await fetchExerciseById(exercise_id);
          return name;
        })
      );
      return {
        ...workout,
        exercises,
        workout_id: workout.workout_id,
        workout_name: workout.workout_name,
      };
    })
  );

  return (
    <section>
      <h1 className='m-2 flex flex-col items-center justify-center text-2xl font-bold'>
        Workouts List
      </h1>
      <div className='mb-5 min-h-screen w-full py-6'>
        {workoutsWithExercises.map((workout) => (
          <div
            key={workout.workout_id}
            className='mx-auto mb-5 block w-10/12 max-w-sm cursor-pointer rounded-lg border border-gray-200 p-4 shadow-lg transition-shadow hover:bg-fitGrey hover:shadow-xl'
          >
            <Link
              key={workout.workout_id}
              href={`workouts/${workout.workout_name}`}
              passHref
            >
              <div>
                <h2 className='mb-2 flex flex-col items-center justify-center text-xl font-bold'>
                  {workout.workout_name}
                </h2>
                <ul className='mb-1 flex flex-col items-center gap-1'>
                  {workout.exercises.map((exercise) => (
                    <li key={exercise}>
                      <ExerciseCard exTitle={exercise} />
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Page;
