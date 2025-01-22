import Image from 'next/image';
import Link from 'next/link';
import { headers } from 'next/headers';
import { firstLetterToUpper } from '@/lib/utils';

interface ExerciseInfo {
  exerciseId: string;
  name: string;
  gifUrl: string;
  instructions: string[];
  targetMuscles: string[];
  bodyParts: string[];
  equipments: string[];
  secondaryMuscles: string[];
}

const ExerciseInfo = async ({
  exercise_id,
}: {
  exercise_id: string | undefined;
}) => {
  const req = await fetch(
    `https://exercisedb-api.vercel.app/api/v1/exercises/${exercise_id}`,
    {
      headers: {
        'X-Api-Key': `${process.env.API_KEY}`,
      },
    }
  );
  const { data } = await req.json();
  const exerciseInfo: ExerciseInfo = data;
  // console.log(exerciseInfo.gifUrl);

  const headerList = await headers();
  const fullUrl = headerList.get('referer') || '';
  const url = new URL(fullUrl);
  const urlParams = new URLSearchParams(url.search);
  const pageNumber = urlParams.get('page');

  // console.log(headerList.get('host'));

  return (
    <div className='min-h-[480px] max-w-[900px] rounded-[15px] bg-white px-[10px] pb-[30px] pt-[10px] shadow'>
      <div className='mx-auto flex h-[82px] max-w-[880px] items-center justify-between rounded-[15px] bg-fitViolet py-[7px] pl-[14px] pr-[28px]'>
        <div className='flex items-center'>
          <Image
            src={`/${exerciseInfo.bodyParts}.svg`}
            width={68}
            height={68}
            alt='Upper arms icon'
          />
          <div className='ml-[17px]'>
            <h2 className='text-[18px] font-semibold leading-none text-white md:text-[28px] md:font-normal'>
              {firstLetterToUpper(exerciseInfo.name)}
            </h2>
            <p className='text-light text-sm text-white'>
              Achieve peak performance with regular practice.
            </p>
          </div>
        </div>
        <Link href={`/exercises${pageNumber ? '?page=' + pageNumber : ''}`}>
          <button className='transition-opacity ease-in-out hover:opacity-80'>
            <Image
              src='/closeBtn.svg'
              width={40}
              height={40}
              alt='Close button'
            />
          </button>
        </Link>
      </div>
      <div className='mt-[15px] flex flex-col-reverse items-center md:flex-row lg:items-start'>
        <div className='flex max-w-[387px] flex-col md:ml-[32px] md:items-start'>
          <div className='flex'>
            <h3 className='text-[16px] font-semibold text-fitViolet'>
              Target muscles:
            </h3>
            {exerciseInfo.targetMuscles.map((muscles) => (
              <p key={muscles} className='ml-[8px] text-[16px] text-fitBlue'>
                {muscles}
              </p>
            ))}
          </div>
          <div className='flex'>
            <h3 className='text-[16px] font-semibold text-fitViolet'>
              Secondary muscles:
            </h3>
            {exerciseInfo.secondaryMuscles.map((muscles) => (
              <p key={muscles} className='ml-[8px] text-[16px] text-fitBlue'>
                {muscles}
              </p>
            ))}
          </div>
          <h3 className='mt-[25px] text-[16px] font-semibold text-fitViolet'>
            Instructions:
          </h3>
          {exerciseInfo.instructions.map((instructionStep, index) => (
            <p key={index} className='mt-[16px] text-[16px] text-fitBlue'>
              {instructionStep}
            </p>
          ))}
        </div>
        <div className='right flex min-w-[335px] flex-col items-center md:ml-[10px]'>
          <div className='flex'>
            <h3 className='text-[16px] font-semibold text-fitViolet'>
              Equipment:
            </h3>
            {exerciseInfo.equipments.map((equipment) => (
              <p key={equipment} className='ml-[8px] text-[16px] text-fitBlue'>
                {equipment}
              </p>
            ))}
          </div>
          <Image
            className='md:mt-[50px] md:min-w-[400px]'
            src={'/muscleAnatomy.png'}
            width={300}
            height={300}
            alt='Exercise example'
          />
        </div>
      </div>
    </div>
  );
};

export default ExerciseInfo;
