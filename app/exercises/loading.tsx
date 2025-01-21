import React from 'react';
import {Skeleton} from "@heroui/skeleton";

const Loading = ( ) => {
  return (
    <div className="container mx-auto px-[15px] pb-[50px] pt-[26px]">
      <div className="mb-8">
        <Skeleton className="h-8 w-1/4 rounded-lg" />
      </div>
      <div className="mb-8">
        <Skeleton className="h-10 w-full md:w-3/5 rounded-lg" />
      </div>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="w-full">
            <Skeleton className="h-40 w-full rounded-lg" />
            <Skeleton className="mt-4 h-6 w-3/5 rounded-lg" />
            <Skeleton className="mt-2 h-4 w-2/5 rounded-lg" />
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Skeleton className="h-10 w-1/2 rounded-lg" />
      </div>
    </div>
  );
}

export default Loading