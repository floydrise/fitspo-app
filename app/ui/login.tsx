'use client';

import Link from 'next/link';
import React from 'react';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/serverActions';
import { ExclamationCircleIcon } from '@heroicons/react/16/solid';

export const Login = () => {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <>
      <div className='relative z-10 max-w-md space-y-6 rounded-lg bg-white p-2.5 shadow-md md:p-10'>
        <h1 className='text-center text-2xl font-bold text-fitBlue'>
          Log in to Your FitSpo Account
        </h1>
        <form action={formAction} className='space-y-4'>
          <div>
            <label
              htmlFor='username'
              className='block text-sm font-medium text-black'
            >
              Username
            </label>
            <input
              type='text'
              id='username'
              name='username'
              required
              className='mt-1 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fitBlue'
              placeholder='Enter your username'
            />
          </div>
          <button
            type='submit'
            aria-disabled={isPending}
            className='w-full rounded-lg bg-fitGreen py-2 text-white hover:bg-fitRed focus:outline-none focus:ring-2 focus:ring-fitGreen'
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
        <p className='text-center text-sm text-gray-600'>
          Default username: <strong>ThisIsAUsername</strong>
        </p>
        <p className='text-center text-sm text-gray-600'>
          Don’t have an account?{' '}
          <Link href='/signup' className='text-fitBlue hover:underline'>
            <span className='font-bold'>Sign up today!</span>
          </Link>
        </p>
      </div>
    </>
  );
};
