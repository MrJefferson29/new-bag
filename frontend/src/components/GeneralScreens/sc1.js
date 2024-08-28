import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import g2 from "../../Assets/g2.jpeg";
import co1 from "../../Assets/co1.png";
import co2 from "../../Assets/co2.png";
import co3 from "../../Assets/co3.png";
import co4 from "../../Assets/co4.png";
import b1 from "../../Assets/b1.jpg";
import Sc2 from './Sc2';

export default function Sc1() {
  return (
    <Styles>
      <HeroSection>
        <TextCol md="6">
          <MainHeading>Safe And Reliable Cargo Solutions.</MainHeading>
          <SubHeading>
            Providing flexible, improved service level, and accelerated delivery!
          </SubHeading>
        </TextCol>
        <ImageCol md="6">
          <StyledImage src={g2} alt="Cargo Solutions" />
        </ImageCol>
      </HeroSection>
      <FeatureSection>
        <Col md="3">
          <Card>
            <img src={co1} className="icon" alt="Efficient Delivery" />
            <h3>Efficient Delivery</h3>
            <p>
              We enhance our logistics operations by relieving you of the worries associated with freight forwarding.
            </p>
            <a href="#" className="learn-more">Learn More</a>
          </Card>
        </Col>
        <Col md="3">
          <Card>
            <img src={co2} className="icon" alt="Transparent Pricing" />
            <h3>Transparent Pricing</h3>
            <p>
              The world of international supply chains involves a myriad of unknown risks and challenging regulations.
            </p>
            <a href="#" className="learn-more">Learn More</a>
          </Card>
        </Col>
        <Col md="3">
          <Card>
            <img src={co3} className="icon" alt="Security For Cargo" />
            <h3>Security For Cargo</h3>
            <p>
              Our facilities meet high security requirements and are certified to the highest local and world standards.
            </p>
            <a href="#" className="learn-more">Learn More</a>
          </Card>
        </Col>
        <Col md="3">
          <Card>
            <img src={co4} className="icon" alt="Warehouse Storage" />
            <h3>Warehouse Storage</h3>
            <p>
              Depending on your product, needs and requirements, we provide professional warehouse activities.
            </p>
            <a href="#" className="learn-more">Learn More</a>
          </Card>
        </Col>
      </FeatureSection>
      <InfoSection>
        <Col md="6">
          <center>
            <StyledImage src={b1} alt="Logistics Solutions" />
          </center>
        </Col>
        <Col md="6">
          <InfoHeading>
            Safe, Reliable And Express Logistic & Transport Solutions That Saves Your Time!
          </InfoHeading>
          <InfoText>
            Albatross Inc. is a representative logistics operator providing full range of service in the sphere of customs clearance and transportation worldwide for any type of cargo.
            <br />
            <br />
            We pride ourselves on providing the best transport and shipping services available all over the world. Our skilled personnel, utilizing the latest communications, tracking and processing software, combined with decades of experience! Through integrated supply chain solutions, Seaborne Freight & Albatross Inc. drives sustainable competitive advantages to some of world’s largest companies.
            <br />
            <br />
            <ul className="custom-list">
              <li>Real-Time Tracking</li>
              <li>24/7 Hours Support</li>
              <li>Easy Payment Methods</li>
              <li>Fast & Efficient Delivery</li>
            </ul>
          </InfoText>
        </Col>
      </InfoSection>
      <Sc2 />
    </Styles>
  );
}

const Styles = styled.div`
  overflow-x: hidden;
`;

const HeroSection = styled(Row)`
  background-color: #165153;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const TextCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;

  @media (min-width: 768px) {
    text-align: left;
    padding: 20px 40px;
  }
`;

const MainHeading = styled.h1`
  color: aliceblue;
  font-weight: 900;
  font-size: 3.5rem;
  margin: 20px;

  @media (min-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 767px) {
    font-size: 3rem;
  }
`;

const SubHeading = styled.h1`
  color: aliceblue;
  font-weight: 700;
  font-size: 2rem;
  margin: 20px;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 767px) {
    font-size: 1.8rem;
  }
`;

const ImageCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  @media (max-width: 767px) {
    margin-top: 30px;
  }
`;

const StyledImage = styled.img`
  width: 70%;
  height: auto;
`;

const FeatureSection = styled(Row)`
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 0 5vh;
`;

const Card = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 3px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .icon {
    width: 100px;
  }

  h3 {
    margin: 20px 0 10px;
    font-size: 1.4rem; /* Increased font size for better visibility */
  }

  p {
    color: #666;
    font-size: 1rem;
    margin-bottom: 20px;
  }

  .learn-more {
    color: #000;
    text-decoration: none;
    font-weight: bold;
    border-bottom: 2px solid #f97316;
    padding-bottom: 2px;
  }
`;

const InfoSection = styled(Row)`
  margin-top: 50px;
  padding: 0 5vh;
`;

const InfoHeading = styled.h1`
  color: black;
  font-weight: 800;
  font-size: 2.4rem;
  margin: 20px;

  @media (min-width: 768px) {
    font-size: 3.4rem;
  }

  @media (max-width: 767px) {
    font-size: 2rem;
  }
`;

const InfoText = styled.p`
  color: black;
  font-size: 1rem;
  margin: 20px;
  font-weight: 300;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 767px) {
    font-size: 0.9rem;
  }

  .custom-list {
    list-style: none;
    counter-reset: custom-counter;
    padding-left: 0;
  }

  .custom-list li {
    counter-increment: custom-counter;
    margin-bottom: 10px;
    padding-left: 30px;
    position: relative;
    font-weight: 600;
  }

  .custom-list li::before {
    content: "✔";
    color: pink;
    font-size: 20px;
    position: absolute;
    left: 0;
    top: 0;
  }
`;
