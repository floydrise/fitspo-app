'use server';
import React from 'react';
import { auth } from '@/auth';
import {
  fetchUserByUsername,
  // fetchWorkoutHistoryByUserId,
} from '../lib/endpoints';
import UserProfile from '../ui/UserProfile';
import { User } from '../lib/definitions';


// import { workout_history } from '../lib/data';
// import { WorkoutCard } from '../ui/WorkoutCard';

export default async function Page() {
  const session = await auth();
  if (!session?.user.username) {
    throw new Error('User is not logged in');
  }
  const userData = await fetchUserByUsername(session.user.username);
  const user: User = {
    user_id: userData.user_id,
    username: userData.username,
    name: userData.name,
    avatar_img_url: userData.avatar_img_url,
  };

  //  const workout_history = (
  //   await fetchWorkoutHistoryByUserId(userData.user_id)
  // ).map((workout: Workout_history) => ({
  //   workout_history_id: workout.workout_history_id,
  //   user_id: workout.user_id,
  //   workout_id: workout.workout_id,
  //   date: workout.date,
  //   duration: workout.duration,
  //   exercise_list: workout.exercise_list,
  // }));

  return (
    <div>
      <p>
        User{' '}
        <span className={'border-b font-bold'}>{session?.user.username}</span>{' '}
        logged in
      </p>
      <div className='container mx-auto p-6'>
        <h1>User Profile</h1>
        <UserProfile user={user} />
      </div>
      {/* <div className='space-y-4'>
        {workout_history.map((workout) => (
          <WorkoutCard key={workout.workout_history_id} workout={workout} />
        ))}
      </div> */}
    </div>
  );
}
