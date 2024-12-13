import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { NavDropdown } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext";
import pic from "../Layout/pic.jpg";
import "../Layout/Navbar.css";
import { useNavigate } from "react-router";
import { getQuizbyId } from "../../Services/UseService"; // Import function to check quiz by ID

const Navbars = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [quizIdInput, setQuizIdInput] = useState(""); // State to store input quiz ID
  const [error, setError] = useState(""); // State to handle error when quiz not found

  // Handle input change for quiz ID
  const handleQuizIdChange = (e) => {
    setQuizIdInput(e.target.value);
  };

  // Handle form submit to check the quiz ID
  const handleJoinQuiz = async (e) => {
    e.preventDefault();

    try {
      // Check if quiz exists using getQuizbyId
      const data = await getQuizbyId(quizIdInput);
      if (data) {
        navigate(`/info/${quizIdInput}`);
        setQuizIdInput(""); // Redirect to info page if quiz found
      } else {
        setError("Quiz not found.");
      }
    } catch (error) {
      setError("Failed to load quiz. Please try again.");
      console.error(error);
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/Login");
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container className="container-navbar">
        <Navbar.Brand href={isLoggedIn ? "/home" : "/Login"} className="ms-0">
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
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="d-flex justify-content-between"
        >
          {isLoggedIn ? (
            <>
              <Nav className="me-auto">
                <Nav.Link href="/AddQues">Question</Nav.Link>
              </Nav>

              <Form inline onSubmit={handleJoinQuiz}>
                {" "}
                {/* Modify form submit */}
                <Row>
                  <Col xs="auto">
                    <Form.Control
                      type="text"
                      placeholder="Enter Quiz ID"
                      className="mr-sm-2"
                      value={quizIdInput}
                      onChange={handleQuizIdChange}
                    />
                  </Col>
                  <Col xs="auto">
                    <Button type="submit">Join</Button>
                  </Col>
                </Row>
                {error && <div className="text-danger">{error}</div>}{" "}
                {/* Display error message */}
              </Form>

              <Nav className="ms-auto">
                <NavDropdown
                  title={<img className="img-title" src={pic} alt="Avatar" />}
                  id="collapsible-nav-dropdown"
                >
                  <NavDropdown.Item onClick={handleLogout}>
                    Log out
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
