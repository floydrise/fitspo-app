import React from 'react';
import SignupForm from '@/app/ui/SignupForm';
import { HashtagIcon } from '@heroicons/react/24/outline';

const Page = () => {
  return (
    <div
      className={'flex w-full flex-col items-center justify-center gap-2 p-10'}
    >
      <span className={'flex gap-1'}>
        <HashtagIcon className={'w-5'} />
        <h1 className={'text-2xl'}>Sign up</h1>
      </span>
      <div
        className={
          'flex w-full justify-center rounded-md border bg-indigo-50 p-4 md:w-2/5'
        }
      >
        <SignupForm />
      </div>
    </div>
  );
};

export default Page;
