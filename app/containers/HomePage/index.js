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
import MeetingImage from './meeting.jpg';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Hero = styled.div`
  width: 100%;
  background: url(${MeetingImage}) no-repeat;
  background-size: cover;
`;

const Container = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  padding: 0 16px;
`;

const HeroContainer = styled.div`
  padding: 200px 0;
  color: white;
  font-size: 48px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
`;

const CenteredSection = styled.div`
  text-align: center;
`;

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Hero>
          <Container>      
            <HeroContainer>
              <FormattedMessage {...messages.header} />
            </HeroContainer>
          </Container>
        </Hero>
        <Container>
          <CenteredSection>
            <h2>Learn. Create. Repeat.</h2>
            <p>Michigan Hackers exists to foster a community of individuals who enjoy expressing creativity through technology.</p>
          </CenteredSection>
        </Container>
      </div>
    );
  }
}
