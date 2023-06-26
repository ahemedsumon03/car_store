"use client"

import { useState, useEffect } from 'react';
import { Hero,CardCar,ShowMore,SearchBar,CustomFilters } from '../components';
import { CarFtech,generateCarImageUrl } from '../utils';
import Image from 'next/image';
import { fuels, manufacturers, yearsOfProduction } from '../constants';

export default function Home() {

  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  // search status

  const [manufracture, setManufracture] = useState("");
  console.log(manufracture);
  const [model, setModel] = useState("");

  // filter status
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);

  // pagination status

  const [limit, setLimit] = useState(10);

  console.log(year);


  const getCars = async () => { 
    try {
      setLoading(true);
      const result = await CarFtech({
        manufracture: manufracture || "",
        year: year || 2022,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "corolla"
      })

      setAllCars(result);
      setLoading(false);

    } catch (error) {
      console.log(error);
    } finally { 
      setLoading(false);
    }
  }

  useEffect(() => {
    getCars();
  }, [limit, fuel, model, manufracture, year]);
  
  console.log(allCars);

  const dataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      
      <div className='mt-12 padding-x padding-y max-width' id="discover">
        <div className='home__text-container'>
          <h1 className='text-4xl text-extrabold'>Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar
            setMenufracture={setManufracture}
            setModel={setModel}
          />
          <div className='home__filter-container'>
            <CustomFilters
              title="fuel"
              options={fuels}
              setFilter={setFuel}
            />

            <CustomFilters
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>

        {
          allCars.length > 0 ? (
            <section>
              <div className='home__cars-wrapper'>
                {
                  allCars?.map((car, index) => (
                    <CardCar key={index} cars={ car } />
                  ))
                }
              </div>

              {
                loading && (
                  <div className='mt-16 w-full flex-center'>
                    <Image
                      src="/loader.svg"
                      alt='loader__image'
                      height={50}
                      width={50}
                      className="object-contain"
                    />
                  </div>
                )
              }

              <ShowMore
                pageNumber={limit / 10}
                isNext={limit > allCars?.length}
                setLimit={ setLimit }
              />

            </section>
          ) : (
              <div className='home__error-container'>
                <h2 className='text-xl font-bold text-black'>Oops, no results</h2>
              </div>
         )
        }
      </div>
    </main>
  )
}
