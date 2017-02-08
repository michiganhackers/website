/*
 * Footer
 *
 */

import React from 'react';
import styled from 'styled-components';

const SocialLink = styled.div`
    width:60px;
    height:60px;
    margin:10px;
    float:left;
    backgroundColor:black;
`;

const FooterImage = styled.div`
  width:120px;
  height:60px;
  clear:left;
  margin:10px;
  backgroundColor:black;
`;

class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
        <div className="footer-section">
          <div className="container">
            <SocialLink/>
            <SocialLink/>
            <SocialLink/>
            <FooterImage/>       
          </div>
        </div>
    );
  }
}

export default Footer;
