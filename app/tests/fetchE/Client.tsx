'use client';

import React from 'react';

function Client({exercises}: any) {
  console.log(exercises.data.exercises[0]);
  return (
    <div>
      <h1>Client Page</h1>
    </div>
  );
}

export default Client;
