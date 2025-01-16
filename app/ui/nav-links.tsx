'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Exercises', href: '/exercises' },
  { name: 'Workouts', href: '/workouts' },
];

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={
              pathname === link.href ? 'text-purple-500 p-2 rounded-lg bg-purple-100' : 'text-black  p-2 rounded-lg hover:bg-gray-200'
            }
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
};
export default NavLinks;
