import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-browser-router";

function Quiz() {
  return (
    <section id="crypto-invets" class="pos-rel">
      <div className="section-heading">
        <h1>
          Want to know how you can make the most of crypto investments? Take our
          quiz <span></span>
        </h1>
      </div>
      <Container>
        <Row className="outer-row">
          <Col md={3} xs={12}>
            <Card
              className="card card-box pt-4 pb-4 ps-4 pe-4"
              style={{ width: "16.5rem" }}
            >
              <Card.Body>
                <div className="card-top-row">
                  <div className="card-incos">
                    <img src="./img/Frame2.png" />
                  </div>
                </div>
                <Card.Title>I’m a student</Card.Title>
                <Link to="">
                  Continue{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} xs={12}>
            <Card
              className="card card-box pt-4 pb-4 ps-4 pe-4"
              style={{ width: "16.5rem" }}
            >
              <Card.Body>
                <div className="card-top-row">
                  <div className="card-incos">
                    <img src="./img/Rectangle01.png" />
                  </div>
                </div>
                <Card.Title>I’m working</Card.Title>
                <Link to="">
                  Continue{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} xs={12}>
            <Card
              className="card card-box pt-4 pb-4 ps-4 pe-4"
              style={{ width: "16.5rem" }}
            >
              <Card.Body>
                <div className="card-top-row">
                  <div className="card-incos">
                    <img src="./img/Rectangle05.png" />
                  </div>
                </div>
                <Card.Title>I’m unemployed</Card.Title>
                <Link to="">
                  Continue{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} xs={12}>
            <Card
              className="card card-box pt-4 pb-4 ps-4 pe-4"
              style={{ width: "16.5rem" }}
            >
              <Card.Body>
                <div className="card-top-row">
                  <div className="card-incos">
                    <img src="./img/Rectangle06.png" />
                  </div>
                </div>
                <Card.Title>I’m retired</Card.Title>
                <Link to="">
                  Continue{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Quiz;
