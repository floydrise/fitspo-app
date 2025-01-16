"use server"
import React from 'react';
import { auth } from '@/auth';
import { fetchUserByUserId, fetchWorkoutHistoryByUserId } from '../lib/endpoints'
import UserProfile from '../ui/UserProfile'
import { User } from '../lib/definitions'
import { WorkoutCard } from '../ui/WorkoutCard';

export default async function Page() {

  const session = await auth();
  console.log(session)
  const workout_history = (await fetchWorkoutHistoryByUserId(1)).map((workout: any) => ({
    workout_history_id: workout.workout_history_id,
    user_id: workout.user_id,
    workout_id: workout.workout_id,
    date: workout.date,
    duration: workout.duration,
    exercise_list: workout.exercise_list
  }));

   const userData = await fetchUserByUserId(1)
           const user: User = {
               user_id: userData.user_id,
               username: userData.username,
               name: userData.name,
               avatar_img_url: userData.avatar_img_url
           }

  return (
    <div>
      <p>User <span className={"border-b font-bold"}>{session?.user.username}</span> logged in</p>
      <div className='p-6 container mx-auto'>
                 <h1>User Profile</h1>
                 <UserProfile user={user} />
             </div>
             <div className='space-y-4'>
        {workout_history.map((workout) => (
          <WorkoutCard key={workout.workout_history_id} workout={workout} />
        ))}
      </div>
    </div>
  );
};
