import React from 'react';
import styled from 'styled-components';

import Container from 'components/Container';
import SectionHeader from './SectionHeader';

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
  width: 80%;
  margin: 0 auto;
`;

class SponsorSection extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
        <SectionHeader text="Sponsors" darkBackground={true} />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Blurb about the sponsors but idk what to put because I am a p.o.s! It's all centered until it's not</p> 

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
