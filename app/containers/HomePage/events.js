import React from 'react';
import Container from './Container';
import CenteredSection from './CenteredSection';

var singleEvent = {
    height: 200,
    margin: 20,
    backgroundColor: "#EDBB99",
    color: "#ffffff",
    borderRadius: 3
};

var eventList = [];
var eventContainer = [];

for(var x = 0; x < 3; x++) {
  eventContainer.push(
    <div style = {singleEvent}>
      Event {x}
    </div>
  );
}

class Events extends React.Component {
  render() {
    return (
      <Container>
        <CenteredSection>
          {eventContainer}
        </CenteredSection>
      </Container>
    );
  }
}

export default Events;
