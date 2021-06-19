import React from "react";
import { Container, Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import logo from "../images/logo.png";
import "./Header.css";

function Header2() {
  return (
    <div className="headerC">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <i className="fab fa-typo3 logo" />
          <Navbar.Brand href="#home" className="text-light">
            MTD Bank
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link href="#features" className="text-light">
                About Us
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-light">
                Product
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-light">
                Package
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-light">
                Contact
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/signIn">
                <div className="header__option">
                  <span className="header__lineOne">Hello</span>
                  <span className="header__lineTwo">Sign in</span>
                </div>
              </Nav.Link>
              <Nav.Link eventKey={2} href="/register">
                <div className="header__option">
                  <span className="header__lineOne">New User</span>
                  <span className="header__lineTwo">Register</span>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header2;
