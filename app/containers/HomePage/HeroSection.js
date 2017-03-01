import React from 'react';
import styled from 'styled-components';

import Container from 'components/Container';

import BlockLogoImg from 'static/assets/homepage/block-logo.svg';

const HeroWrapper = styled.div`
  background-color: salmon;
`;

const HeroContainer = styled(Container)`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BlockLogoContainer = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const BlockLogo = styled.img`
  display: block;
  margin: 0 auto;
`;

const HeroSection = () => {
  return (
    <HeroWrapper>
      <HeroContainer>
        <BlockLogoContainer>
          <BlockLogo src={BlockLogoImg} />
        </BlockLogoContainer>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default HeroSection;
