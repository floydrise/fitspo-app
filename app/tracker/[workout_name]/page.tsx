import React from 'react';
import {
  fetchExerciseById,
  fetchUserByUsername,
  fetchWorkoutByName,
} from '@/app/lib/endpoints';
import { notFound } from 'next/navigation';
import { Workout } from '@/app/lib/definitions';
import { auth } from '@/auth';
import TrackerLayout from '@/app/ui/TrackerLayout';

export default async function Page(props: {
  params: Promise<{ workout_name: string }>;
}) {
  const pathname = await props.params;
  let removeSpace = pathname.workout_name.match(/[a-z]+/gim)?.join(' ');

  if (removeSpace) {
    removeSpace = removeSpace[0].toUpperCase() + removeSpace.slice(1);
  }

  const workout: Workout = await fetchWorkoutByName(removeSpace);
  if (!workout) {
    notFound();
  }

  let bodyPartName: string = '';

  const exercises = workout.exercise_ids.map(async (exercise_id: string) => {
    const Exercises = await fetchExerciseById(exercise_id);
    bodyPartName = Exercises.data.bodyParts.toString();
    return Exercises.data.name;
  });

  const exerciseNames: string[] = await Promise.all(exercises);

  const session = await auth();
  const { user_id } = await fetchUserByUsername(session?.user.username);

  return (
    <section className='container mx-auto'>
        <TrackerLayout
          workout={workout}
          bodyPart={bodyPartName ? bodyPartName : 'chest'}
          exerciseNames={exerciseNames}
          user_id={user_id}
        />
    </section>
  );
}
