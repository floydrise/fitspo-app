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
            'h-8 w-[250px] rounded-md border p-3 focus:outline-none min-[380px]:w-[300px] md:w-[394px]'
          }
          placeholder={'Pick a username'}
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
            'h-8 w-[250px] rounded-md border p-3 focus:outline-none min-[380px]:w-[300px] md:w-[394px]'
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
            'h-8 w-[250px] rounded-md border p-3 focus:outline-none min-[380px]:w-[300px] md:w-[394px]'
          }
          placeholder={'Image URL'}
        />
      </div>
      <div className={'mt-2 flex flex-col gap-3'}>
        <Button className='w-full' variant='orange' type={'submit'}>
          Sign up
        </Button>
        <Button variant='green' asChild={true}>
          <Link href={'/login'}>Sign In</Link>
        </Button>
      </div>
    </form>
  );
};

export default SignupForm;
