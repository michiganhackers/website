import React from 'react';
import styled from 'styled-components';

import Container from './Container';
import CenteredSection from './CenteredSection';

const SponsorImage = styled.div`
    width: 300px;
    height: 100px;
    margin: 5px;
    backgroundColor: black;
`;

const SponsorRow = styled.div`
    display: flex;
    justifyContent: center;
`;

const SubLink = styled.button`
  html button styles
  backgroundColor:white;
`;

const SubInput = styled.input`
  backgroundColor:cyan;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid red;
  border-radius: 4px;
`;

class MainContent extends React.Component {

  constructor() {
    super();

    this.state = { emailText: '' };
    this.emailChange = this.emailChange.bind(this);
  }

  emailChange(e) {
    this.setState({ emailText: e.target.value });
  }

  render() {
    return (
      <Container>
        <CenteredSection>

          <div className="subscribe-section">
            <SubLink />
            <h2>Join Michigan Hackers</h2>
            <p>If youre interested in more specifics about what we do, or in joining us at events</p>
            <p>Click here to learn more.</p>
            <p>Recieve our email detailing upcoming upcoming events, tech talks, hack-athons, and news once every few weeks:</p>
            <form>
              <SubInput type="text" value={this.state.emailText} onChange={(e) => { this.emailChange(e); }} />
            </form>
          </div>
          
          <div className="sponsors-section">
            <h2>Sponsors</h2>
            <p>Blurb about the sponsors but idk what to put because I am a p.o.s!</p>

            <SponsorRow>
                <SponsorImage><p>Google</p></SponsorImage>
                <SponsorImage><p>Facebook</p></SponsorImage>
            </SponsorRow>

            <SponsorRow>
                <SponsorImage><p>Microsoft</p></SponsorImage>
                <SponsorImage><p>Capital One</p></SponsorImage>
                <SponsorImage><p>ARM</p></SponsorImage>
            </SponsorRow>

            <SponsorRow>
                <SponsorImage><p>Qualtrics</p></SponsorImage>
                <SponsorImage><p>Yelp</p></SponsorImage>
            </SponsorRow>
          </div>

        </CenteredSection>
      </Container>
    );
  }
}

export default MainContent;

