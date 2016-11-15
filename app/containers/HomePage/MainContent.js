import React from 'react';

import Container from './Container';
import CenteredSection from './CenteredSection';

class MainContent extends React.Component {
  render() {
    return (
      <Container>
        <CenteredSection>
          <h2>Learn. Create. Repeat.</h2>
          <p>Michigan Hackers exists to foster a community of individuals who enjoy expressing creativity through technology.</p>
        </CenteredSection>
      </Container>
    );
  }
}

export default MainContent;
