'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const links = [
  { name: 'Home', href: '/home' },
  { name: 'Exercises', href: '/exercises' },
  { name: 'Workouts', href: '/workouts' },
];

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link key={link.name} href={link.href}>
            <Button
              className='text-[16px]'
              variant={pathname === link.href ? 'purple' : 'gray'}
            >
              {link.name}
            </Button>
          </Link>
        );
      })}
    </>
  );
};
export default NavLinks;
