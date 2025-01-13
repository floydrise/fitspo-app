import Image from 'next/image';
import { Button } from '@/components/ui/button';
import NavLinks from '@/app/ui/nav-links';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className='flex min-h-32 flex-wrap justify-around gap-5 border-b border-solid border-slate-400'>
        <Link href={'/'} className={"flex"}>
          <Image
            src='/Logo.svg'
            width={200}
            height={100}
            alt='Logo of our website'
          />
        </Link>
        <nav className='flex items-center gap-5'>
          <NavLinks />
        </nav>
        <div className={'mb-4 flex items-center gap-2 md:mb-0 lg:mb-0'}>
          <Button variant={'purple'} asChild={true}>
            <Link href={'/login'}>Log in</Link>
          </Button>
          <Button variant={'green'} asChild={true}>
            <Link href={'/signup'}>Sign up</Link>
          </Button>
        </div>
      </header>
    </>
  );
}
