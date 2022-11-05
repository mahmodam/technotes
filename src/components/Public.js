// npm i react-router-dom
//import { Link } from "react-router-dom";

import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import NavDropdown from 'react-bootstrap/NavDropdown';

function Public() {
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            Welcome to <span className="nowrap"> Technotes </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/login">Login</Nav.Link>
              {/* <Nav.Link href="/user/new">New User</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section className="public">
        <main className="public__main">
          <p>
            We are a small family business that has been in operation for over
            30 years. You can login to your account and create your own notes.
          </p>
          <address className="public__addr">
            Our address is: 1234 Main Street, Anytown, USA
            <br />
            555 Foo Drive
            <br />
            Foo City, CA 12345
            <br />
            <a href="tel:+972584443338">tel: +972 0584443338</a>
          </address>
        </main>
        <footer>
          <p>Owner: Mahmod's Technotesltd</p>
        </footer>
      </section>
    </>
  );
}

export default Public;
