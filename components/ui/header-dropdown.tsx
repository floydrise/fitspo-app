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

export function HeaderDropdown() {
  const [position, setPosition] = React.useState('home');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>
          <Bars3Icon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <Link href={'/'}>
            <DropdownMenuRadioItem value='home'>Home</DropdownMenuRadioItem>
          </Link>
          <Link href={'/exercises'}>
            <DropdownMenuRadioItem value='exercises'>
              Exercises
            </DropdownMenuRadioItem>
          </Link>
          <Link href={'/workouts'}>
            <DropdownMenuRadioItem value='workouts'>
              Workouts
            </DropdownMenuRadioItem>
          </Link>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
