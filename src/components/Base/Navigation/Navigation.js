import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">SpaceX Launches Tracker</NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink className="nav-link" to="/upcoming">Upcoming Launches</NavLink>
          <NavLink className="nav-link" to="/past">Past Launches</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;