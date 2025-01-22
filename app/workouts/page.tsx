import React, { Suspense } from 'react';
import WorkoutCard from '@/components/ui/workoutPageCard';
import SkeletonWorkout from '@/components/ui/SkeletonWorkout';

async function Page() {
  return (
    <section className='container mx-auto px-[15px] pb-[50px] pt-[26px]'>
      <h1 className='text-[32px] font-semibold text-fitBlue'>Workouts</h1>
      <div className='m-6 flex flex-wrap items-center justify-center gap-10'>
        <Suspense fallback={<SkeletonWorkout />}>
          <WorkoutCard />
        </Suspense>
      </div>
    </section>
  );
}

export default Page;
