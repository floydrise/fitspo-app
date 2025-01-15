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
    <div className='p-6 container mx-auto'>
      <h1
        className='text-2xl font-bold'
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        Contact Us
      </h1>
      <h2 style={{ display: 'flex', justifyContent: 'center' }}>Our Team</h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1em',
          margin: '1em',
        }}
      >
        {team.map((name, index) => (
          <a
            key={index}
            href={`https://github.com/${githubUsername[index]}`}
            target='_blank'
            rel='noopener noreferrer'
            style={{ width: '150px' }}
            className='mx-auto block max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow-lg transition-shadow hover:shadow-xl'
          >
            <div className='text-center'>
              <h2 className='mb-2 text-xl font-bold text-gray-800'>{name}</h2>
              <p className='text-gray-600'></p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
