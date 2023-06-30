import React from "react";
import { Container, Row ,Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';


function Investing() {
  return (
    <section id="investing-sec" className="">
      <Container>
        <Row>
          <div className="section-heading">
            <h1>Investing built for a better future <span></span> </h1>
            <p>
              Whether you're starting with $100 or $100 million, we're here to
              help you better invest in cryptocurrencies.
            </p>
          </div>
        </Row>
        <Row className="outer-main-box">
          {/* <Col md={3}> */}
            {/* <div className="investing-card"> */}
            <Card className="card card-box pt-4 pb-4 ps-4 pe-4" style={{ width: '19.5rem' }}>
                <Card.Body>
                    <div className="card-incos">
                        <img src="./img/img1.png"/>
                    </div>
                  <Card.Title>Simplified</Card.Title>
                  <Card.Text>
                  The tools and information you need to buy, sell, trade, invest, and manage cryptocurrencies.
                  </Card.Text>
                  <Card.Text>
                  Get started with as little as <span>$100</span>.
                  </Card.Text>
                </Card.Body>
              </Card>
            {/* </div>
          </Col> */}
          {/* <Col md={3}>
            <div className="investing-card"> */}
              <Card className="card card-box pt-4 pb-4 ps-4 pe-4" style={{ width: '19.5rem' }}>
                <Card.Body>
                    <div className="card-incos">
                        <img src="./img/img1.png"/>
                    </div>
                  <Card.Title>Optimised</Card.Title>
                  <Card.Text>
                  The tools and information you need to buy, sell, trade, invest, and manage cryptocurrencies.
                  </Card.Text>
                  <Card.Text>
                  Get started with as little as <span>$100</span>.
                  </Card.Text>
                </Card.Body>
              </Card>
            {/* </div>
          </Col> */}
          {/* <Col md={3}>
            <div className="investing-card"> */}
              <Card className="card card-box pt-4 pb-4 ps-4 pe-4" style={{ width: '19.5rem' }}>
                <Card.Body>
                    <div className="card-incos">
                        <img src="./img/img1.png"/>
                    </div>
                  <Card.Title>Decentralised</Card.Title>
                  <Card.Text>
                  The tools and information you need to buy, sell, trade, invest, and manage cryptocurrencies.
                  </Card.Text>
                  <Card.Text>
                  Get started with as little as <span>$100</span>.
                  </Card.Text>
                </Card.Body>
              </Card>
            {/* </div>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
}

export default Investing;
