import Image from 'next/image';
import { Button } from '@/components/ui/button';
import NavLinks from '@/app/ui/nav-links';
import Link from 'next/link';
import { HeaderDropdown } from '@/components/ui/header-dropdown';

export default function Header() {
  return (
    <>
      <header className='flex min-h-32 flex-wrap items-center justify-around gap-5 border-b border-solid border-slate-400'>
        <Link href={'/'} className={'flex'}>
          <Image
            src='/Logo.svg'
            width={1200}
            height={531}
            alt='Logo of our website'
            className={'h-auto w-24 md:h-auto md:w-[200px]'}
          />
        </Link>
        <nav className='hidden items-center gap-5 md:flex'>
          <NavLinks />
        </nav>
        <nav className={"flex items-center md:hidden"}>
        <HeaderDropdown/>
        </nav>
        <div className={'flex items-center gap-2'}>
          <Button variant={'purple'} asChild={true}>
            <Link href={'/login'}>Log in</Link>
          </Button>
          <Button
            variant={'green'}
            asChild={true}
            className={'hidden md:block'}
          >
            <Link href={'/signup'}>Sign up</Link>
          </Button>
        </div>
      </header>
    </>
  );
}
