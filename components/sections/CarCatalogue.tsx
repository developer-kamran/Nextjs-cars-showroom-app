import React from 'react';

import { fetchCars } from '@/common/api';
import CustomFilter from '@/components/widgets/CustomFilter';
import SearchBar from '@/components/widgets/SearchBar';
import CarCard from '@/components/widgets/CarCard';
import { fuels, yearsOfProduction } from '@/common/constants';

const CarCatalogue = async ({ searchParams }: any) => {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || '',
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || '',
    model: searchParams.model || '',
  });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <div className='mt-12 padding-x padding-y max-width' id='discover'>
      <div className='home__text-container'>
        <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
        <p>Explore out cars you might like</p>
      </div>

      <div className='home__filters'>
        <SearchBar />
        <div className='home__filter-container'>
          <CustomFilter title='fuel' options={fuels} />
          <CustomFilter title='year' options={yearsOfProduction} />
        </div>
      </div>

      {!isDataEmpty ? (
        <section>
          <div className='home__cars-wrapper'>
            {allCars?.map((car) => (
              <CarCard car={car} />
            ))}
          </div>
        </section>
      ) : (
        <div className='home__error-container'>
          <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
          <p>{allCars?.message}</p>
        </div>
      )}
    </div>
  );
};

export default CarCatalogue;
