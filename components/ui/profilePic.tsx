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

const ProfilePic = ({ avatarImg, title }: { avatarImg: string | undefined, title: string | undefined }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={'flex justify-center items-center gap-2 p-1 pl-1.5 rounded-3xl bg-orange-300'}
      >
        <p className={"text-gray-800"}><span className={"font-bold text-gray-800"}>Hello,</span> {title}</p>
        <Avatar>
          <AvatarImage src={avatarImg} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className={'text-center'}>
          My Account
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button variant={'ghost'} asChild>
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
            <Button variant={'ghost'}>
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

/*
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
import Link from 'next/link';

const ProfilePic = ({ avatarImg }: { avatarImg: string | undefined }) => {

  const handleLogout = async () => {
    'use server';
    await signOut({ redirectTo: '/', redirect: true });
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={avatarImg} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className={'text-center'}>
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href={'/dashboard'} passHref>
              <UserCircleIcon /> Dashboard
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={handleLogout}
            style={{ cursor: 'pointer' }}
          >
            <ArrowRightEndOnRectangleIcon />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfilePic;
*/
