import Hero from '../components/sections/Hero';
import CarCatalogue from '@/components/sections/CarCatalogue';

export default function Home({ searchParams }) {
  return (
    <main className='overflow-hidden'>
      <Hero />
      <CarCatalogue searchParams={searchParams} />
    </main>
  );
}
