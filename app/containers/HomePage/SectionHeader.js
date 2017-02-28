import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  text-align: center;
`;

const BaseHeader = styled.h2`
  display: inline-block;
  font-size: 26px;
  padding: 5px 15px;
  margin: 0;
  text-transform: uppercase;
`;

const LightHeader = styled(BaseHeader)`
  background-color: white;
  color: #f27e52;
`;

const DarkHeader = styled(BaseHeader)`
  background-color: #f27e52;
  color: white;
`;

const Header = ({text = '', darkBackground = false}) => {
    if (darkBackground) {
        return <DarkHeader>{text}</DarkHeader>;
    } else {
        return <LightHeader>{text}</LightHeader>;
    }
};

const SectionHeader = (props) => {
  return (
    <div>
      <HeaderWrapper>
        <Header {...props} />
      </HeaderWrapper>
    </div>
  );
};

export default SectionHeader;
