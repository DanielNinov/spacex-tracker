import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" fixed="top" bg="dark" variant="dark">
        <Navbar.Brand to="/">SpaceX Launches Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" label="Toggle navigation"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="nav-link" to="/upcoming">Upcoming Launches</NavLink>
            <NavLink className="nav-link" to="/past">Past Launches</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="mb-5"></div>
    </>
  );
}

export default Navigation;