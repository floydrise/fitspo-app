import React from 'react';
import TrackerSkeleton from '@/components/ui/TrackerSkeleton';

const Loading = () => {
  return (
    <div className={"container mx-auto"}>
      <TrackerSkeleton/>
    </div>
  );
};

export default Loading;