import React from "react";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <Styles>
      <Container>
        <Row className="align-items-center">
          <Col md="3" className="text-center">
            <IconWrapper>
              <FontAwesomeIcon icon={faPaw} />
            </IconWrapper>
          </Col>
          <Col md="9" className="text-center">
            <FooterTitle>Albatross</FooterTitle>
          </Col>
        </Row>
        <Row className="text-center">
          <Col md="4">
            <SectionTitle>Location</SectionTitle>
            <p className="location">Colombus, Nebraska</p>
            <p className="location">United States</p>
          </Col>
          <Col md="4">
            <SectionTitle>Contact</SectionTitle>
            <ContactLink href="mailto:albatrossexpress1968@gmail.com">
              ✉️ albatrossexpress1968@gmail.com
            </ContactLink>
          </Col>
          <Col md="4">
            <SectionTitle>Join Us</SectionTitle>
            <SocialLink href="#">
              Facebook
            </SocialLink>
            <SocialLink href="#">
              Customer Support
            </SocialLink>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
};

export default Footer;

const Styles = styled.div`
  background: black;
  color: white;
  padding: 65px 0;

  @media (max-width: 767px) {
    padding: 30px 0;
  }
`;

const IconWrapper = styled.div`
  font-size: 56px;
  color: burlywood;
  padding: 20px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const FooterTitle = styled.h2`
  font-size: 2.3rem;
  font-weight: 600;
  color: burlywood;
  font-family: 'Ginger', sans-serif;
  letter-spacing: 5px;
  margin-bottom: 25px;
`;

const SectionTitle = styled.p`
  font-size: 2.3rem;
  font-weight: 200;
  color: burlywood;
  margin-bottom: 10px;
`;

const Location = styled.p`
  font-size: 1.2rem;
`;

const ContactLink = styled.a`
  font-size: 1.2rem;
  color: burlywood;
  text-decoration: none;
  border-bottom: 2px solid burlywood;
  padding-bottom: 2px;
  display: block;
  margin-top: 10px;
`;

const SocialLink = styled.a`
  font-size: 1.2rem;
  color: burlywood;
  text-decoration: none;
  border-bottom: 2px solid burlywood;
  padding-bottom: 2px;
  display: block;
  margin: 10px 0;
`;
