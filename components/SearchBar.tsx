"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { SearchBarMenuFracturer } from '../components';

const SearchButton = ({ otherClass }: { otherClass : string}) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClass}`}>
    <Image
      src='/magnifying-glass.svg'
      alt='magnifying-glass'
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
)

const SearchBar = ({ setMenufracture, setModel }: any) => {

  const [searchMenufacturer, setSearchMenufacturer] = useState('');
  const [searchModel, setSearchModel] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLElement>) => { 
    e.preventDefault();
    if (searchMenufacturer == '' && searchModel == '') { 
      alert('Please fill in the blank')
    }

    setMenufracture(searchMenufacturer);
    setModel(searchModel);
  }

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchBarMenuFracturer
          selected={searchMenufacturer}
          setSelected={setSearchMenufacturer}
        />
        <SearchButton
          otherClass="sm:hidden"
        />
      </div>

      <div className='searchbar__item'>
        <Image
          src='/model-icon.png'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='car-module'
        />

        <input
          type="text"
          name='model'
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton
          otherClass='sm:hidden'
        />
      </div>
      <SearchButton
        otherClass='max-sm:hidden'
      />
    </form>
  )
}

export default SearchBar