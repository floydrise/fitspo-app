'use client';

import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';

const Search = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  function handleSearch(term: string) {
    setSearchTerm(term);
  }

  function handleSubmit(term: string) {
    const params = new URLSearchParams();

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className='flex flex-1 flex-shrink-0 justify-center items-center gap-3.5'>
      <label htmlFor='search'>
        <MagnifyingGlassIcon className={"w-5"}/>
      </label>
      <input
        id={'search'}
        name={"search"}
        className='w-1/2 rounded-md border border-gray-200 py-[9px] pl-3 placeholder:text-gray-500'
        placeholder={placeholder}
        defaultValue={searchParams.get('query')?.toString()}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          handleSubmit(searchTerm);
        }}
      >
        Search
      </Button>
    </div>
  );
};

export default Search;
