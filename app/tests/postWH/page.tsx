// import { handler } from '@/app/lib/endpoints';
import WorkoutF from '@/app/ui/WorkoutF';
import React from 'react';

async function page() {
  return (
    <div className={"flex flex-col justify-center items-center w-full p-10 gap-2"}>
      <div
        className={'flex w-full md:w-2/5 justify-center rounded-md border bg-indigo-50 p-4'}
      >
        <WorkoutF />
      </div>
      </div>
      );
      };

export default page;
