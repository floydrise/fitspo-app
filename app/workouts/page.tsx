import React, { Suspense } from 'react';
import WorkoutCard from '@/components/ui/workoutCard';
import SkeletonWorkout from '@/components/ui/SkeletonWorkout';

async function Page() {
  return (
    <section className={'m-6 flex flex-wrap items-center justify-center gap-6'}>
      <Suspense
        fallback={<SkeletonWorkout/>}
      >
        <WorkoutCard />
      </Suspense>
    </section>
  );
}

export default Page;
