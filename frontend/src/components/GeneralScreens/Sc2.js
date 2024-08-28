import React from 'react'
import styled from 'styled-components'
import {Row, Col} from 'react-bootstrap'
import v1 from '../../Assets/v1.jpg'
import v2 from '../../Assets/v2.jpg'
import v3 from '../../Assets/v3.jpg'
import Team from './Team'
import TestimonialSlider from './Testimonials'
import Sc3 from './Sc3'

export default function Sc2() {
  return (
    <Styles>
      <Row>
        <Col md='4'>
        <div className="card">
            <img 
                src={v1}
                alt="Warehouse Inventory" 
                className="card-image"
            />
            <div className="card-content">
                <h2 className="card-title">Warehouse on Hand Inventory</h2>
                <p className="card-description">
                    Albatross, a distinguished logistics company, meticulously manages its warehouse on-hand inventory to ensure efficiency, accuracy, and seamless operations to improve customer satisfaction.
                </p>
                <a href="#" className="card-button">Read More</a>
            </div>
        </div>
        </Col>

        <Col md='4'>
        <div className="card">
            <img 
                src={v2}
                alt="Warehouse Inventory" 
                className="card-image"
            />
            <div className="card-content">
                <h2 className="card-title">Minimize cost of Manufacturing</h2>
                <p className="card-description">
                Albatross, a forward-thinking logistics company, has strategically approached minimizing the cost of manufacturing through a combination of innovative practices and strategic partnerships.
                </p>
                <a href="#" className="card-button">Read More</a>
            </div>
        </div>
        </Col>

        <Col md='4'>
        <div className="card">
            <img 
                src={v3}
                alt="Warehouse Inventory" 
                className="card-image"
            />
            <div className="card-content">
                <h2 className="card-title">Documents & Electronic data</h2>
                <p className="card-description">
                Albatross exemplifies efficiency in managing documents and electronic data through a robust system tailored to the complexities of the shipping and transportation industry.
                </p>
                <a href="#" className="card-button">Read More</a>
            </div>
        </div>
        </Col>
      </Row>
      <Row>
      <div className="hero-container">
            <div className="hero-content">
                <h3>Your Package, Your Rules</h3>
                <h1>The Best Possible Service In The Sphere Of Optimized Route Of Cargo & Transportation Worldwide</h1>
                <button className="hero-button">Schedule an Appointment</button>
            </div>
        </div>
      </Row >
      <Row style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Team />
      </Row>
      <Row className='yela'>
        <center><h3 style={{color: '#165153'}}>What they say about us</h3></center>
        <TestimonialSlider />
      </Row>
      <Row>
        <Sc3 />
      </Row>
    </Styles>
  )
}

const Styles = styled.div`
.yela {
margin-top: 40px;
background-color: rgba(0, 0, 0, 0.1);
}
.card {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    max-width: 400px;
    margin: 20px;
}

.card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card-content {
    padding: 20px;
}

.card-title {
    font-size: 28px;
    color: black; /* Black color */
    margin-bottom: 15px;
}

.card-description {
    font-size: 19px;
    color: #333;
    margin-bottom: 20px;
    font-weight: bold;
}

.card-button {
    background-color: #f97316; /* Orange color */
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
}
/* HeroSection.css */
.hero-container {
    background-image: url('your-image-source.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.hero-content {
    color: white;
    max-width: 800px;
    padding: 20px;
    background-color: #165153;
}

.hero-content h3 {
    font-size: 24px;
    margin-bottom: 10px;
}

.hero-content h1 {
    font-size: 48px;
    margin-bottom: 20px;
}

.hero-button {
    background-color: #f97316; /* Orange color */
    color: white;
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
}

.hero-button:hover {
    background-color: #ea640a;
}

`;