import { MouseEventHandler } from "react";

export interface CustomButtonProps{ 
    title: string,
    containerstyles?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>,
    btnType?: "button" | "submit",
    textStyles?: string,
    rightIcon?: string,
    isDisabled?: boolean
}

export interface FilterProps { 
    model: String,
    manufracture: String,
    year: number,
    limit: number,
    fuel: string
}

export interface CarsProps { 
    city_mpg: number,
    class: string,
    combination_mpg: number,
    cylinders: number,
    displacement: number,
    drive: string,
    fuel_type: string,
    highway_mpg: number,
    make: string,
    model: string,
    transmission: string,
    year: number
}

export interface CarMenufactureProps { 
    manufracture: string,
    setManufracture: (manufracture : string) => void;
}

export interface OptionsProps { 
    title: string,
    value: string
}