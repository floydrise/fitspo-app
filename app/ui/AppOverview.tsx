'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const AppOverview = () => {
  const router = useRouter();
  return (
    <section>
      <div className='flex justify-center bg-fitViolet px-[15px] lg:max-h-[510px]'>
        <div className='container flex flex-col-reverse items-center justify-between py-[50px] lg:flex-row'>
          <div className='overview-info'>
            <h1 className='max-w-[600px] text-[36px] font-bold leading-none text-white min-[320px]:max-[1023px]:max-w-[400px] min-[320px]:max-[1023px]:text-center md:max-sm:text-[48px] lg:text-[68px] lg:font-normal'>
              PLAN YOUR DAILY WORKOUT
            </h1>
            <p className='mt-[7px] max-w-[630px] text-justify text-[24px] text-white min-[320px]:max-[1023px]:max-w-[400px] min-[320px]:max-[1023px]:text-justify min-[320px]:max-[1023px]:text-[18px]'>
              Stay on track with easy-to-follow workout plans tailored to your
              goals. Whether you’re focusing on strength, endurance, or overall
              fitness, FitSpo simplifies your journey to consistent progress.
            </p>
            <div className='mt-[20px] max-[370px]:flex-col min-[320px]:max-[1023px]:flex min-[320px]:max-[1023px]:justify-center'>
              <button
                onClick={() => router.push('/login')}
                className='rounded-[15px] bg-fitGreen px-[33px] py-[20px] text-[18px] font-bold transition ease-in-out hover:bg-fitBlue hover:text-fitGreen'
              >
                Try for free
              </button>
              <button
                onClick={() => router.push('/about')}
                className='ml-[10px] rounded-[15px] border border-fitGreen px-[33px] py-[20px] text-[18px] font-bold text-fitGreen transition ease-in-out hover:border-fitBlue hover:bg-fitBlue hover:text-fitGreen max-[370px]:ml-0 max-[370px]:mt-[15px]'
              >
                Read more
              </button>
            </div>
          </div>
          <div className='overview-img flex justify-center min-[320px]:max-[1023px]:mb-[30px] lg:ml-[25px]'>
            <Image
              className='w-[450px] max-md:w-[300px]'
              src='/workout.svg'
              width={450}
              height={416}
              alt='Body part filter'
            />
          </div>
        </div>
      </div>
      <div className='flex items-center justify-around px-[15px] py-[55px] min-[320px]:max-[1023px]:flex-col min-[320px]:max-[1023px]:items-center'>
        <div className='max-w-[574px]'>
          <Image
            src='/form.png'
            width={574}
            height={296}
            alt='Workout form example'
          />
        </div>
        <div className='min-[320px]:max-[1023px]:mt-[30px]'>
          <h2 className='mb-[5px] text-[36px] font-semibold text-fitBlue min-[320px]:max-[768px]:text-[30px]'>
            Intuitive tracking
          </h2>
          <ul>
            <li className='mb-[5px] flex items-center'>
              <Image
                className='min-[320px]:max-[768px]:max-w-[40px]'
                src='/tick.svg'
                width={53}
                height={45}
                alt='Tick icon'
              />
              <p className='ml-[12px] text-[36px] text-fitBlue min-[320px]:max-[768px]:text-[30px]'>
                Sign up
              </p>
            </li>
            <li className='mb-[5px] flex items-center'>
              <Image
                className='min-[320px]:max-[768px]:max-w-[40px]'
                src='/tick.svg'
                width={53}
                height={45}
                alt='Tick icon'
              />
              <p className='ml-[12px] text-[36px] text-fitBlue min-[320px]:max-[768px]:text-[30px]'>
                Log exercises
              </p>
            </li>
            <li className='flex items-center'>
              <Image
                className='min-[320px]:max-[768px]:max-w-[40px]'
                src='/tick.svg'
                width={53}
                height={45}
                alt='Tick icon'
              />
              <p className='ml-[12px] text-[36px] text-fitBlue min-[320px]:max-[768px]:text-[30px]'>
                Plan workouts
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className='max-w-full border-b border-dashed border-fitBlue'></div>
      <div className='flex items-center justify-around px-[15px] py-[55px] min-[320px]:max-[1023px]:flex-col-reverse min-[320px]:max-[1023px]:items-center'>
        <div className='min-[320px]:max-[1023px]:mt-[30px]'>
          <h2 className='mb-[5px] text-[36px] font-semibold text-fitBlue min-[320px]:max-[768px]:text-[30px]'>
            Measure progress
          </h2>
          <ul>
            <li className='mb-[5px] flex items-center leading-none'>
              <Image
                className='min-[320px]:max-[768px]:max-w-[40px]'
                src='/tick.svg'
                width={53}
                height={45}
                alt='Tick icon'
              />
              <p className='ml-[12px] text-[36px] text-fitBlue min-[320px]:max-[768px]:text-[30px]'>
                Charts to show your progress
              </p>
            </li>
            <li className='mb-[5px] flex items-center'>
              <Image
                className='min-[320px]:max-[768px]:max-w-[40px]'
                src='/tick.svg'
                width={53}
                height={45}
                alt='Tick icon'
              />
              <p className='ml-[12px] text-[36px] text-fitBlue min-[320px]:max-[768px]:text-[30px]'>
                Personal records
              </p>
            </li>
            <li className='flex items-center'>
              <Image
                className='min-[320px]:max-[768px]:max-w-[40px]'
                src='/tick.svg'
                width={53}
                height={45}
                alt='Tick icon'
              />
              <p className='ml-[12px] text-[36px] text-fitBlue min-[320px]:max-[768px]:text-[30px]'>
                Award points
              </p>
            </li>
            <li className='flex items-center'>
              <Image
                className='min-[320px]:max-[768px]:max-w-[40px]'
                src='/tick.svg'
                width={53}
                height={45}
                alt='Tick icon'
              />
              <p className='ml-[12px] text-[36px] text-fitBlue min-[320px]:max-[768px]:text-[30px]'>
                Success medals
              </p>
            </li>
          </ul>
        </div>
        <div className=''>
          <Image
            className='min-[320px]:max-[768px]:max-w-[40px]'
            src='/progress.png'
            width={474}
            height={316}
            alt='Exercise progress'
          />
        </div>
      </div>
    </section>
  );
};

export default AppOverview;
