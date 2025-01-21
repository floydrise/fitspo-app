import React from 'react';

export default function Contact() {
  const team = [
    'Ayoub Chemmach',
    'Eugeniu Rascu',
    'Stefan Petrov',
    'Tyler Mulligan',
    'Yahya Islam',
    'Yousuf',
  ];
  const githubUsername = [
    'ayoub1400',
    'erascu',
    'floydrise',
    'tylerkade',
    'yahya436',
    'Youxuf',
  ];

  return (
    <div className='mx-auto: container mt-2 rounded-lg bg-fitViolet p-6 text-white'>
      <h1 className='flex justify-center text-2xl font-bold'>Contact Us</h1>
      <h2 className='flex justify-center'>Our Team</h2>
      <div className='m-[1em] flex flex-row flex-wrap justify-center gap-[1em]'>
        {team.map((name, index) => (
          <a
            key={index}
            href={`https://github.com/${githubUsername[index]}`}
            target='_blank'
            rel='noopener noreferrer'
            className='shadow:lg mx-auto block w-[150px] max-w-sm rounded-lg border border-fitGreen bg-fitGreen p-4 text-fitBlue transition-shadow hover:border-fitBlue hover:bg-fitBlue hover:text-fitGreen hover:shadow-2xl'
          >
            <div className='text-center'>
              <h2 className='mb-2 text-xl font-bold'>{name}</h2>
              <p className='text-gray-600'></p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
