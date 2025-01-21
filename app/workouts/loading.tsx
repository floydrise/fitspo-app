import { Skeleton } from '@heroui/skeleton';
import React from 'react';

const Loading = () => {
  return (
    <div className="container mx-auto px-[15px] py-[26px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="w-full h-48 rounded-lg">
            <Skeleton className="w-full h-full rounded-lg" />
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center">
        <Skeleton className="h-6 w-1/4 rounded-lg mb-2" /> 
        <Skeleton className="h-6 w-1/3 rounded-lg" /> 
      </div>
    </div>
  );
};

export default Loading;