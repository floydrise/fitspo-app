import { Skeleton } from '@heroui/skeleton';
import React from 'react';

const Loading = () => {
  return (
    <div className="container mx-auto px-[15px] py-[26px]">
      <div className="flex flex-col items-center mb-10">
        <Skeleton className="h-20 w-20 rounded-full" />
        <Skeleton className="mt-4 h-6 w-32 rounded-lg" /> 
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Skeleton className="h-40 w-full rounded-lg" /> 
        <Skeleton className="h-40 w-full rounded-lg" /> 
      </div>
      <div className="mb-4">
        <Skeleton className="h-6 w-40 rounded-lg" /> 
      </div>
      <div className="flex flex-col gap-4">
        {[...Array(2)].map((_, index) => (
          <Skeleton key={index} className="h-12 w-full rounded-lg" />
        ))}
      </div>
    </div>
  );
};

export default Loading;