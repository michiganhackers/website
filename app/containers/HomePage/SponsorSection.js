import React from 'react';
import styled from 'styled-components';

import Container from 'components/Container';

import MicrosoftLogo from 'static/assets/sponsors/microsoft-logo.svg';
import CapitalOneLogo from 'static/assets/sponsors/capital-one-logo.svg';
import ArmLogo from 'static/assets/sponsors/ARM_logo.svg';
import FacebookLogo from 'static/assets/sponsors/facebook-logo.png';
import QualtricsLogo from 'static/assets/sponsors/qualtrics-logo.jpg';
import GoogleLogo from 'static/assets/sponsors/google-logo.svg';
import YelpLogo from 'static/assets/sponsors/yelp-logo.svg';

const SponsorImage = styled.img`
  vertical-align: middle;
  max-height: 100%;
  max-width: 100%;
  margin: 15px;
`;

const ImageWrapper = styled.div`
  height: 100%;
  width: 33%;
  padding: 15px;
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
          <ImageWrapper>
            <SponsorImage src={MicrosoftLogo}></SponsorImage>
          </ImageWrapper>
          <ImageWrapper>
            <SponsorImage src={CapitalOneLogo}></SponsorImage>
          </ImageWrapper>
        </SponsorRow>

        <SponsorRow>
          <ImageWrapper>
            <SponsorImage src={ArmLogo}></SponsorImage>
          </ImageWrapper>
          <ImageWrapper>
            <SponsorImage src={FacebookLogo}></SponsorImage>
          </ImageWrapper>
          <ImageWrapper>
            <SponsorImage src={QualtricsLogo}></SponsorImage>
          </ImageWrapper>
        </SponsorRow>

        <SponsorRow>
          <ImageWrapper>
            <SponsorImage src={GoogleLogo}></SponsorImage>
          </ImageWrapper>
          <ImageWrapper>
            <SponsorImage src={YelpLogo}></SponsorImage>
          </ImageWrapper>
        </SponsorRow>

      </Container>

    );
  }
}

export default SponsorSection;
