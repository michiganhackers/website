import React from 'react';
import styled from 'styled-components';

import Container from './Container';
import CenteredSection from './CenteredSection';

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

  constructor(){
    super()
    this.state = { emailText: '' }
    this.emailChange = this.emailChange.bind(this)
  }

  emailChange(e){
    this.setState({ emailText: e.target.value })
  }

  render() {
    return (
      <Container>
        <CenteredSection>


          <div className="subscribe-section">
            <SubLink/>
            <h2>Join Michigan Hackers</h2>
            <p>If you're interested in more specifics about what we do, or in joining us at events:.</p>
            <p>Click here to learn more.</p>
            <p>Recieve our email detailing upcoming upcoming events, tech talks, hack-athons, and news once every few weeks:</p>
            <form>  
                <SubInput type="text" value={this.state.emailText} onChange={(e)=>{this.emailChange(e)}} />
            </form>
          </div>
        


        </CenteredSection>
      </Container>
    );
  }
}

export default MainContent;

