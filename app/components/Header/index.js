import React from 'react';
import styled from 'styled-components';

import Container from 'components/Container';

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
        <p>Michigan Hackers</p>
        <div>
          <button>Events</button>
          <button>Events</button>
          <button>Events</button>
        </div>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
