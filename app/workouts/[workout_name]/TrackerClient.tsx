'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchExerciseById } from '@/app/lib/endpoints';

function TrackerClient({ workouts }: { workouts: any[] }) {
  const { workout_name } = useParams();
  const [exerciseNames, setExerciseNames] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  let decodedWorkout_name = workout_name
    ? decodeURIComponent(workout_name as string)
    : '';

  decodedWorkout_name = decodedWorkout_name
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const isValidWorkout = workouts.some(
    (workout) => workout.workout_name === decodedWorkout_name
  );

  if (!isValidWorkout) {
    return (
      <div>
        <h1 className='text-center text-2xl font-bold'>Tracker Page</h1>
        <p className='text-center text-red-500'>No workout found...</p>
      </div>
    );
  }

  useEffect(() => {
    const matchingWorkout = workouts.find(
      (workout) => workout.workout_name === decodedWorkout_name
    );

    if (matchingWorkout) {
      const fetchExercises = async () => {
        try {
          const exercises = await Promise.all(
            matchingWorkout.exercise_ids.map((id: string) =>
              fetchExerciseById(id)
            )
          );
          const exerciseNames = exercises.map((exercise) => {
            return exercise.data.name;
          });
          setExerciseNames(exerciseNames);
        } catch (error) {
          console.error('Error fetching exercises', error);
          setError('Failed to load exercises...');
        } finally {
          setLoading(false);
        }
      };
      fetchExercises();
    }
  }, [decodedWorkout_name, workouts]);

  return (
    <div>
      <h1 className='text-center text-2xl font-bold'>Tracker Page</h1>
      {error ? (
        <p className='text-center text-red-500'>{error}</p>
      ) : loading ? (
        <p className='text-center'>Loading Exercises...</p>
      ) : (
        <div className='flex flex-col items-center'>
          <h2 className='text-xl font-bold'>{decodedWorkout_name}</h2>
          <ul>
            {exerciseNames.map((name, index) => (
              <li key={`${name}-${index}`}>{name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TrackerClient;
