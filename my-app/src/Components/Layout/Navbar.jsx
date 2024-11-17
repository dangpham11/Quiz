import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";
import pic from "../Layout/pic.jpg";
import "../Layout/Navbar.css";

const Navbars = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Quiz
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/AddQues">Question</Nav.Link>
            <Nav.Link href="/Reigester">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown
              title={
                <img
                  className="img-title"
                  src={pic} // Đường dẫn đến ảnh đại diện của bạn
                  alt="Avatar"
                />
              }
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Đăng xuất</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
