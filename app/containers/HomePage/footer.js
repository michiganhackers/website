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
import { FormattedMessage } from 'react-intl';
import Helmet from "react-helmet";
import styled from 'styled-components';

const SocialLink = styled.div`
    width:60px;
    height:60px;
    margin:10px;
    float:left;
    backgroundColor:black;
`;

const FooterImage = styled.div`
  width:120px;
  height:60px;
  clear:left;
  margin:10px;
  backgroundColor:black;
`;

export default class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
        <div className="footer-section">
          <div className="container">
            <SocialLink/>
            <SocialLink/>
            <SocialLink/>
            <FooterImage/>       
          </div>
        </div>
    );
  }
}
