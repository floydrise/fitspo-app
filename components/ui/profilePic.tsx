import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  ArrowRightEndOnRectangleIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ProfilePic = ({
  avatarImg,
  title,
}: {
  avatarImg: string | undefined;
  title: string | undefined;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={
          'relative flex items-center justify-center gap-2 rounded-3xl bg-none p-1 pl-0 min-[510px]:bg-orange-300 min-[510px]:pl-4'
        }
      >
        <p className={'hidden pr-1 text-gray-800 min-[510px]:block'}>
          <span className={'font-bold text-gray-800'}>Hello,</span> {title}
        </p>
        <Avatar>
          <AvatarImage src={avatarImg} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='absolute right-[-20px] min-[510px]:right-[-70px]'>
        <DropdownMenuLabel className={'text-md text-center'}>
          My Account
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button className='text-lg' variant={'ghost'} asChild>
            <Link href={'/dashboard'}>
              <UserCircleIcon /> Dashboard
            </Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <form
            action={async () => {
              'use server';
              await signOut({ redirectTo: '/home', redirect: true });
            }}
          >
            <Button className='text-lg' variant={'ghost'}>
              <ArrowRightEndOnRectangleIcon />
              Log out
            </Button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfilePic;
