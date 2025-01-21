'use client';
import React from 'react';

function FinishAndCancel() {
  const submit = () => {
    console.log("submit")
  };

  const cancel = () => {
    console.log("cancel")
  };

  return (
    <div className='flex items-center justify-center gap-20'>
      <button
        onClick={submit}
        className='rounded-[15px] bg-fitGreen px-[33px] py-[10px] text-[18px] font-bold transition ease-in-out hover:bg-fitBlue hover:text-fitGreen'
      >
        Finish
      </button>
      <button
        onClick={cancel}
        className='rounded-[15px] bg-fitBlue px-[33px] py-[10px] text-[18px] font-bold text-fitGreen transition ease-in-out hover:bg-fitRed hover:text-fitBlue'
      >
        Cancel
      </button>
    </div>
  );
}

export default FinishAndCancel;
