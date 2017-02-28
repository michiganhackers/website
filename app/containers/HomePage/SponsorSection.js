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

const SectionWrapper = styled.div`
  padding: 70px 0;
`;


const SponsorImageWrapper = styled.div`
  width: 33%;
  padding: 2%;
`;

const SponsorImage = styled.img`
  width: 100%;
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
      <SectionWrapper>
        <Container>
          <SectionHeader text="Sponsors" darkBackground={true} />
          <SponsorRow>
            <SponsorImageWrapper><SponsorImage src={MicrosoftLogo}></SponsorImage></SponsorImageWrapper>
            <SponsorImageWrapper><SponsorImage src={CapitalOneLogo}></SponsorImage></SponsorImageWrapper>
          </SponsorRow>

          <SponsorRow>
            <SponsorImageWrapper><SponsorImage src={ArmLogo}></SponsorImage></SponsorImageWrapper>
            <SponsorImageWrapper><SponsorImage src={FacebookLogo}></SponsorImage></SponsorImageWrapper>
            <SponsorImageWrapper><SponsorImage src={QualtricsLogo}></SponsorImage></SponsorImageWrapper>
          </SponsorRow>

          <SponsorRow>
            <SponsorImageWrapper><SponsorImage src={GoogleLogo}></SponsorImage></SponsorImageWrapper>
            <SponsorImageWrapper><SponsorImage src={YelpLogo}></SponsorImage></SponsorImageWrapper>
          </SponsorRow>

        </Container>
      </SectionWrapper>
    );
  }
}

export default SponsorSection;
