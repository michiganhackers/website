/*
 * Footer
 *
 */

import React from 'react';
import styled from 'styled-components';

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

const FooterImage = styled.div`
  width: 240px;
  height: 40px;
  margin: 10px auto;
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
          <FooterImage />
        </FooterWrapper>
    );
  }
}

export default Footer;
