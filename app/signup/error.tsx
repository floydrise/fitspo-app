'use client';

import { Button } from '@/components/ui/button';
import React from 'react';

const Error = ({ reset }: {reset: () => void }) => {
  return (
    <main className='flex h-full flex-col items-center justify-center'>
      <h2 className='text-center text-3xl'>Uh, oh, something went wrong :(</h2>
        <Button variant="purple" onClick={() => reset()}>Try again!</Button>
    </main>
  );
};

export default Error;
