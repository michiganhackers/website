import React from 'react';
import styled from 'styled-components';

import Container from 'components/Container';

import LogoImg from './logo_h.png';

const HeaderButton = styled.button`
  color: white;
  font-size: 16px;
  text-transform: uppercase;
`;

const HeaderWrapper = styled.div`
  background-color: #ef6539;
`;

const HeaderContainer = styled(Container)`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <img src={LogoImg} width="200px" />
        <div>
          <HeaderButton>Calendar</HeaderButton>
          <HeaderButton>About</HeaderButton>
          <HeaderButton>Sponsors</HeaderButton>
        </div>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
