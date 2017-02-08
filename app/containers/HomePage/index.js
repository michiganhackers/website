/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';

import SponsorSection from './SponsorSection';
import SubscribeSection from './SubscribeSection';

const HomePage = () =>
   (
     <div>

       <SubscribeSection />
       <SponsorSection />

     </div>
  )
;

export default HomePage;
