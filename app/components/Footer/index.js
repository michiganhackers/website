/*
 * Footer
 *
 */

import React from 'react';
import styled from 'styled-components';

import SectionHeader from 'components/SectionHeader';

const SocialLinkContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SocialLink = styled.div`
    width: 60px;
    height: 60px;
    margin: 15px;
    border-radius: 50%;
    background-color: white;
`;

const FooterWrapper = styled.div`
  background-color: #f38552;
  padding: 30px 0;
`;

class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
        <FooterWrapper>
          <SocialLinkContainer>
            <SocialLink />
            <SocialLink />
            <SocialLink />
          </SocialLinkContainer>
        </FooterWrapper>
    );
  }
}

export default Footer;
