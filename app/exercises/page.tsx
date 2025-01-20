/*
'use client';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';
import ExerciseCard from '../ui/ExerciseCard';
// import ExerciseInfo from '../ui/ExerciseInfo';
import Form from 'next/form';
import { useDebouncedCallback } from 'use-debounce';
// import Link from 'next/link';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

import { useState, useEffect } from 'react';

interface Exercise {
  name: string;
  exerciseId: string;
}

const Page = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [bodyFilter, setBodyFilter] = useState<string>('all');

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // const filter = searchParams.get('filterBy');
  // console.log(filter);
  // const pageNumber: number = parseInt(searchParams.get('page') || '0') * 12;

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

  const handleSearch = useDebouncedCallback((event: string) => {
    const params = new URLSearchParams(searchParams);
    if (event) {
      params.set('search', event);
    } else {
      params.delete('search');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  useEffect(() => {
    setIsLoading(true);
    async function fetchExercises() {
      const res = await fetch(
        `https://exercisedb-api.vercel.app/api/v1/${bodyFilter === 'all' ? '' : 'bodyparts/' + bodyFilter + '/'}exercises?offset=0&limit=12`,
        {
          headers: {
            'X-Api-Key': 'edb_cX9xwiLzwQK7N7fec-JY2-xvEHssimU2V4N4kVxFbKlS7',
          }
        }
      );
      const { data } = await res.json();
      setExercises(data.exercises);
      setIsLoading(false);
    }
    fetchExercises();
  }, [bodyFilter]);

  return (
    <section className='container mx-auto px-[15px] pb-[50px] pt-[26px]'>
      <div className='flex justify-center'>
        <ul className='flex overflow-y-auto'>
          {filterNames.map((name) => (
            <li key={name} className='mr-[10px] last:mr-0'>
              <Button
                variant='filterBtn'
                size='fit'
                onClick={() => setBodyFilter(name.toLowerCase())}
              >
                {name}
                {/!* <Link href={'/exercises'}>{name}</Link> *!/}
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className='mt-[30px] flex justify-center'>
        <Form action='/exercises'>
          <input
            className='h-[40px] w-[200px] rounded-[15px] border border-[#89A1A9] px-[15px] py-[12px] text-sm text-fitBlue focus:outline-none sm:w-[300px] md:w-[400px] lg:w-[560px]'
            name='query'
            placeholder='search exercises'
            defaultValue={searchParams.get('search')?.toString()}
            onChange={(e) => handleSearch(e.target.value)}
          />
          {/!* <Button type='submit' variant='searchBtn' size='searchSize'>
            Search
          </Button> *!/}
        </Form>
      </div>
      <h2 className='text-[32px] font-semibold text-fitBlue'>Exercises</h2>
      {/!* <ExerciseInfo /> *!/}
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
      <Pagination className='mt-[30px]'>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href='#' />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#'>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href='#' />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};

export default Page;
*/

import React from 'react';
import ExerciseCard from '@/app/ui/ExerciseCard';
import Search from '@/app/ui/Search';
import Pages from '@/app/ui/Pages';
import ExerciseInfo from '@/app/ui/ExerciseInfo';

interface Exercise {
  name: string;
  exerciseId: string;
}

const Page = async (props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
    modal?: string;
    exercise_id?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query;
  const currentPage =
    Number(searchParams?.page) === 1
      ? 0
      : (Number(searchParams?.page) - 1) * 10 || 0;
  const showModal = searchParams?.modal === 'true';
  const exercise_id = searchParams?.exercise_id;

  const req = query
    ? await fetch(
        `https://exercisedb-api.vercel.app/api/v1/exercises?search=${query}&offset=${currentPage}&limit=10`,
        {
          headers: {
            'X-Api-Key': `${process.env.API_KEY}`,
          },
        }
      )
    : await fetch(
        `https://exercisedb-api.vercel.app/api/v1/exercises?offset=${currentPage}&limit=10`,
        {
          headers: {
            'X-Api-Key': `${process.env.API_KEY}`,
          },
        }
      );

  const {
    data: { exercises, totalPages },
  } = await req.json();

  const exercisesList: Exercise[] = await exercises;

  // ${showModal && 'fixed'}

  return (
    <>
      {showModal ? (
        <>
          <section className='container mx-auto px-[15px] pb-[50px] pt-[26px]'>
            <div className='flex justify-center'>
              <ExerciseInfo exercise_id={exercise_id} />
            </div>
          </section>
        </>
      ) : (
        <section className='container mx-auto px-[15px] pb-[50px] pt-[26px]'>
          <h2 className='text-[32px] font-semibold text-fitBlue'>Exercises</h2>
          <Search placeholder={'Search for an exercise'} />
          {/* <ExerciseInfo /> */}
          <ul className='justify-content-between mt-[26px] grid justify-items-center gap-8 md:grid-cols-2 xl:grid-cols-3'>
            {exercisesList.length > 0 ? (
              exercisesList.map(({ name, exerciseId }) => (
                <li key={exerciseId}>
                  <ExerciseCard exTitle={name} exerciseId={exerciseId} />
                </li>
              ))
            ) : (
              <p className={'text-3xl font-bold text-red-500'}>
                No exercises match this query
              </p>
            )}
          </ul>
          <div className='mt-10'>
            {exercisesList.length > 0 ? (
              <Pages totalPages={totalPages} />
            ) : null}
          </div>
        </section>
      )}
    </>
  );
};

export default Page;
