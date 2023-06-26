"use client"

import React from 'react'
import { CustomButtonProps } from '../types';
import Image from 'next/image';

const CustomButton = ({ title, containerstyles, handleClick,btnType,rightIcon,textStyles }: CustomButtonProps) => {
    return (
        <button
            disabled={false}
            className={`custom-btn ${containerstyles}`}
            onClick={handleClick}
            type={btnType || 'button'}
        >
            <span className={`flex-1 ${textStyles}`}>{title}</span>
            
            {rightIcon && (
                <div className='relative w-6 h-6'>
                    <Image src={ rightIcon} alt="right-icon" fill className='object-contain'/>
                </div>
            )}
        </button>
    )
}

export default CustomButton