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
    <div className='mx-auto flex max-w-7xl flex-col gap-8 p-4 items-center justify-center '>
        <div>
        <UserProfile user={userData} />
      </div>
      <div>
        <Component history={workout_history} />
      </div>
      <h1 className='text-xl font-bold text-center'>Workout History</h1>
      <div className='w-full'>
        {workout_history.map((workout) => (
          <WorkoutCard key={workout.workout_history_id} workout={workout} />
        ))}
      </div>
    </div>
  );
}
