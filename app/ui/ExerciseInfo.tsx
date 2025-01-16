import Image from 'next/image';

const ExerciseInfo = () => {
  return (
    <div className='visible fixed inset-0 flex items-center justify-center bg-fitBlue/90 p-[15px]'>
      <div className='min-h-[480px] max-w-[774px] rounded-[15px] bg-white px-[10px] pb-[30px] pt-[10px] shadow'>
        <div className='w-full'>
          <div className='mx-auto flex h-[82px] max-w-[754px] items-center justify-between rounded-[15px] bg-fitViolet py-[7px] pl-[14px] pr-[28px]'>
            <div className='flex items-center'>
              <Image
                src='/upper_arms.svg'
                width={68}
                height={68}
                alt='Upper arms icon'
              />
              <div className='ml-[17px]'>
                <h2 className='text-[18px] font-semibold leading-none text-white md:text-[28px] md:font-normal'>
                  Biceps Narrow Pull-ups
                </h2>
                <p className='text-light text-sm text-white'>
                  Achieve peak performance with regular practice.
                </p>
              </div>
            </div>
            <button className='transition-opacity ease-in-out hover:opacity-80'>
              <Image
                src='/closeBtn.svg'
                width={40}
                height={40}
                alt='Close button'
              />
            </button>
          </div>
          <div className='flex flex-col md:flex-row'>
            <div className='ml-[32px] mt-[17px] flex max-w-[387px] flex-col items-center md:items-start'>
              <div className='flex'>
                <h3 className='text-[16px] font-semibold text-fitViolet'>
                  Muscles:
                </h3>
                <p className='ml-[8px] text-[16px] text-fitBlue'>
                  Biceps, Forearms, Shoulders
                </p>
              </div>
              <h3 className='mt-[25px] text-[16px] font-semibold text-fitViolet'>
                Instructions:
              </h3>
              <p className='mt-[16px] text-[16px] text-fitBlue'>
                Step:1 Hang from a pull-up bar with your palms facing towards
                you and your hands shoulder-width apart.
              </p>
              <p className='mt-[16px] text-[16px] text-fitBlue'>
                Step:2 Engage your core and pull yourself up towards the bar,
                focusing on using your biceps to lift your body.
              </p>
              <p className='mt-[16px] text-[16px] text-fitBlue'>
                Step:3 Pause for a moment at the top, then slowly lower yourself
                back down to the starting position.
              </p>
              <p className='mt-[16px] text-[16px] text-fitBlue'>
                Step:4 Repeat for the desired number of repetitions.
              </p>
            </div>
            <div className='right flex min-w-[335px] flex-col items-center md:ml-[10px]'>
              <div className='mt-[17px] flex'>
                <h3 className='text-[16px] font-semibold text-fitViolet'>
                  Equipment:
                </h3>
                <p className='ml-[8px] text-[16px] text-fitBlue'>Body Weight</p>
              </div>
              <Image
                src='/pullups.png'
                width={360}
                height={360}
                alt='Exercise example'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseInfo;
