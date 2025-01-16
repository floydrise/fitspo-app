'use server';
import React from 'react';
import { auth } from '@/auth';
import {
  fetchUserByUsername,
  fetchWorkoutHistoryByUserId,
  // fetchWorkoutHistoryByUserId,
} from '../lib/endpoints';
import UserProfile from '../ui/UserProfile';

import { WorkoutCard } from '../ui/WorkoutCard';

export default async function Page() {
  const session = await auth();
  if (!session?.user.username) {
    throw new Error('User is not logged in');
  }
  const userData = await fetchUserByUsername(session.user.username);
  const workout_history = await fetchWorkoutHistoryByUserId(userData.user_id);
  console.log(userData, "<== user data")
  console.log(workout_history, "<== workout history")
  return (
    <div>
      <p>
        User{' '}
        <span className={'border-b font-bold'}>{session?.user.username}</span>{' '}
        logged in
      </p>
      <div className='container mx-auto p-6'>
        <h1>User Profile</h1>
        <UserProfile user={userData} />
      </div>
      <div className='space-y-4'>
        {workout_history.map((workout) => (
          <WorkoutCard key={workout.workout_history_id} workout={workout} />
        ))}
      </div>
    </div>
  );
}
