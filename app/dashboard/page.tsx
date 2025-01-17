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

export default async function Page() {
  const session = await auth();
  if (!session?.user.username) {
    throw new Error('User is not logged in');
  }
  const userData = await fetchUserByUsername(session.user.username);
  const workout_history = await fetchWorkoutHistoryByUserId(userData.user_id);

  return (
    <div className='mx-auto flex max-w-7xl flex-col gap-8 p-4'>
      <div className='flex flex-wrap items-center gap-8'>
        <div className='flex w-full flex-shrink-0 flex-col items-center sm:w-auto'></div>
        <UserProfile user={userData} />
      </div>
      <div className='flex flex-col items-center gap-8 sm:flex-row'>
        <Component history={workout_history} />
      </div>
      <h1 className='text-center text-2xl font-bold'>Workout History</h1>
      <div className='flex flex-col gap-4'>
        {workout_history.map((workout) => (
          <WorkoutCard key={workout.workout_history_id} workout={workout} />
        ))}
      </div>
    </div>
  );
}
