import exerciseHandler from '@/app/routes/route';
import React from 'react';
import Client from './Client';

async function page() {
  const exercises = await exerciseHandler();
  console.log(exercises);
  return (
    <div>
      <h1>Test Page for Exercises</h1>
      <Client exercises={exercises} />
    </div>
  );
}

export default page;
