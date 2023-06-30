import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function Header() {
  return (
    <header id="header">
      <div className="header-top">
        <Navbar collapseOnSelect expand="lg" className="">
          <Container fluid>
            <Navbar.Brand href="#home">
              <img src="./img/logo.png" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Prices</Nav.Link>
                <Nav.Link href="#pricing">Learn</Nav.Link>
                <Nav.Link href="#pricing">Products</Nav.Link>
                <Nav.Link href="#pricing">Help Center</Nav.Link>
                <Nav.Link href="#pricing">Community</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link eventKey={2} href="#memes">
                  Launch App{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </Container>
        </Navbar>
      </div>
    </header>
  );
}

export default Header;
