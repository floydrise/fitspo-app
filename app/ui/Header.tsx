import Image from 'next/image';
import { Button } from '@/components/ui/button';
import NavLinks from '@/app/ui/nav-links';

export default function Header() {

  return (
    <>
      <header className='flex justify-around min-h-32 border-b-2 border-solid'>
        <Image
          src='/Logo.svg'
          width={200}
          height={100}
          alt='Logo of our website'
        />
        <nav className='flex items-center gap-5'>
          <NavLinks/>
        </nav>
        <div className={"flex gap-2 items-center"}>
          <Button variant={'default'}>Log in</Button>
          <Button variant={'green'}>Sign up</Button>
        </div>
      </header>
    </>
  );
}
