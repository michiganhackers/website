/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';

import HeroSection from './HeroSection';
import InfoSection from './InfoSection';
import CalendarSection from './CalendarSection';
import SubscribeSection from './SubscribeSection';
import KnowledgeBaseSection from './KnowledgeBaseSection';
import SponsorSection from './SponsorSection';

const HomePage = () =>
   (
     <div>

       <HeroSection />
       <InfoSection />
       <CalendarSection />
       <KnowledgeBaseSection />
       <SubscribeSection />
       <SponsorSection />

     </div>
  )
;

export default HomePage;
