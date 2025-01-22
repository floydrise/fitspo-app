'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import {
  LockOpenIcon,
  LockClosedIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { SubmitData } from '@/app/lib/definitions';
// import { Workout_history } from '@/app/lib/definitions';

/*interface SubmitData {
  name: string;
  weight: number;
  reps_count: number;
  sets_count: number;
}*/

export default function TrackerCard({
  exerciseName,
  setExerciseListAction,
  setCounter,
  bodyPart,
}: {
  exerciseName: string;
  setExerciseListAction: React.Dispatch<React.SetStateAction<SubmitData[]>>;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  bodyPart: string;
}) {
  const [sets, setSets] = useState([
    {
      exerciseName: exerciseName,
      id: 1,
      weight: 0,
      reps: 0,
      locked: false,
      done: false,
    },
  ]);

  // const [exerciseList, setExerciseList] = useState<SubmitData[]>([]);

  /*  const [completed, setCompleted] = useState<Workout_history[]>([
    {
      user_id: user_id,
      workout_id: workout_id,
      date: new Date().toISOString().split('T')[0],
      duration: 0,
      exercise_list: exerciseList,
    },
  ]);*/

  const addSet = () => {
    const newSet = {
      exerciseName: exerciseName,
      id: sets.length + 1,
      weight: 0,
      reps: 0,
      locked: false,
      done: false,
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
    setSets((prevSets) =>
      prevSets.map((set) =>
        set.id === id ? { ...set, locked: !set.locked } : set
      )
    );
  };

  const completeExercise = (exerciseName: string) => {
    setCounter((prev: number): number => {
      return prev + 1;
    });
    let totalWeight: number = 0;
    let totalReps: number = 0;

    const updatedSets = sets.map((set) => {
      if (set.exerciseName === exerciseName) {
        totalWeight += set.weight;
        totalReps += set.reps;
        return { ...set, locked: true, done: true };
      }
      return set;
    });

    setSets(updatedSets);

    const exerciseData = {
      name: exerciseName,
      weight: totalWeight,
      reps_count: totalReps,
      sets_count: sets.length,
    };

    setExerciseListAction((prevExerciseList) => [
      ...prevExerciseList,
      exerciseData,
    ]);

    /*    
    console.log(exerciseData, 'exerciseData');
    console.log(exerciseList, 'exerciseList');

    setExerciseListAction((prev) => ({ ...prev, exerciseData }));

    
    setExerciseList((prev) => [...prev, exerciseData]);

    // Append to completed immutably
    setCompleted((prev) =>
      prev.map((workout) => ({
        ...workout,
        exercise_list: [...workout.exercise_list, exerciseData],
      }))
    );
    */
  };
  return (
    <section className='w-[360px] rounded-xl bg-fitGrey p-[10px]'>
      <div className='rounded-xl bg-white p-[10px]'>
        <div className='rounded-xl bg-fitViolet p-[5px]'>
          <div className='flex'>
            <Image
              src={`/${bodyPart}.svg`}
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
                className={`mx-1 rounded-xl p-1 px-3 font-bold text-fitBlue`}
              >
                {set.id}
              </div>
              <div className='mr-1'>
                <input
                  type='number'
                  id={`${exerciseName}_${set.id}_weight`}
                  name={`${exerciseName}_${set.id}_weight`}
                  placeholder='weight'
                  value={set.weight || ''}
                  min='0'
                  className={`w-[100%] rounded-xl border-2 border-solid bg-fitGrey p-1 ${
                    set.locked || set.done
                      ? 'cursor-not-allowed bg-gray-300'
                      : ''
                  }`}
                  disabled={set.locked || set.done}
                  onChange={(e) => {
                    const updatedSets = sets.map((s) =>
                      s.id === set.id
                        ? { ...s, weight: parseInt(e.target.value) }
                        : s
                    );
                    setSets(updatedSets);
                  }}
                />
              </div>
              <div className='mx-1'>
                <input
                  id={`${exerciseName}_${set.id}_reps`}
                  name={`${exerciseName}_${set.id}_reps`}
                  placeholder='Reps'
                  type='number'
                  value={set.reps || ''}
                  min='0'
                  className={`w-[100%] rounded-xl border-2 border-solid bg-fitGrey p-1 ${
                    set.locked || set.done
                      ? 'cursor-not-allowed bg-gray-300'
                      : ''
                  }`}
                  disabled={set.locked || set.done}
                  onChange={(e) => {
                    const updatedSets = sets.map((s) =>
                      s.id === set.id
                        ? { ...s, reps: parseInt(e.target.value) }
                        : s
                    );
                    setSets(updatedSets);
                  }}
                />
              </div>
              <div className='flex w-[27%] items-center justify-between px-1'>
                <button onClick={() => lock(set.id)}>
                  {set.locked || set.done ? (
                    <LockClosedIcon className={'w-5 text-fitBlue'} />
                  ) : (
                    <LockOpenIcon className={'w-5 text-fitBlue'} />
                  )}
                </button>
                {index > 0 && !set.done && (
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
        <div className='flex items-center justify-between px-2 pt-2'>
          <button
            disabled={sets[0].done}
            onClick={addSet}
            className={`rounded-xl bg-fitGreen px-12 py-1 font-bold text-fitBlue ${
              sets[0].done
                ? 'cursor-auto bg-fitGrey text-gray-400'
                : 'cursor-pointer hover:bg-fitBlue hover:text-fitGreen'
            }`}
          >
            Add set
          </button>
          <button
            disabled={sets[0].done}
            onClick={() => {
              completeExercise(exerciseName);
            }}
            className={`rounded-xl bg-fitGreen px-12 py-1 font-bold text-fitBlue ${
              sets[0].done
                ? 'cursor-auto bg-fitGrey text-gray-400'
                : 'cursor-pointer hover:bg-fitBlue hover:text-fitGreen'
            }`}
          >
            Done
          </button>
        </div>
      </div>
    </section>
  );
}
