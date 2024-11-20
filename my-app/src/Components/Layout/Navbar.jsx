import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext";
import pic from "../Layout/pic.jpg";
import "../Layout/Navbar.css";
import { useNavigate } from "react-router";

const Navbars = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  // Xử lý đăng xuất
  const handleLogout = () => {
    // Xóa token khỏi localStorage
    localStorage.removeItem("token");
    // Cập nhật trạng thái đăng nhập
    setIsLoggedIn(false);
    navigate("/Login");
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        {/* Thay đổi liên kết Navbar.Brand tùy thuộc vào trạng thái đăng nhập */}
        <Navbar.Brand href={isLoggedIn ? "/home" : "/Login"}>
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
          {isLoggedIn ? (
            <>
              <Nav className="me-auto">
                <Nav.Link href="/AddQues">Question</Nav.Link>
              </Nav>
              <Nav>
                {/* Hiển thị Avatar và menu đăng xuất */}
                <NavDropdown
                  title={<img className="img-title" src={pic} alt="Avatar" />}
                  id="collapsible-nav-dropdown"
                >
                  <NavDropdown.Item onClick={handleLogout}>
                    Đăng xuất
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </>
          ) : null}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
