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
import Media from 'react-media'

import img_fb from './img/sq_fbr.png';
import img_mail from './img/sq_mailr.png';
import img_git from './img/sq_gitr.png';
import img_mp from './img/mp.png';
import img_logo from './img/logo_h.png'

//import css from './css/main.css';
//console.log(css);


var blank={
    color: '#ffffff',width: "100%",height: "18", border: 'none', backgroundColor: '#ef5b2e',textAlign: 'center',fontSize: 24,
    fontFamily: "Arial",cursor: 'pointer',float:'left',lineHeight:'30px', verticalAlign: 'middle'
};

var backgroundStyle={
    color: '#ffffff',width: "100%", border: 'none', backgroundColor: '#ef5b2e',textAlign: 'center',fontSize: 24,
    fontFamily: "Arial",cursor: 'pointer',float:'left',lineHeight:'30px', verticalAlign: 'middle'
};

var imgStyle={
    color: '#ffffff',width: 80, height: 80, margin: "3%"
};

var leftStyle={
    float: "left", width: "35%", textAlign: 'right', paddingRight: 35, paddingTop: 10
};
var rightStyle={
    float: "left", textAlign: 'center', width: "56%", fontSize: 16, paddingTop: 10
};

var emailStyle={
    width: 240, padding: 10, marginRight: 10, fontSize: 15, backgroundColor: "#ffffff", color: "#ef5b2e", borderRadius: 3
};

var submitButtonStyle={
    width: 77, height: 50,  fontSize: 15, backgroundColor: "#ffffff", color: "#ef5b2e", borderRadius: 3
};


var ResizeMixin = {
    componentDidMount: function(){
        window.addEventListener('resize', this._resize_mixin_callback);
    },
    _resize_mixin_callback: function(){
        this.setState({
            viewport: {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            }
        });
    },
    componentWillUnmount: function(){
        window.removeEventListener('resize', this._resize_mixin_callback);
    }
};

//<div style = {backgroundStyle}>

export default class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function

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

        <div style={blank}></div>


        <div style = {backgroundStyle}>

          <div className = "col-md-4">
            <div style={{height:"100%",width:"99%",float:"left",paddingBottom:15}}>
              <p><b>WHERE WE ARE</b></p>
              <div style = {leftStyle}>
                <a style = {imgStyle} href = "https://www.google.com/maps/place/University+of+Michigan+-+TechArb">
                  <img src = {img_mp} align = "right" height = "59" width = "35" />
                </a>
              </div>
              <div style = {rightStyle}>
                500 E Washington St #10,<br/> Ann Arbor, MI 48104
              </div>
            </div>
            <Media query="(max-width: 992px)">
              {matches => matches ? (
                <hr style={{width:"95%"}} color = "#ffffff"/>
              ) : (
                <hr style={{height: "115",width:"1"}} color = "#ffffff"/>
              )}
            </Media>
          </div>

          <div className = "col-md-4">
            <div style={{height:"100%",width:"99%",float:"left"}}>
              <p><b>GET IN TOUCH</b></p>
              <div style = {{paddingTop:5}}>
                <input type="text" id="email" background-color= "#ffffff" name="emailResponse" placeholder="michiganhackers@umich.edu" style = {emailStyle} />
                <button type="button" onClick={this.submitEmail} style = {submitButtonStyle}>Submit</button>
              </div>
              <p style = {{fontSize: "14",paddingTop:5}}>We would love to hear from you!</p>
            </div>
            <Media query="(max-width: 992px)">
              {matches => matches ? (
                <hr style={{width:"95%"}} color = "#ffffff"/>
              ) : (
                <hr style={{height: "115",width:"1"}} color = "#ffffff"/>
              )}
            </Media>
          </div>


          <div className = "col-md-4">
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
