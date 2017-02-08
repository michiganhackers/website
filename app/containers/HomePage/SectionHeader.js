import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  text-align: center;
`;

const Header = styled.h2`
  display: inline-block;
  background-color: white;
  color: orange;
  padding: 5px 15px;
`;

const SectionHeader = (props) => {
  return (
    <div>
      <HeaderWrapper>
        <Header>{props.text}</Header>
      </HeaderWrapper>
    </div>
  );
};

export default SectionHeader;
