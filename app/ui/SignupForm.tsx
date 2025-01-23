import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { UserIcon, PhotoIcon, AtSymbolIcon } from '@heroicons/react/24/outline';
import { signUp } from '@/app/lib/serverActions';

const SignupForm = () => {
  return (
    <form action={signUp} className={'flex flex-col gap-2'}>
      <div className={'flex flex-col items-start'}>
        <label htmlFor={'username'} className={'flex gap-1'}>
          Username:
        </label>
        <input
          name={'username'}
          id={'username'}
          className={
            'h-8 rounded-md border p-3 focus:border-violet-200 focus:outline-none focus:ring'
          }
          placeholder={'Nickname'}
          required
        />
      </div>
      <div className={'flex flex-col items-start'}>
        <label htmlFor={'name'} className={'flex gap-1'}>
          Your name:
        </label>
        <input
          name={'name'}
          id={'name'}
          className={
            'h-8 rounded-md border p-3 focus:border-violet-200 focus:outline-none focus:ring'
          }
          placeholder={'First name'}
          required
        />
      </div>
      <div className={'flex flex-col items-start'}>
        <label htmlFor={'imgUrl'} className={'flex gap-1'}>
          Profile picture:
        </label>
        <input
          name={'imgUrl'}
          id={'imgUrl'}
          className={
            'h-8 rounded-md border p-3 focus:border-violet-200 focus:outline-none focus:ring'
          }
          placeholder={'Image url'}
        />
      </div>
      <div className={'flex justify-center gap-8'}>
        <Button variant='green' type={'submit'}>
          Sign up
        </Button>
        <Button variant='destructive' asChild={true}>
          <Link href={'/'}>Cancel</Link>
        </Button>
      </div>
      <span className={'text-center text-fitBlue hover:underline'}>
        <Link href={'/login'}>Already have an account?</Link>
      </span>
    </form>
  );
};

export default SignupForm;
