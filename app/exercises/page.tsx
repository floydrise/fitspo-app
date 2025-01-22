import React from 'react';
import ExerciseCard from '@/app/ui/ExerciseCard';
import Search from '@/app/ui/Search';
import ExerciseInfo from '@/app/ui/ExerciseInfo';
import { PaginationWithLinks } from '@/components/ui/pagination-with-links';

interface Exercise {
  name: string;
  exerciseId: string;
  bodyParts: string;
}

const Page = async (props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
    pageSize?: string;
    modal?: string;
    exercise_id?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query;
  const currentPage = Number((searchParams?.page as string) || '1');
  const cardsPerPage = Number((searchParams?.pageSize as string) || '12');
  const showModal = searchParams?.modal === 'true';
  const exercise_id = searchParams?.exercise_id;

  const req = query
    ? await fetch(
        `https://exercisedb-api.vercel.app/api/v1/exercises?search=${query}&offset=${currentPage === 1 ? '0' : currentPage * cardsPerPage}&limit=${cardsPerPage}`,
        {
          headers: {
            'X-Api-Key': `${process.env.API_KEY}`,
          },
        }
      )
    : await fetch(
        `https://exercisedb-api.vercel.app/api/v1/exercises?offset=${currentPage === 1 ? '0' : currentPage * cardsPerPage}&limit=${cardsPerPage}`,
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
          <h1 className='text-[32px] font-semibold text-fitBlue'>Exercises</h1>
          <Search placeholder={'Search for an exercise'} />
          {/* <ExerciseInfo /> */}
          <ul className='justify-content-between mt-[26px] grid justify-items-center gap-8 md:grid-cols-2 xl:grid-cols-3'>
            {exercisesList.length > 0 ? (
              exercisesList.map(({ name, exerciseId, bodyParts }) => (
                <li key={exerciseId}>
                  <ExerciseCard
                    exTitle={name}
                    exerciseId={exerciseId}
                    bodyParts={bodyParts}
                  />
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
              <PaginationWithLinks
                page={currentPage}
                pageSize={cardsPerPage}
                totalCount={(totalPages - 1) * cardsPerPage}
              />
            ) : null}
          </div>
        </section>
      )}
    </>
  );
};

export default Page;
