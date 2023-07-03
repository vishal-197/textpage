import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Herobanner() {
  return (
    <section id="herosection" className="pos-rel">
      <Container>
        <Row className="pt-4 pb-4">
          <Col md={6} xs={12}>
            <div className="hero-banner-left">
              <div className="sub-headaing">
                <h6>
                  <img src="./img/Frame1.png" /> Your crypto in your control
                </h6>
              </div>
              <h1>Investing in crypto made better</h1>
              <p>
                Truly decentralised app that gives you the tools, inspiration,
                and support you need to become a better crypto investor.
              </p>
              <Button variant="primary" size="lg" className="me-4">
                Get Started
              </Button>
              <Button variant="primary" size="lg">
                Launch App
              </Button>
              <div className="news-img">
                <img src="./img/Group 5332.png" />
              </div>
            </div>
          </Col>
          <Col md={6} xs={12}>
            <div className="hero-banner-right">
              <div className="img-box">
                <img src="./img/iphone-12.png" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Herobanner;
