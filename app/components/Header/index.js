import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import styled from 'styled-components';

class Header extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand><a href="#">Michigan Hackers</a></Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Login</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default styled(Header)`
  .navbar-default {
    background-color: #ef5b2e;
    color: white;
  } 
  .navbar-default .navbar-brand,
  .navbar-default .navbar-nav>li>a {
    color: white;
  }
  .navbar-default .navbar-toggle {
    border-color: white;
  }
  .navbar-default .navbar-toggle:hover {
    background-color: white;
  }
  .navbar-default .navbar-toggle .icon-bar {
    background-color: white;
  }
  .navbar-default .navbar-toggle:hover .icon-bar {
    background-color: #ef5b2e;
  }
`;
