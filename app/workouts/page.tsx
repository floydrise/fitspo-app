import React, { Suspense } from 'react';
import WorkoutCard from '@/components/ui/workoutPageCard';
import SkeletonWorkout from '@/components/ui/SkeletonWorkout';

async function Page() {
  return (
    <section
      className={
        'justify-content-between container m-6 mx-auto grid justify-items-center gap-8 px-[15px] md:grid-cols-2 xl:grid-cols-3'
      }
    >
      <Suspense fallback={<SkeletonWorkout />}>
        <WorkoutCard />
      </Suspense>
    </section>
  );
}

export default Page;
