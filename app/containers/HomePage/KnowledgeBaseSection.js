import React from 'react';
import styled from 'styled-components';

import Container from 'components/Container';
import SectionHeader from './SectionHeader';
import ContentText from './ContentText';

const KnowledgeBaseButton = styled.a`
  width: 25%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ef5f32;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  letter-spacing: 1px;
  border-radius: 5px;
  cursor: pointer;
  transition: background .3s ease-in-out;
  margin: 0 auto;
  font-size: 20px;
`;

const KnowledgeBaseSectionWrapper = styled.div`
  padding: 70px 0;
`;

class KnowledgeBaseSection extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <KnowledgeBaseSectionWrapper>
        <Container>
          <SectionHeader text="Knowledge Base" darkBackground={true} />
          <ContentText>Being a michigan hacker means you want something more out of your Michigan experience. Lorem I cant even see the tacos from my residence in the highest
            apartment in the city of which I have never seen nor know the location</ContentText>
          <KnowledgeBaseButton href="https://www.google.com">Direct Link</KnowledgeBaseButton>
        </Container>
      </KnowledgeBaseSectionWrapper>
    );
  }
}

export default KnowledgeBaseSection;
