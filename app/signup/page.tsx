import React from 'react';
import SignupForm from '@/app/ui/SignupForm';
import Image from 'next/image';

const Page = () => {
  return (
    <section className='bg-fitViolet'>
      <div className='container mx-auto flex justify-center px-[15px] pb-28 pt-10'>
        <div className='flex w-[450px] flex-col items-center justify-center rounded-[15px] bg-white px-3 shadow-md'>
          <div className='mt-2.5 flex h-[82px] w-full items-center rounded-[15px] bg-fitViolet py-[7px] pl-[14px] pr-[28px]'>
            <div className=''>
              <Image
                src='/signup.svg'
                width={68}
                height={68}
                alt='User signup'
              />
            </div>
            <div className='ml-[17px]'>
              <h1 className='text-lg font-semibold leading-none text-white min-[390px]:text-2xl min-[390px]:leading-none'>
                Create an account
              </h1>
              <p className='text-sm text-white min-[390px]:text-lg'>
                Join now for full access!
              </p>
            </div>
          </div>
          <div className='flex w-full justify-center p-4 pb-10 md:w-1/3'>
            <SignupForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
//
