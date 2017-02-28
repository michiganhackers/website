/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';

import SponsorSection from './SponsorSection';
import SubscribeSection from './SubscribeSection';
import CalendarSection from './CalendarSection';

const HomePage = () =>
   (
     <div>

       <CalendarSection />
       <SubscribeSection />
       <SponsorSection />

     </div>
  )
;

export default HomePage;
