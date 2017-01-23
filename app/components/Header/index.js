import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import styled from 'styled-components';
import LogoImage from './logo_h.png';

const HeaderWrapper = styled.div`
  z-index: 1;
  position: relative;
`;

const Skew = styled.div`
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    overflow: visible;
    width: 100%;
    height: 250px;
    background: #ef5b2e;
    z-index: -1;
    transform: skewY(-2deg);
    backface-visibility: initial;
  }
`;

const Content = styled.div`
  padding: 20px;
  margin-left: 0;
  margin-right: 0;
`;

class Header extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand><a><img src={LogoImage} /></a></Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">About</NavItem>
              <NavItem eventKey={1} href="#">Events</NavItem>
              <NavItem eventKey={1} href="#">Sponsors</NavItem>
              <NavItem eventKey={1} href="#">Contact</NavItem>
              <NavItem eventKey={1} href="#">Login</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default styled(Header)`
  .navbar {
    border: none;
    margin-bottom: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  .navbar-default {
    background-color: transparent;
    color: white;
  }
  .navbar-default .container {
    padding: 10px;
  }
  .navbar-default .navbar-nav>li>a {
    color: white;
    font-size: 14px;
    text-transform: uppercase;
  }
  .navbar-default .navbar-nav>li>a:hover {
    color: #ef5b2e
  }
  .navbar-default .navbar-toggle {
    border: none;
    background-color: transparent;
  }
  .navbar-default .navbar-toggle:hover {
    background-color: transparent;
  }
  .navbar-default .navbar-toggle .icon-bar {
    background-color: white;
  }
  .navbar-default .navbar-toggle:hover .icon-bar {
    background-color: #ef5b2e;
  }
  .navbar-brand {
    padding: 0;
  }
  .navbar-brand>img {
    height: 100%;
    padding: 8px;
    width: auto;
  }
`;
