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
      <header className='border-b border-solid border-slate-400'>
        <div className='container mx-auto flex min-h-32 justify-between px-[15px]'>
          <Link href={'/'} className='order-2 flex md:order-none'>
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
          <nav className={'order-1 flex items-center md:order-none md:hidden'}>
            <HeaderDropdown />
          </nav>
          <div className={'order-3 flex items-center gap-2 md:order-none'}>
            <div
              className={
                session?.user
                  ? 'hidden'
                  : 'flex flex-col gap-2 min-[428px]:flex-row'
              }
            >
              <Button variant={'green'} asChild={true}>
                <Link href={'/login'}>Log in</Link>
              </Button>
              <Button variant={'orange'} asChild={true}>
                <Link href={'/signup'}>Sign up</Link>
              </Button>
            </div>
            <div
              className={session?.user ? 'flex items-center gap-2' : 'hidden'}
            >
              <ProfilePic
                title={userData?.name}
                avatarImg={userData?.avatar_img_url}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
