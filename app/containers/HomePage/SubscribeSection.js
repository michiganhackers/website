import React from 'react';
import styled from 'styled-components';

import Container from 'components/Container';
import SectionHeader from './SectionHeader';
import ContentText from './ContentText';

const Form = styled.form`
  width: 60%;
  margin: 0 auto;
`;

const SubmitButton = styled.input`
  width: 25%;
  height: 40px;
  background: #ef5f32;
  font-weight: bold;
  color: white;
  letter-spacing: 1px;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: background .3s ease-in-out;
`;

const EmailInput = styled.input`
  height: 40px;
  width: 75%;
  background: #FDFCFB;
  font-family: inherit;
  color: #737373;
  letter-spacing: 1px;
  text-indent: 5%;
  border-radius: 5px 0 0 5px;
`;

const SubscribeSectionWrapper = styled.div`
  background-color: #f27e52;
  padding: 70px 0;
`;

const SubscribeContentText = styled(ContentText)`
  color: white;
`;

class SubscribeSection extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.state = {
      email: '',
    };
  }

  handleEmailInput(e) {
    this.setState({
      email: e.target.value,
    });
  }

  submitEmail(e) {
    e.preventDefault();

    console.log('Thanks bruh:', this.state.email);
  }

  render() {
    return (
      <SubscribeSectionWrapper>
        <Container>
          <SectionHeader text="Subscribe" />
          <SubscribeContentText>Being a michigan hacker means you want something more out of your Michigan experience. Lorem I cant even see the tacos from my residence in the highest
            apartment in the city of which I have never seen nor know the location</SubscribeContentText>
          <Form onSubmit={this.submitEmail}>
            <EmailInput type="text" value={this.state.email} placeholder="hacker@umich.edu" onChange={this.handleEmailInput} />
            <SubmitButton type="submit" />
          </Form>
        </Container>
      </SubscribeSectionWrapper>
    );
  }
}

export default SubscribeSection;
