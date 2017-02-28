import React from 'react';
import styled from 'styled-components';

import Container from 'components/Container';
import SectionHeader from './SectionHeader';
import ContentText from './ContentText';
import CalendarItem from './CalendarItem';

const SectionWrapper = styled.div`
  background-color: #ed5336;
  padding: 70px 0;
`;

const CalendarContentText = styled(ContentText)`
  color: white;
`;

const CalendarItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

class CalendarSection extends React.Component {
  render() {
    console.log('Loading: ', this.props.loading);
    console.log('Events: ', this.props.events);
    return (
      <SectionWrapper>
        <Container>
          <SectionHeader text="Calendar" />
          <CalendarContentText>Here are some of our upcoming events</CalendarContentText>
          <CalendarItemContainer>
            <CalendarItem />
            <CalendarItem />
          </CalendarItemContainer>
        </Container>
      </SectionWrapper>
    );
  }
}

CalendarSection.propTypes = {
  loading: React.PropTypes.bool,
  events: React.PropTypes.array
};

export default CalendarSection;
