import { Button } from '@/components/ui/button';
import React from 'react';
import { postWorkoutHistory } from '../lib/serverActions';
import { AtSymbolIcon, PhotoIcon } from '@heroicons/react/16/solid';
import { UserIcon } from 'lucide-react';

function WorkoutF() {
  return (
    <form action={postWorkoutHistory} className={'flex flex-col gap-2'}>
      <div className={'flex flex-col items-start'}>
        <label htmlFor={'weight'} className={'flex gap-1'}>
          <AtSymbolIcon className={'w-5'} /> weight:
        </label>
        <input
          name={'weight'}
          id={'weight'}
          className={
            'h-8 rounded-md border focus:border-violet-200 focus:outline-none focus:ring'
          }
          placeholder={'Username'}
        />
      </div>
      <div className={'flex flex-col items-start'}>
        <label htmlFor={'reps'} className={'flex gap-1'}>
          <UserIcon className={'w-5'} /> First name:
        </label>
        <input
          name={'reps'}
          id={'reps'}
          className={
            'h-8 rounded-md border focus:border-violet-200 focus:outline-none focus:ring'
          }
          placeholder={'First name'}
        />
      </div>
      <div className={'flex flex-col items-start'}>
        <label htmlFor={'sets'} className={'flex gap-1'}>
          <PhotoIcon className={'w-5'} /> Image URL:
        </label>
        <input
          name={'sets'}
          id={'sets'}
          className={
            'h-8 rounded-md border focus:border-violet-200 focus:outline-none focus:ring'
          }
          placeholder={'Image url'}
        />
      </div>
      <div className={'flex justify-center gap-8'}>
        <Button variant='green' type={'submit'}>
          Sign up
        </Button>
        <Button variant='destructive' asChild={true}></Button>
      </div>
      <span className={'text-purple-600 underline'}></span>
    </form>
  );
}

export default WorkoutF;
