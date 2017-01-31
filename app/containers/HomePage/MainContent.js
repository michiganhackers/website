import React from 'react';

import Container from './Container';
import CenteredSection from './CenteredSection';
import styled from 'styled-components';

const SponsorImage = styled.div`
    width: 300px;
    height: 100px;
    margin: 5px;
    backgroundColor: black;
`;

const SponsorRow = styled.div`
    display: flex;
    justifyContent: center;
`;


class MainContent extends React.Component {
  render() {
    return (
      <Container>
        <CenteredSection>
          <div className="sponsors-section">
            <h2>Sponsors</h2>
            <p>Blurb about the sponsors but idk what to put because I am a p.o.s!</p>

            <SponsorRow>
                <SponsorImage><p>Google</p></SponsorImage>
                <SponsorImage><p>Facebook</p></SponsorImage>
            </SponsorRow>

            <SponsorRow>
                <SponsorImage><p>Microsoft</p></SponsorImage>
                <SponsorImage><p>Capital One</p></SponsorImage>
                <SponsorImage><p>ARM</p></SponsorImage>
            </SponsorRow>

            <SponsorRow>
                <SponsorImage><p>Qualtrics</p></SponsorImage>
                <SponsorImage><p>Yelp</p></SponsorImage>
            </SponsorRow>
          </div>
        </CenteredSection>
      </Container>
    );
  }
}

export default MainContent;
