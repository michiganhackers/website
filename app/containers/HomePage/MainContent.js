import React from 'react';

import Container from './Container';
import CenteredSection from './CenteredSection';

class MainContent extends React.Component {
  render() {
    return (
      <Container>
        <CenteredSection>
          <div className="col-md-4">
            <h2>Hack Night</h2>
            <p>Every Thursday in TechArb, everyone is invited to come work on anything and everything.</p>
          </div>
          <div className="col-md-4">
            <h2>Learn to Hack</h2>
            <p>Dedicated to teaching others a variety of intro topics such as web and mobile development</p>
          </div>
          <div className="col-md-4">
            <h2>Mentorship</h2>
            <p>lol</p>
          </div>
        </CenteredSection>
      </Container>
    );
  }
}

export default MainContent;
