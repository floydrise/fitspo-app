import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='pb-12 pt-4 text-center text-gray-500'>
      {/* Footer Content */}
      <div className='container mx-auto flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0'>
        {/* Left Side, Home, About, and Contact */}
        <nav className='flex justify-between'>
          <Link
            href='/'
            className='rounded-lg px-3 py-1 hover:bg-gray-200 hover:text-gray-800 sm:mr-3'
          >
            Home
          </Link>
          <Link
            href='/about'
            className='rounded-lg px-3 py-1 hover:bg-gray-200 hover:text-gray-800 sm:mr-3'
          >
            About
          </Link>
          <Link
            href='/contact'
            className='rounded-lg px-3 py-1 hover:bg-gray-200 hover:text-gray-800 sm:mr-3'
          >
            Contact
          </Link>
          <Link
            href='https://github.com/floydrise/fitspo-app'
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-lg px-3 py-1 hover:bg-gray-200 hover:text-gray-800'
          >
            Github
          </Link>
        </nav>

        {/* Center FitSpo Logo */}
        <div>
          <Link href={'/'}>
            <Image
              src='/LogoMonochrome.svg'
              width={1440}
              height={531}
              alt='Monochrome FitSpo Logo'
              className='mx-auto mt-4 h-10 w-auto'
            />
          </Link>
        </div>

        {/* Right Side, Copyright Info */}
        <div className='text-sm'>
          <p>Copyright © 2025 FitSpo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
