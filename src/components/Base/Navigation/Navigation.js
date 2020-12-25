import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar collapseOnSelect expanded={expanded} expand="sm" fixed="top" bg="dark" variant="dark">
        <NavLink className="navbar-brand" to="/">SpaceX Launches Tracker</NavLink>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" label="Toggle navigation" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="nav-link"
              onClick={() => setExpanded(expanded ? false : "expanded")}
              to="/upcoming">Upcoming Launches</NavLink>
            <NavLink className="nav-link"
              onClick={() => setExpanded(expanded ? false : "expanded")}
              to="/past">Past Launches</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="mb-5"></div>
    </>
  );
}

export default Navigation;