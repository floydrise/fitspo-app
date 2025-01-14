import Image from 'next/image';

const ExerciseCard = ({
  iconName = 'upper_arms',
  exTitle = 'Biceps Narrow Pull-ups',
}) => {
  const firstLetterToUpper = (str: string): string => {
    return str
      .split(' ')
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className='radius-[20px] flex h-[120px] w-[300px] cursor-pointer items-center rounded-[20px] bg-fitViolet px-3.5 duration-100 hover:bg-[#7972D9] active:bg-[#7F79E6] sm:w-[360px]'>
      <Image
        src={`/${iconName}.svg`}
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
