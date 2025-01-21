'use client';
import Image from 'next/image';
import { useState } from 'react';
import {
  LockOpenIcon,
  LockClosedIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

export default function TrackerCard({
  exerciseName,
}: {
  exerciseName: string;
}) {
  const [sets, setSets] = useState([
    {
      exerciseName: exerciseName,
      id: 1,
      weight: 0,
      reps: 0,
      locked: false,
    },
  ]);

  const addSet = () => {
    const newSet = {
      exerciseName: exerciseName,
      id: sets.length + 1,
      weight: 0,
      reps: 0,
      locked: false,
    };
    setSets([...sets, newSet]);
  };

  const removeSet = (id: number) => {
    const updateSets = sets
      .filter((set) => set.id !== id)
      // .map((set, index) => ({ ...set, id: index + 1 }));
    setSets(updateSets);
  };

  const lock = (id: number) => {
    setSets((prevSets) =>
      prevSets.map((set) =>
        set.id === id ? { ...set, locked: !set.locked } : set
      )
    );
  };

  return (
    <section className='w-[360px] rounded-xl bg-fitGrey p-[10px]'>
      <div className='rounded-xl bg-white p-[10px]'>
        <div className='rounded-xl bg-fitViolet p-[5px]'>
          <div className='flex'>
            <Image
              src={`/upper_arms.svg`}
              width={68}
              height={68}
              alt='Body part filter'
            />
            <div className='pl-1 text-white'>
              <h3 className='text-xl font-bold'>
                {exerciseName[0].toUpperCase() + exerciseName.slice(1)}
              </h3>
              <p className='text-sm'>
                Customize your workout with this setup form.
              </p>
            </div>
          </div>
        </div>
        <div>
          {sets.map((set, index) => (
            <div className='flex items-center pt-1 text-fitBlue' key={set.id}>
              <div
                className={`mx-1 rounded-xl border-2 border-solid bg-fitGrey p-1 px-3 font-bold text-fitBlue ${
                  set.locked ? 'bg-gray-300' : ''
                }`}
              >
                {set.id}
              </div>
              <div className='mr-1'>
                <input
                  type='number'
                  id={`${exerciseName}_weight_${set.id}`}
                  name={`${exerciseName}_weight_${set.id}`}
                  placeholder='weight'
                  min='1'
                  className={`w-[100%] rounded-xl border-2 border-solid bg-fitGrey p-1 ${
                    set.locked ? 'cursor-not-allowed bg-gray-300' : ''
                  }`}
                  disabled={set.locked}
                  onChange={(e) => {
                    const updatedSets = sets.map((s) =>
                      s.id === set.id
                        ? { ...s, weight: parseInt(e.target.value) }
                        : s
                    );
                    console.log(updatedSets);
                    setSets(updatedSets);
                  }}
                />
              </div>
              <div className='mx-1'>
                <input
                  id={`${exerciseName}_reps_${set.id}`}
                  name={`${exerciseName}_reps_${set.id}`}
                  placeholder='Reps'
                  type='number'
                  min='1'
                  className={`w-[100%] rounded-xl border-2 border-solid bg-fitGrey p-1 ${
                    set.locked ? 'cursor-not-allowed bg-gray-300' : ''
                  }`}
                  disabled={set.locked}
                  onChange={(e) => {
                    const updatedSets = sets.map((s) =>
                      s.id === set.id
                        ? { ...s, reps: parseInt(e.target.value) }
                        : s
                    );
                    console.log(updatedSets);
                    setSets(updatedSets);
                  }}
                />
              </div>
              <div className='flex w-[27%] items-center justify-between px-1'>
                <button onClick={() => lock(set.id)}>
                  {set.locked ? (
                    <LockClosedIcon className={'w-5 text-fitBlue'} />
                  ) : (
                    <LockOpenIcon className={'w-5 text-fitBlue'} />
                  )}
                </button>
                {index > 0 && (
                  <button onClick={() => removeSet(set.id)}>
                    <XMarkIcon
                      className={'w-5 text-fitBlue hover:text-fitRed'}
                    />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className='flex items-center justify-center pt-2'>
          <button
            onClick={addSet}
            className='cursor-pointer rounded-xl bg-fitGreen px-12 py-1 font-bold text-fitBlue hover:bg-fitBlue hover:text-fitGreen'
          >
            Add set
          </button>
        </div>
      </div>
    </section>
  );
}
