"use client"

import { CarsProps } from '@/types';
import { CalculatePerRent, generateCarImageUrl } from '../utils';
import React, { useState } from 'react'
import Image from 'next/image';
import {CarDetails, CustomButton} from '../components';

interface CarCardProps { 
    cars: CarsProps
}

const CardCar = ({ cars }: CarCardProps ) => {

    const [isOpen, setIsOpen] = useState(false)

    const { city_mpg, year, make, model, transmission, drive } = cars;

    const carRent = CalculatePerRent(city_mpg, year);

    return (
        <div className='car-card group'>
            <div className='car-card__content'>
                <h2 className='car-card__content-title'>
                    {make} { model }
                </h2>
            </div>

            <p className='flex mt-6 text-[32px] font-extrabold'>
                <span>$</span>
                { carRent }
                <span className='self-end text-[14px] font-medium'>/day</span>
            </p>

            <div className='relative flex h-40 w-full mt-2'>
                <Image src={generateCarImageUrl(cars)} alt="all_cars" className='object-contain' fill/>
            </div>

            <div className='relative flex w-full mt-2'>
                <div className='flex group-hover:invisible w-full justify-between text-gray'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src="steering-wheel.svg" width={20} height={20} alt="steering-wheel" />
                        <p className='text-[14px]'>
                            { transmission === 'a' ? 'Automatic' : 'Manual'}
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src="/tire.svg" width={20} height={20} alt="tire" />
                        <p className='text-[14px]'>{ drive.toUpperCase()}</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src="/gas.svg" width={20} height={20} alt="gas" />
                        <p className='text-[14px]'>{city_mpg} MPG</p>
                    </div>
                </div>

                <div className='car-card__btn-container'>
                    <CustomButton
                        title='View More'
                        containerstyles='w-full py-[16px] rounded-full bg-primary-blue'
                        textStyles='text-white text-[14px] leading-[17px] font-bold'
                        rightIcon='/right-arrow.svg'
                        handleClick={()=>setIsOpen(true)}
                    />
                </div>
            </div>

            <CarDetails isOpen={isOpen} closeModal={ ()=>setIsOpen(false)} car={cars} />
        </div>

    )
}

export default CardCar