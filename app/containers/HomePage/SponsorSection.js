import React from 'react';
import styled from 'styled-components';

import Container from 'components/Container';

import MicrosoftLogo from 'static/assets/sponsors/microsoft-logo.svg';
import CapitalOneLogo from 'static/assets/sponsors/capital-one-logo.svg';
import ArmLogo from 'static/assets/sponsors/arm-logo.svg';
import FacebookLogo from 'static/assets/sponsors/facebook-logo.png';
import QualtricsLogo from 'static/assets/sponsors/qualtrics-logo.jpg';
import GoogleLogo from 'static/assets/sponsors/google-logo.svg';
import YelpLogo from 'static/assets/sponsors/yelp-logo.svg';

const SponsorImage = styled.img`
  height: 100%;
  width: 33%;
  padding: 15px;
  max-width: 100%;
`;

const SponsorRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

class SponsorSection extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
        <h2>Sponsors</h2>
        <p>Blurb about the sponsors but idk what to put because I am a p.o.s!</p>

        <SponsorRow>
          <SponsorImage src={MicrosoftLogo}></SponsorImage>
          <SponsorImage src={CapitalOneLogo}></SponsorImage>
        </SponsorRow>

        <SponsorRow>
          <SponsorImage src={ArmLogo}></SponsorImage>
          <SponsorImage src={FacebookLogo}></SponsorImage>
          <SponsorImage src={QualtricsLogo}></SponsorImage>
        </SponsorRow>

        <SponsorRow>
          <SponsorImage src={GoogleLogo}></SponsorImage>
          <SponsorImage src={YelpLogo}></SponsorImage>
        </SponsorRow>

      </Container>

    );
  }
}

export default SponsorSection;
