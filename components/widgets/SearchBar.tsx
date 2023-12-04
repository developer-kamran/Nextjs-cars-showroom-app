'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import SearchManufacturer from './SearchManufacturer';
import { SearchButton } from './SearchButton';

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer === '' && model === '') {
      return alert('Please fill in the search bar');
    }

    const searchParams = new URLSearchParams(window.location.search);
    updateSearchParams(
      searchParams,
      'manufacturer',
      manufacturer.toLowerCase()
    );
    updateSearchParams(searchParams, 'model', model.toLowerCase());

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathname);
  };

  const updateSearchParams = (
    searchParams: URLSearchParams,
    key: string,
    value: string
  ) => {
    if (value) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }
  };
  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses='sm-hidden' />
      </div>
      <div className='searchbar__item'>
        <Image
          src='/model-icon.png'
          alt='car model'
          width={25}
          height={25}
          className='absolute w-[20-px] h-[20px] ml-4'
        />
        <input
          type='text'
          name='model'
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder='Tiguan'
          className='searchbar__input'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  );
};

export default SearchBar;
