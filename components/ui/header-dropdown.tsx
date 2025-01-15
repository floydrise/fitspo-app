'use client';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/16/solid';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function HeaderDropdown() {
  const pathname = usePathname();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>
          Menu <Bars3Icon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuRadioGroup value={pathname} >
          <Link href={'/'}>
            <DropdownMenuRadioItem value='/'>Home</DropdownMenuRadioItem>
          </Link>
          <Link href={'/exercises'}>
            <DropdownMenuRadioItem value='/exercises'>
              Exercises
            </DropdownMenuRadioItem>
          </Link>
          <Link href={'/workouts'}>
            <DropdownMenuRadioItem value='/workouts'>
              Workouts
            </DropdownMenuRadioItem>
          </Link>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
