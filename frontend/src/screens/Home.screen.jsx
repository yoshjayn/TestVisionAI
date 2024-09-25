import React from 'react';
import Hero from '../containers/Hero/Hero.container';
import Header from '../containers/Header/Header.container';
import Features from '../containers/Features/Features.container';
import OurTeam from '../containers/OurTeam';
import { Footer } from '../containers/footer';
import UsageGuide from '../containers/usageGuide';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <UsageGuide />
      <OurTeam />
      <Footer />
    </>
  );
};

export default Home;
