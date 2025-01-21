import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Workout } from '@/app/lib/definitions';
import { fetchWorkouts } from '@/app/lib/endpoints';

interface WorkoutDescription {
  workoutName: string;
  description: string;
}

const WorkoutCard = async () => {
  const workouts: Workout[] = await fetchWorkouts();
  const workoutDescriptions: WorkoutDescription[] = [
    {
      workoutName: 'Upper Body',
      description:
        'This upper body workout targets your chest, back, shoulders, and arms to build strength and improve endurance.',
    },
    {
      workoutName: 'Lower Body',
      description:
        'This lower body workout focuses on building strength, stability, and power in your legs and glutes.',
    },
    {
      workoutName: 'Core',
      description:
        'This core workout focuses on strengthening your abs, obliques, and lower back to improve stability and support overall movement.',
    },
    {
      workoutName: 'Chest',
      description:
        'This chest workout is designed to build strength and definition in your pectoral muscles while enhancing upper body power.',
    },
    {
      workoutName: 'Back',
      description:
        'This back workout targets your lats, traps, and lower back to build strength, improve posture, and enhance overall stability.',
    },
    {
      workoutName: 'Biceps',
      description:
        'This biceps workout focuses on building strength and size in your arms through targeted curling movements. ',
    },
    {
      workoutName: 'Triceps',
      description:
        'This triceps workout is designed to strengthen and tone the muscles on the back of your arms.',
    },
    {
      workoutName: 'Shoulders',
      description:
        'This shoulder workout targets the deltoid muscles to build strength, stability, and definition.',
    },
  ];

  return (
    <>
      {workouts.map((workout) => (
        <div
          key={workout.workout_id}
          data-theme={'dark'}
          className='card image-full h-72 w-96 bg-base-100 shadow-xl'
        >
          <figure className={'h-72'}>
            <Image
              src={`/${workout.workout_name}.png`}
              alt={'workout pic'}
              width={1000}
              height={800}
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title text-gray-300'>{workout.workout_name}</h2>
            <p className={'text-gray-300'}>
              {
                workoutDescriptions.filter(
                  (workoutFilter: WorkoutDescription) =>
                    workoutFilter.workoutName === workout.workout_name
                )[0].description
              }{' '}
            </p>
            <div className='card-actions justify-end'>
              <Button variant={'green'} asChild>
                <Link href={`/tracker/${workout?.workout_name}`}>
                  Start workout
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WorkoutCard;
