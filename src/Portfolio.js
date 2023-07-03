import React from "react";
import { Container, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function Portfolio() {
  return (
    <section id="profolio-sec" className="pos-rel">
      <div className="heading-sec">
        <h1>Build your truly decentralised crypto portfolio</h1>
        <p>Get started in a few minutes with these easy steps.</p>
      </div>
      <div className="portfolio-box">
        <Container>
          <div className="portfolio-inner-box">
            <Card
              xs={12}
              className="card card-box pt-4 pb-4 ps-4 pe-4"
              style={{ width: "20.5rem" }}
            >
              <Card.Body>
                <div className="card-top-row">
                  <div className="card-incos">
                    <img src="./img/Buy.png" />
                  </div>
                  <div className="box-numb">
                    <h1>1</h1>
                  </div>
                </div>
                <Card.Title>Connect Web3 wallet</Card.Title>
                <Card.Text>
                  Follow simple step by step process to create a new Web3 wallet
                  or connect an existing wallet.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              xs={12}
              className="card card-box pt-4 pb-4 ps-4 pe-4"
              style={{ width: "19.5rem" }}
            >
              <Card.Body>
                <div className="card-top-row">
                  <div className="card-incos">
                    <img src="./img/Rectangle2.png" />
                  </div>
                  <div className="box-numb">
                    <h1>2</h1>
                  </div>
                </div>
                <Card.Title>Add fund to your wallet</Card.Title>
                <Card.Text>
                  The tools and information you need to buy, sell, trade,
                  invest, and manage cryptocurrencies.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              xs={12}
              className="card card-box pt-4 pb-4 ps-4 pe-4"
              style={{ width: "19.5rem" }}
            >
              <Card.Body>
                <div className="card-top-row">
                  <div className="card-incos">
                    <img src="./img/Frame001.png" />
                  </div>
                  <div className="box-numb">
                    <h1>3</h1>
                  </div>
                </div>
                <Card.Title>Start trading instantly</Card.Title>
                <Card.Text>
                  The tools and information you need to buy, sell, trade,
                  invest, and manage cryptocurrencies.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="portfoli-btn">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Portfolio;
