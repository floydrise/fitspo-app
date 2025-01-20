import Link from 'next/link';
import React from 'react';


const AboutPage = () => {
  return (
    <div className='min-h-screen bg-fitViolet text-white'>
      <div className='container mx-auto space-y-8 px-6 py-12'>
        {/* Title section with Logo */}
        <div className='flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
          <h1 className='text-center text-4xl font-bold text-fitBlue md:text-left'>
            About the FitSpo Project
          </h1>
        </div>
   <p className="text-2xl font-bold text-white bg-fitBlue inline-block px-4 py-2 rounded-lg shadow-lg">
        {/* Description section and why and how we came up with the idea */}

        {/* Mission section */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold text-fitGreen underline'>
            Our Mission
          </h2>
          <p>TBD</p>
        </div>

        {/* Offer section */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold text-fitBlue underline'>
            What We Offer
          </h2>
          <p>TBD</p>
        </div>

        {/* Signup section */}
        <div className='text-center'>
          <p className='inline-block rounded-lg bg-fitBlue px-4 py-2 text-2xl font-bold text-white shadow-lg'>
            Ready to take the next step in your fitness journey?
          </p>
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
