import { CarsProps, FilterProps } from "@/types";

export const CarFtech = async (filters: FilterProps) => {

    const { manufracture,fuel,limit,model,year } = filters;

    const headers = {
        'X-RapidAPI-Key': '65c29d6bbdmsheb39ce21588c3cap18be62jsn0d4e3ef43b59',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    
    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufracture}&year=${year}&model=${model}&limit=${limit}$fuel_type=${fuel}`, {
        headers: headers
    })

    let result = await response.json();
    return result;
}

export const CalculatePerRent = (city_mpg: number, year: number) => { 
    const basePricePerDay = 50; // base rental price per day in doller
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

     // Calculate additional rate based on mileage and age
    
    const mileAge = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
    
    const rentalPerDay = basePricePerDay + mileAge + ageRate;

    return rentalPerDay.toFixed(0);
}

export const generateCarImageUrl = (car: CarsProps, angle?: string) => { 
    const url = new URL('https://cdn.imagin.studio/getimage');

    const { make, model, year } = car;
    
    url.searchParams.append('customer','hrjavascript-mastery')
    url.searchParams.append('make',make)
    url.searchParams.append('modelFamily',model.split('')[0])
    url.searchParams.append('zoomtype','fullscreen')
    url.searchParams.append('modelyear',`${year}`)
    url.searchParams.append('angle',`${angle}`)

    return `${url}`;
}