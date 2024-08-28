import React, { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { Nav, Navbar, Container } from "react-bootstrap";
import styled from "styled-components";

const Header = () => {
  const bool = localStorage.getItem("authToken") ? true : false;
  const [auth, setAuth] = useState(bool);
  const { activeUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setAuth(bool);
    setTimeout(() => {
      setLoading(false);
    }, 1600);
  }, [bool]);

  return (
    <Styles>
      <Navbar collapseOnSelect expand="lg" className="navy" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <div className="brand">ALBATROSS</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggle" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="justify-content-end">
              <NavLink className="link" to="/" activeClassName="active">
                HOME
              </NavLink>
              <NavLink className="link" to="/tracking" activeClassName="active">
                TRACK
              </NavLink>
              {auth ? (
                <NavLink className="link" to="/create-post" activeClassName="active">
                  NEW PACKAGE
                </NavLink>
              ) : null}
              <NavLink className="link" to="/about" activeClassName="active">
                ABOUT
              </NavLink>
              <NavLink className="link" to="/meet-the-team" activeClassName="active">
                TEAM
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Styles>
  );
};

export default Header;

const Styles = styled.div`
  .brand {
    font-family: 'Times New Roman', Times, serif;
    color: black;
    font-size: 2.2rem; /* Increased font size for the brand name */
    letter-spacing: 2px;
    padding: 10px 0; /* Added padding for spacing */
  }

  .toggle {
    background: aliceblue;
  }

  .navy {
    background-color: #f8f9fa;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .link {
    font-size: 1.2rem; /* Increased font size for the links */
    text-decoration: none;
    font-weight: 700;
    color: black;
    margin-left: 30px; /* Increased spacing between links */
    padding: 7px 0; /* Added padding to increase clickable area */
    font-family: 'Gaqire';
    position: relative;
    transition: color 0.3s ease, text-decoration 0.3s ease;

    &:hover {
      color: #007bff; /* Change to a blue color on hover */
      text-decoration: underline; /* Add underline on hover */
    }

    &.active {
      color: teal; /* Highlight the active link */
      text-decoration: underline;
    }

    @media (min-width: 768px) {
      font-size: 1.8rem; /* Further increased font size for larger screens */
      margin-left: 50px; /* More spacing on larger screens */
    }

    @media (max-width: 767px) {
      font-size: 1.4rem; /* Still larger on smaller screens */
      margin-left: 20px; /* Adjusted spacing for smaller screens */
    }
  }

  .eor {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
