/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';

import Container from 'components/Container';

import SponsorSection from './SponsorSection';
import SubscribeSection from './SubscribeSection';

const HomePage = () =>
   (
     <Container>

       <SponsorSection />
       <SubscribeSection />

     </Container>
  )
;

export default HomePage;
