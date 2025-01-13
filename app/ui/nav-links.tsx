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
              pathname === link.href ? 'text-purple-400 border-b-2 border-purple-400' : 'text-black hover:border-b-2 border-slate-400'
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
