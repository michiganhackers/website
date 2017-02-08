import React from 'react';
import styled from 'styled-components';

import Container from 'components/Container';
import SectionHeader from './SectionHeader';

const SubLink = styled.button`
  background-color:white;
`;

const SubInput = styled.input`
  width: 100%;
  margin: 8px 0;
`;

const SubscribeSectionWrapper = styled.div`
  background-color: #f27e52;
`;

const ContentText = styled.p`
  color: white;
  text-align: center;
`;

class SubscribeSection extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.state = {
      emailText: '',
    };
    this.emailChange = this.emailChange.bind(this);
  }

  emailChange(e) {
    this.setState({
      emailText: e.target.value,
    });
  }

  render() {
    return (
      <SubscribeSectionWrapper>
        <Container>
          <SectionHeader text="Hello" />
          <ContentText>Being a michigan hacker means you want something more out of your Michigan experience. Lorem
            ipsum dolor sit amet please lorem dolor sit amet I cant even see the tacos from my residence in the highest
            apartment in the city of which I have never seen nor know th elocation of</ContentText>
          <p>Recieve our email detailing upcoming upcoming events, tech talks, hack-athons, and news once every few
            weeks:</p>
          <form>
            <SubInput type="text" value={this.state.emailText} onChange={(e) => { this.emailChange(e); }}/>
            <SubLink />
          </form>
        </Container>
      </SubscribeSectionWrapper>
    );
  }
}

export default SubscribeSection;
