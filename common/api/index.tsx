import { CarProps, FilterProps } from '../types';

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;
  const headers = {
    'X-RapidAPI-Key': '88cab977a7mshaa3728d4ab58dbep1f6493jsnf111e5406556',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;

  const response = await fetch(url, { headers });
  const result = await response.json();

  return result;
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const params = new URLSearchParams({
    customer: 'hrjavascript-mastery',
    make: car.make,
    modelFamily: car.model.split(' ')[0],
    zoomType: 'fullscreen',
    modelYear: `${car.year}`,
    angle: angle || '', // Handle the optional angle parameter
  });

  const url = new URL('https://cdn.imagin.studio/getimage');
  url.search = params.toString();

  return url.toString();
};
