import React from 'react';
import SignupForm from '@/app/ui/SignupForm';
import {HashtagIcon} from '@heroicons/react/24/outline';

const Page = () => {
  return (
    <div className={"flex flex-col justify-center items-center w-full p-10 gap-2"}>
      <span className={"flex gap-1"}><HashtagIcon className={"w-5"} /><h1 className={"text-2xl"}>Sign up</h1></span>
      <div
        className={'flex w-full md:w-2/5 justify-center rounded-md border bg-indigo-50 p-4'}
      >
        <SignupForm />
      </div>
      </div>
      );
      };

      export default Page;