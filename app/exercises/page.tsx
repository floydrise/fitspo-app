'use client';
import ExerciseCard from '../ui/ExerciseCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Form from 'next/form';
import { useState, useEffect } from 'react';

interface Exercise {
  name: string;
  exerciseId: string;
}

const Page = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const filterNames: string[] = [
    'All',
    'Neck',
    'Shoulders',
    'Upper Arms',
    'Lower Arms',
    'Chest',
    'Back',
    'Waist',
    'Upper Legs',
    'Lower Legs',
    'Cardio',
  ];

  useEffect(() => {
    setIsLoading(true);
    async function fetchExercises() {
      const res = await fetch(
        'https://exercisedb-api.vercel.app/api/v1/exercises'
      );
      const {
        data: { exercises },
      } = await res.json();
      setExercises(exercises);
      setIsLoading(false);
    }
    fetchExercises();
  }, []);

  return (
    <section className='container mx-auto px-[15px] pb-[50px] pt-[26px]'>
      <div className='flex justify-center'>
        <ul className='flex overflow-y-auto'>
          {filterNames.map((name) => (
            <li key={name} className='mr-[10px] last:mr-0'>
              <Button variant='filterBtn' size='fit'>
                <Link href={'/exercises'}>{name}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className='mt-[30px] flex justify-center'>
        <Form action='/search'>
          <input
            className='mr-[16px] h-[40px] w-[200px] rounded-[15px] border border-[#89A1A9] px-[15px] py-[12px] text-sm text-fitBlue focus:outline-none sm:w-[300px] md:w-[400px] lg:w-[560px]'
            name='query'
          />
          <Button type='submit' variant='searchBtn' size='searchSize'>
            Search
          </Button>
        </Form>
      </div>
      <h2 className='text-[32px] font-semibold text-fitBlue'>Exercises</h2>
      <div>
        <ul className='justify-content-between mt-[26px] grid justify-items-center gap-8 md:grid-cols-2 xl:grid-cols-3'>
          {isLoading
            ? 'Loading...'
            : exercises.map(({ name, exerciseId }) => (
                <li key={exerciseId}>
                  <ExerciseCard exTitle={name} />
                </li>
              ))}
        </ul>
      </div>
    </section>
  );
};

export default Page;
