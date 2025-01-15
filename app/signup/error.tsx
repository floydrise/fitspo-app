'use client';

import { Button } from '@/components/ui/button';
import React from 'react';
import {FaceFrownIcon} from '@heroicons/react/24/outline';

const Error = ({ reset }: {reset: () => void }) => {
  return (
    <main className='flex h-screen flex-col items-center justify-center'>
      <h2 className='text-center text-3xl'>Oh no, something went wrong <FaceFrownIcon/></h2>
        <Button variant="purple" onClick={() => reset()}>Please, try again!</Button>
    </main>
  );
};

export default Error;
