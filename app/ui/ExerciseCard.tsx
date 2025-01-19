'use client';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { firstLetterToUpper } from '@/lib/utils';

const ExerciseCard = ({
  exTitle,
  exerciseId,
}: {
  exTitle: string;
  exerciseId: string;
}) => {
  const {replace} = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();


  const handleClick = (exerciseId: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('exercise_id', exerciseId);
    params.set('modal', 'true');
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div onClick={() => {handleClick(exerciseId)}} className='radius-[20px] flex h-[120px] w-[300px] cursor-pointer items-center rounded-[20px] bg-fitViolet px-3.5 duration-100 hover:bg-[#7972D9] active:bg-[#7F79E6] sm:w-[360px]'>
      <Image
        src={`/upper_arms.svg`}
        width={68}
        height={68}
        alt='Body part filter'
      />
      <h3 className='ml-3.5 max-w-[240px] select-none text-2xl text-white sm:text-[26px]'>
        {firstLetterToUpper(exTitle)}
      </h3>
    </div>
  );
};

export default ExerciseCard;
