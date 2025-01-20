'use client';
import Image from 'next/image';

import { useState } from 'react';

export default function TrackerCard({
  exerciseName,
}: {
  exerciseName: string;
}) {
  const [sets, setSets] = useState([
    {
      id: 1,
      weight: 0,
      reps: 0,
      locked: false,
    },
  ]);

  const addSet = () => {
    const newSet = {
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
      .map((set, index) => ({ ...set, id: index + 1 }));
    setSets(updateSets);
  };

  const lock = (id: number) => {
    const updateSets = sets.map((set) =>
      set.id === id ? { ...set, locked: !set.locked } : set
    );
    setSets(updateSets);
  };

  return (
    <section className='w-[360px] rounded-xl bg-fitGrey p-[10px]'>
      <div className='rounded-xl bg-white p-[10px]'>
        <div className='rounded-xl bg-fitViolet p-[5px]'>
          <div>
            <Image
              src={`/upper_arms.svg`}
              width={68}
              height={68}
              alt='Body part filter'
            />
            <h3>{exerciseName}</h3>
            <p>Customize your workout with this setup form.</p>
          </div>
        </div>
        <div>
          {sets.map((set) => (
            <div key={set.id}>
              <div className='w-5 rounded-xl bg-fitGrey p-1'>{set.id}</div>
              <div>
                <input
                  type='number'
                  id='weight'
                  name='weight'
                  placeholder='weight'
                  min='1'
                  className='rounded-xl border-2 border-solid bg-fitGrey p-1'
                  disabled={set.locked}
                />
              </div>
              <div>
                <input
                  id='reps'
                  name='reps'
                  placeholder='Reps'
                  type='number'
                  min='1'
                  className='rounded-xl border-2 border-solid bg-fitGrey p-1'
                  disabled={set.locked}
                />
              </div>
              <button onClick={() => lock(set.id)}>
                {set.locked ? '🔓' : '✔'}
              </button>
              {set.id !== 1 && (
                <div>
                  <button onClick={() => removeSet(set.id)}>✖</button>
                </div>
              )}
            </div>
          ))}
        </div>
        <div>
          <button
            onClick={addSet}
            className='cursor-pointer rounded-xl bg-fitGreen px-12 py-1'
          >
            Add set
          </button>
        </div>
      </div>
    </section>
  );
}
