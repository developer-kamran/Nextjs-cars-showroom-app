import { CarProps } from '../types';

export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': '88cab977a7mshaa3728d4ab58dbep1f6493jsnf111e5406556',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };
  const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q6';

  const response = await fetch(url, { headers });
  const result = await response.json();

  return result;
}

export const generateCarImageUrl = (car: CarProps, angle?: String) => {
  const url = new URL('https://cdn.imagin.studio/getimage');
  const { make, model, year } = car;
  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
};
