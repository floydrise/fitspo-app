import React from 'react';

const TrackerSkeleton = () => {
  return (
    <>
      <div className='skeleton mx-1 mb-4 mt-2 flex h-[60px] max-w-[100%] flex-wrap p-2'></div>
      <div className={'flex flex-col items-center justify-center gap-8 p-1'}>
        {new Array(3).fill(null).map((_, index) => (
          <div
            key={index}
            className='skeleton h-[178px] w-[360px] rounded-xl p-[10px]'
          ></div>
        ))}
      </div>
      <div className={'flex justify-center gap-20 pt-[10px]'}>
        <div className={'skeleton h-[47px] w-[119px]'}></div>
        <div className={'skeleton h-[47px] w-[119px]'}></div>
      </div>
    </>
  );
};

export default TrackerSkeleton;
