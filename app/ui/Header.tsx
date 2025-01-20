import Image from 'next/image';
import { Button } from '@/components/ui/button';
import NavLinks from '@/app/ui/nav-links';
import Link from 'next/link';
import { HeaderDropdown } from '@/components/ui/header-dropdown';
import { auth } from '@/auth';
import { fetchUserByUsername } from '@/app/lib/endpoints';
import ProfilePic from '@/components/ui/profilePic';

export default async function Header() {
  const session = await auth();
  const userData = session?.user
    ? await fetchUserByUsername(session?.user.username)
    : null;

  return (
    <>
      <header className='flex min-h-32 flex-wrap items-center justify-around gap-5 border-b border-solid border-slate-400'>
        <Link href={'/'} className={'flex'}>
          <Image
            src='/Logo.svg'
            width={600}
            height={531}
            alt='Logo of our website'
            className={'h-auto w-24 md:h-auto md:w-[150px]'}
          />
        </Link>
        <nav className='hidden items-center gap-5 md:flex md:justify-center'>
          <NavLinks />
        </nav>
        <nav className={'flex items-center md:hidden'}>
          <HeaderDropdown />
        </nav>
        <div className={'flex items-center gap-2'}>
          <div className={session?.user ? 'hidden' : 'flex gap-2'}>
            <Button variant={'green'} asChild={true}>
              <Link href={'/login'}>Log in</Link>
            </Button>
            <Button
              variant={"orange"}
              asChild={true}
              className={'hidden md:block'}
            >
              <Link href={'/signup'}>Sign up</Link>
            </Button>
          </div>
          <div className={session?.user ? 'flex items-center gap-2' : 'hidden'}>
            <ProfilePic title={userData?.name} avatarImg={userData?.avatar_img_url}/>
          </div>
        </div>
      </header>
    </>
  );
}
