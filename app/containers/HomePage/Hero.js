import React from 'react';
import { FormattedMessage } from 'react-intl';
import MeetingImage from './meeting.jpg';
import styled from 'styled-components';
import messages from './messages';
import Container from './Container';

const HeroWrapper = styled.div`
  width: 100%;
  background: url(${MeetingImage}) no-repeat;
  background-size: cover;
`;

const HeroContainer = styled.div`
  padding: 200px 0;
  color: white;
  font-size: 38px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
`;

class Hero extends React.Component {
  render() {
    return (
      <HeroWrapper>
        <Container>
          <HeroContainer>
            <FormattedMessage {...messages.header} />
          </HeroContainer>
        </Container>
      </HeroWrapper>
    );
  }
}

export default Hero;
