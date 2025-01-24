'use client';

import Link from 'next/link';
import React from 'react';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/serverActions';
import { ExclamationCircleIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';

export const Login = () => {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <>
      <div className='w-[450px] rounded-[15px] bg-white px-3 shadow-md'>
        <div className='mt-2.5 flex h-[82px] w-full items-center rounded-[15px] bg-fitViolet py-[7px] pl-[14px] pr-[28px]'>
          <Image src='/signup.svg' width={68} height={68} alt='User signup' />
          <div className='ml-[17px]'>
            <h1 className='text-lg font-semibold leading-none text-white min-[420px]:text-2xl min-[420px]:leading-none'>
              Welcome back!
            </h1>
            <p className='text-sm text-white min-[420px]:text-lg'>
              Log in to your FitSpo account.
            </p>
          </div>
        </div>
        <form action={formAction} className='space-y-4 p-5'>
          <div>
            <label htmlFor='username' className='flex gap-1 text-fitBlue'>
              Username:
            </label>
            <input
              type='text'
              id='username'
              name='username'
              required
              className='mt-1 h-8 w-full rounded-md border p-3 focus:outline-none'
              placeholder='Enter your username'
            />
          </div>
          <button
            type='submit'
            aria-disabled={isPending}
            className='flex h-[36px] w-full items-center justify-center rounded-lg bg-fitGreen py-2 text-fitBlue shadow hover:bg-fitDarkerGreen focus:outline-none'
          >
            Log in
          </button>
          <div
            className='flex items-end space-x-1'
            aria-live='polite'
            aria-atomic='true'
          >
            {errorMessage && (
              <>
                <ExclamationCircleIcon className='h-5 w-5 text-red-500' />
                <p className='text-sm text-red-500'>{errorMessage}</p>
              </>
            )}
          </div>
        </form>
        <div className='pb-10'>
          <p className='text-center text-sm text-fitViolet/70'>
            Default username:{' '}
            <strong className='text-fitViolet'>ThisIsAUsername</strong>
          </p>
          <p className='text-center text-sm text-gray-600'>
            Don’t have an account?{' '}
            <Link href='/signup' className='text-fitBlue hover:underline'>
              <span className='font-bold'>Sign up today!</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
