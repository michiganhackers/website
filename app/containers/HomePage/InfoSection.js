import React from 'react';
import styled from 'styled-components';

import Container from 'components/Container';
import SectionHeader from './SectionHeader';

const ColumnWrapper = styled.div`
  display: flex;
  margin: 20px 0;
`;

const Column = styled.div`
  width: 33%;
  text-align: center;
`;

const ColumnHeader = styled.h3`
  color: darkslategray;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`;

const ColumnContent = styled.p`
  width: 80%;
  margin: 0 auto;
  font-size: 16px;
`;

const SectionContainer = styled(Container)`
  padding: 70px 0;
`;

const InfoSection = (props) => {
  return (
    <div>
      <SectionContainer>
        <SectionHeader text="About Us" darkBackground={true} />
        <ColumnWrapper>
          <Column>
            <ColumnHeader>Who we are</ColumnHeader>
            <ColumnContent>Michigan Hackers is entirely made up of students of the University of Michigan with a diverse set of backgrounds and majors.</ColumnContent>
          </Column>
          <Column>
            <ColumnHeader>What we do</ColumnHeader>
            <ColumnContent>We exist to encourage and facilitate the independent learning of technology through tech talks, hack nights, and other public events.</ColumnContent>
          </Column>
          <Column>
            <ColumnHeader>Where we are</ColumnHeader>
            <ColumnContent>We host events all over the University of Michigan campus. Check the calendar for our upcoming events.</ColumnContent>
          </Column>
        </ColumnWrapper>
      </SectionContainer>
    </div>
  );
};

export default InfoSection;
