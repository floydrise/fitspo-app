import React from 'react';
import AboutCard from '../ui/AboutCard';

export default function Contact() {
  const ourTeam: Array<{
    id: number;
    name: string;
    gitHub: string;
    mail: string;
    linkedin: string;
  }> = [
    {
      id: 1,
      name: 'Ayoub Chemmach',
      gitHub: 'ayoub1400',
      mail: 'ayoubc04@hotmail.com',
      linkedin: '',
    },
    {
      id: 2,
      name: 'Eugeniu Rascu',
      gitHub: 'erascu',
      mail: 'e.rashku@gmail.com',
      linkedin: 'https://www.linkedin.com/in/erascu/',
    },
    {
      id: 3,
      name: 'Stefan Petrov',
      gitHub: 'floydrise',
      mail: 'floydrise@gmail.com',
      linkedin: 'https://www.linkedin.com/in/stefan-petrov-6404401bb/',
    },
    {
      id: 4,
      name: 'Tyler Mulligan',
      gitHub: 'tylerkade',
      mail: 'tykdm@outlook.com',
      linkedin: 'https://www.linkedin.com/in/tyler-kd-mulligan/',
    },
    {
      id: 5,
      name: 'Yahya Islam',
      gitHub: 'yahya436',
      mail: 'yahyaislam436@gmail.com',
      linkedin: 'https://www.linkedin.com/in/yahya-islam-486560333/',
    },
    {
      id: 6,
      name: 'Yousuf Mohammed',
      gitHub: 'Youxuf',
      mail: 'yousuf437@gmail.com',
      linkedin: '',
    },
  ];

  return (
    <div className='container mx-auto px-[15px] pb-[50px] pt-[26px]'>
      <h1 className='text-[32px] font-semibold text-fitBlue'>Contact Us</h1>
      <ul className='justify-content-between mt-[26px] grid justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {ourTeam.map((info) => (
          <li key={info.id}>
            <AboutCard info={info} />
          </li>
        ))}
      </ul>
    </div>
  );
}
