import React from 'react';
import styled from 'styled-components';

import Container from 'components/Container';

import BlockLogoImg from 'static/assets/homepage/block-logo.svg';

const HeroWrapper = styled.div`
  background-color: #f15d25;
`;

const HeroContainer = styled(Container)`
  padding: 120px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BlockLogoContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const BlockLogo = styled.img`
  width: 70%;
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
