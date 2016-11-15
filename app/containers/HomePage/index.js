/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import MeetingImage from './meeting.jpg';
import { FormattedMessage } from 'react-intl';
import Helmet from "react-helmet";
import styled from 'styled-components';
import messages from './messages';

import img_fb from './img/sq_fbr.png';
import img_mail from './img/sq_mailr.png';
import img_git from './img/sq_gitr.png';
import img_mp from './img/mp.png';
import img_logo from './img/logo_h.png'

//import css from './css/main.css';
//console.log(css);

var former={
    color: '#000000', height: 200, border: 'none', backgroundColor: '#ffffff',textAlign: 'center',fontSize: 24,
    fontFamily: "Helvetica",cursor: 'pointer',lineHeight:'30px'
};

var backgroundStyle={
    color: '#ffffff',width: "100%", border: 'none', backgroundColor: '#ef5b2e',textAlign: 'center',fontSize: 24,
    fontFamily: "Arial",cursor: 'pointer',float:'left',lineHeight:'30px', verticalAlign: 'middle'
};

var imgStyle={
    color: '#ffffff',width: 80, height: 80, margin: "3%"
};

var leftStyle={
    float: "left", width: "35%", textAlign: 'right', paddingRight: 35
};
var rightStyle={
    float: "left", textAlign: 'center', width: "50%", fontSize: 16
};
var rest={
    float: "left", width: "15%"
};

var emailStyle={
    width: 240, padding: 10, marginRight: 10, fontSize: 15, backgroundColor: "#ffffff", color: "#ef5b2e", borderRadius: 3
};

var submitButtonStyle={
    width: 77, height: 38,  fontSize: 15, backgroundColor: "#ffffff", color: "#ef5b2e", borderRadius: 3
};

var sectionStyle={
    width: "33.3%", float: "left", paddingTop: 20
}

var hrStyle={
    height: "191",width:"0.1"
}
var hrSectionStyle={
    height:"100%",width:"1%",float:"left"
}


var lessThan500 = window.matchMedia( "(max-width: 1000px)" );
var test = "NO"
if(lessThan500.matches){
    sectionStyle = {width: "100%", float: "left"};
    hrStyle = {width: "92%"};
    hrSectionStyle = {height:"100%",width:"99%",float:"left"}
    test = "Yes"
}

const Hero = styled.div`
  width: 100%;
  background: url(${MeetingImage}) no-repeat;
  background-size: cover;
`;

const Container = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  padding: 0 16px;
`;

const HeroContainer = styled.div`
  padding: 200px 0;
  color: white;
  font-size: 48px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
`;

const CenteredSection = styled.div`
  text-align: center;
`;

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  submitEmail() {
    var email = document.getElementById("email").value;
    if (email != "" && isValidEmail(email)) {
      jQuery.ajax({
        url: "https://docs.google.com/a/umich.edu/forms/d/1GO3UU7Nk44PvIQywY-7VZequNgMel2wmXXLg811fElk/formResponse",
        data: {"entry.778832238" : email},
        type: "POST",
        dataType: "xml",
      });
      document.getElementById("email").value("Thanks, you'll hear from us soon!");
    }
  }

  isValidEmail(email) {
    var regString = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return regString.test(email);
  }

  render() {
    return (
      <div>
        <Hero>
          <Container>
            <HeroContainer>
              <FormattedMessage {...messages.header} />
            </HeroContainer>
          </Container>
        </Hero>
        <Container>
          <CenteredSection>
            <h2>Learn. Create. Repeat.</h2>
            <p>Michigan Hackers exists to foster a community of individuals who enjoy expressing creativity through technology.</p>
          </CenteredSection>
        </Container>

        <div style = {former}>

        </div>

        <div style = {backgroundStyle}>

          <div style = {sectionStyle}>
            <div style={{height:"100%",width:"99%",float:"left"}}>
              <p style={{fontFamily:"Arial"}}><b>WHERE WE ARE</b></p>
              <div style = {leftStyle}>
                <a style = {imgStyle} href = "https://www.google.com/maps/place/University+of+Michigan+-+TechArb">
                  <img src = {img_mp} align = "right" height = "59" width = "35" />
                </a>
              </div>
              <div style = {rightStyle}>
                500 E Washington St #10,<br/> Ann Arbor, MI 48104
              </div>
              <div style = {rest}>
              </div>
            </div>
            <div style={hrSectionStyle}>
              <hr style={hrStyle} color = "#ffffff"/>
            </div>
          </div>

          <div style = {sectionStyle}>
            <div style={{height:"100%",width:"99%",float:"left"}}>
              <p><b>GET IN TOUCH</b></p>
              <p>
                <input type="text" id="email" background-color= "#ffffff" name="emailResponse" placeholder="michiganhackers@umich.edu" style = {emailStyle} />
                <button type="button" onClick={this.submitEmail} style = {submitButtonStyle}>Submit</button>
              </p>
              <p style = {{fontSize: "14"}}>We would love to hear from you!</p>
            </div>
            <div style={hrSectionStyle}>
              <hr style={hrStyle} color = "#ffffff"/>
            </div>
          </div>



          <div style = {sectionStyle}>
            <p><b>REACH OUT TO US</b></p>
            <div style={{width:"100%",float:"left"}}>
              <a style = {imgStyle} href = "https://www.facebook.com/michiganhackers">
                <img src = {img_fb} height = "80" width = "80" />
              </a>
              <a style = {imgStyle} href = "mailto:michiganhackers@umich.edu">
                <img src = {img_mail} height = "80" width = "80" />
              </a>
              <a style = {imgStyle} href = "https://github.com/michiganhackers">
                <img src = {img_git} height = "80" width = "80" />
              </a>
            </div>
            <br/> <br/><br/>
            <div style={{float:"right",paddingRight:"20", paddingBottom:"10"}}>
              <a>
                <img src = {img_logo} height = "20" width = "130"/>
              </a>
            </div>
          </div>

      </div>



      </div>



    );
  }
}
