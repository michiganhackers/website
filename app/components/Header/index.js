import React from 'react';
import styled from 'styled-components';

const NavBar = styled.section`
  background-color: #ef5b2e;
  padding: 10px 0;
`;

const Wrapper = styled.div`
  max-width: 980px;
  margin: 0 auto;
`;

const Brand = styled.p`
  color: white;
  margin: 0;
  font-size: 1.5em;
`;

class Header extends React.Component {
  render() {
    return (
      <NavBar>
        <Wrapper>
          <Brand>Michigan Hackers</Brand>
        </Wrapper>
      </NavBar>
    );
  }
}

export default Header;