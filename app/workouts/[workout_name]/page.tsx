import React from 'react';
import TrackerClient from './TrackerClient';
import { fetchWorkouts } from '@/app/lib/endpoints';

export default async function Page() {
  const workouts = await fetchWorkouts();
  return <TrackerClient workouts={workouts} />;
}
