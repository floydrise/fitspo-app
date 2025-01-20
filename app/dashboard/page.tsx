'use server';
import React from 'react';
import { auth } from '@/auth';
import {
  fetchUserByUsername,
  fetchWorkoutHistoryByUserId,
} from '../lib/endpoints';
import { WorkoutCard } from '../ui/WorkoutCard';
import UserProfile from '../ui/UserProfile';
import { Component } from '../ui/PieChart';
import Link from 'next/link';
import { ProcessWorkoutData } from '../ui/ProcessWorkoutData';

export default async function Page() {
  const session = await auth();
  if (!session?.user.username) {
    throw new Error('User is not logged in');
  }
  const userData = await fetchUserByUsername(session.user.username);
  const workout_history = await fetchWorkoutHistoryByUserId(userData.user_id);
  if (workout_history.length === 0)
    return (
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 p-4'>
        <UserProfile user={userData} />
        <p>nothing to see yet...</p>
        <Link href='/workouts'>
          <p className='text-center text-xl font-bold'>
            Click here to start your Journey
          </p>
        </Link>
      </div>
    );

  return (
    <div className='mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 p-4'>
      <div>
        <UserProfile user={userData} />
      </div>
      <div className='flex flex-row items-center justify-center gap-8'>
        <div className='flex 1 justify-center'>
        <Component history={workout_history} />
        </div>
        <div className='flex 1 justify-center'>
        <ProcessWorkoutData history={workout_history} />
        </div>
      </div>
      <h1 className='text-center text-xl font-bold'>Workout History</h1>
      <div className='w-full'>
        {workout_history.map((workout) => (
          <WorkoutCard key={workout.workout_history_id} workout={workout} />
        ))}
      </div>
    </div>
  );
}
