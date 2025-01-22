import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
  return (
    <div className='min-h-screen bg-fitViolet text-black'>
      <div className='container mx-auto space-y-8 px-6 py-12'>
        <div className='flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
          <h1 className='text-center text-4xl font-bold text-fitGreen md:text-left'>
            About the FitSpo Project
          </h1>
        </div>
        <div className='space-y-2 rounded-lg bg-fitGrey p-4'>
          <h2 className='rounded-lg bg-fitGreen pl-1 text-2xl font-semibold text-fitViolet'>
            Our Mission
          </h2>
          <p>
            FitSpo was born from one simple mission: to make fitness accessible,
            fun, and trackable for everyone. Our team noticed there weren’t many
            user-friendly workout trackers, so we decided to build our own
            solution.
          </p>
          <p>
            This project was created as a collaboration in our Northcoders
            Bootcamp, bringing together passionate developers to turn an idea
            into a reality.
          </p>
        </div>
        <div className='space-y-2 rounded-lg bg-fitGrey p-4'>
          <h2 className='rounded-lg bg-fitGreen pl-1 text-2xl font-semibold text-fitViolet'>
            Powered by Exercisedb API{' '}
          </h2>
          <p className='mb-4'>
            One of the ways we ensure FitSpo stays comprehensive and accurate is
            by integrating{' '}
            <a
              href='https://github.com/cyberboyanmol/exercisedb-api'
              className='text-fitBlue underline'
            >
              Exercisedb API
            </a>{' '}
            by Anmol Gangwar. This resource provides a large library of
            exercises, giving you access to data that helps you find and log
            workouts tailored to your goals.
          </p>
        </div>
        <div className='space-y-2 rounded-lg bg-fitGrey p-4'>
          <h2 className='rounded-lg bg-fitGreen pl-1 text-2xl font-semibold text-fitViolet'>
            What We Offer
          </h2>
          <ul className='list-inside list-disc space-y-2'>
            <li>
              <strong>Workout Logging & Tracking:</strong> Log daily workouts,
              sets, and reps with ease. Watch your progress over time using
              intuitive charts.
            </li>
            <li>
              <strong>Exercise Library & Recommendations:</strong> Explore a
              variety of exercises from the Exercisedb API and get suggestions
              based on your goals.
            </li>
            <li>
              <strong>Personalized Dashboard:</strong> Set goals, monitor stats,
              and celebrate milestones with a snapshot of your progress.
            </li>
          </ul>
        </div>
        <div className='text-center'>
          <Link
            href='/signup'
            className='mx-auto mt-4 block transform rounded-lg bg-fitGreen px-6 py-3 font-bold text-fitBlue shadow-md transition hover:scale-105 hover:bg-fitRed'
          >
            Join Us Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
