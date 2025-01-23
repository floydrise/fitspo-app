import React from 'react';
import SignupForm from '@/app/ui/SignupForm';
import { HashtagIcon } from '@heroicons/react/24/outline';

const Page = () => {
  return (
    <section
      className={
        'container mx-auto mt-10 flex max-w-[400px] flex-col items-center justify-center rounded-[15px] bg-white shadow-md'
      }
    >
      <div className='h-28 w-full rounded-t-[15px] bg-fitViolet p-7 text-center'>
        <h1 className={'text-2xl font-semibold text-white'}>
          Create an account
        </h1>
        <p className='text-white'>Sign up now and unlock Workout access!</p>
      </div>
      <div className={'flex w-full justify-center p-4 pb-10 md:w-1/3'}>
        <SignupForm />
      </div>
    </section>
  );
};

export default Page;
