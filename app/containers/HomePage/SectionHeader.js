import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  text-align: center;
`;

const BaseHeader = styled.h2`
  display: inline-block;
  color: orange;
  padding: 5px 15px;
`;

const LightHeader = styled(BaseHeader)`
  background-color: white;
`;

const DarkHeader = styled(BaseHeader)`
  background-color: purple;
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
