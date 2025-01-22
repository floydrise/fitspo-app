import Link from 'next/link';
import Image from 'next/image';

interface TeamMember {
  id: number;
  name: string;
  gitHub: string;
  mail: string;
  linkedin: string;
}

const AboutCard = ({ info }: { info: TeamMember }) => {
  return (
    <section className='flex min-h-[154px] w-[260px] flex-col items-center rounded-[15px] bg-white'>
      <div className='h-[20px] w-full rounded-t-[15px] bg-fitViolet'></div>
      <div className='px-[30px] py-[24px]'>
        <h2 className='text-center text-xl font-bold text-fitBlue'>
          {info.name}
        </h2>
        <p className='text-center text-base text-fitBlue'>
          Junior Software Developer
        </p>
      </div>
      <div className='mx-[15px] w-[120px] pb-[22px]'>
        <div className='flex justify-between'>
          <Link
            className='transition duration-150 ease-in-out hover:opacity-85'
            href={`mailto:${info.mail}`}
          >
            <Image src='/mail.svg' width={20} height={20} alt='Mail to' />
          </Link>
          {info.linkedin.length > 0 ? (
            <Link
              className='transition duration-150 ease-in-out hover:opacity-85'
              href={`${info.linkedin}`}
              target='_blank'
            >
              <Image
                src='/linkedin.svg'
                width={20}
                height={20}
                alt='LinkedIn'
              />
            </Link>
          ) : (
            <Image
              className='opacity-50'
              src='/inNoActive.svg'
              width={20}
              height={20}
              alt='LinkedIn'
            />
          )}
          <Link
            className='transition duration-150 ease-in-out hover:opacity-85'
            href={`https://github.com/${info.gitHub}`}
            target='_blank'
          >
            <Image src='/github.svg' width={20} height={20} alt='GitHub' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
