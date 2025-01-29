import React from 'react';
import Hero from '../components/Hero';
import FeaturedDoctors from '../components/FeaturedDoctors';
import Services from '../components/Services';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedDoctors />
      <Services />
    </div>
  );
};

export default Home;
