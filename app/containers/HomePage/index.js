/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import Hero from './Hero';
import MainContent from './MainContent';
import MeetingImage from './meeting.jpg';
import { FormattedMessage } from 'react-intl';
import Helmet from "react-helmet";
import styled from 'styled-components';
import messages from './messages';
import Footer from './footer'
import Media from 'react-media'

import img_fb from './img/sq_fbr.png';
import img_mail from './img/sq_mailr.png';
import img_git from './img/sq_gitr.png';
import img_mp from './img/mp.png';
import img_logo from './img/logo_h.png'

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function


  render() {
    return (
      <div>
        <Hero />
        <MainContent />
        <Footer />
      </div>
    );
  }
}
