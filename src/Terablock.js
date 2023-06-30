import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

function Terablock() {
  return (
    <section id="terablock" className='pos-rel'>
        <Container>
            <div className='sec-heading'>
                <h1>What makes TeraBlock better?</h1>
            </div>
            <Row>
                <Col md={4} xs={6} className='tera-box-card' >
                <Card className="card card-box pt-4 pb-4 pe-4" >
                <Card.Body>
                    <div className="card-incos">
                        <img src="./img/Easy.png"/>
                    </div>
                  <Card.Title>Making investing easy.</Card.Title>
                  <Card.Text>
                  Simplest platform to start trading cryptocurrencies with no prior experience.
                  </Card.Text>
                </Card.Body>
              </Card>
                </Col>
                <Col md={4} xs={6} className='tera-box-card'>
                <Card className="card card-box pt-4 pb-4 pe-4" >
                <Card.Body>
                    <div className="card-incos">
                        <img src="./img/Easy.png"/>
                    </div>
                  <Card.Title>Diversified investing.</Card.Title>
                  <Card.Text>
                  Create your own portfolio, or invest in decetralised staking pools to earn attractive interest rates.
                  </Card.Text>
                </Card.Body>
              </Card>
                </Col>
                <Col md={4} xs={6} className='tera-box-card'>
                <Card className="card card-box pt-4 pb-4 pe-4" >
                <Card.Body>
                    <div className="card-incos">
                        <img src="./img/Easy.png"/>
                    </div>
                  <Card.Title>Transparent pricing.</Card.Title>
                  <Card.Text>
                  Keep things simple with no extra subscription or management fees, only pay standard trading fees.
                  </Card.Text>
                </Card.Body>
              </Card>
                </Col>
                <Col md={4} xs={6} className='tera-box-card' >
                <Card className="card card-box pt-4 pb-4 pe-4" >
                <Card.Body>
                    <div className="card-incos">
                        <img src="./img/Easy.png"/>
                    </div>
                  <Card.Title>Track your finances.</Card.Title>
                  <Card.Text>
                  Connect all Web3 wallets and manage your decentalised financial life in one place.
                  </Card.Text>
                </Card.Body>
              </Card>
                </Col>
                <Col md={4} xs={6} className='tera-box-card'>
                <Card className="card card-box pt-4 pb-4 pe-4" >
                <Card.Body>
                    <div className="card-incos">
                        <img src="./img/Easy.png"/>
                    </div>
                  <Card.Title>Buy crypto instantly.</Card.Title>
                  <Card.Text>
                  Easily buy cryptocurrencies with bank card directly to a web3 wallet. 
                  </Card.Text>
                </Card.Body>
              </Card>
                </Col>
                <Col md={4} xs={6} className='tera-box-card'>
                <Card className="card card-box pt-4 pb-4 pe-4" >
                <Card.Body>
                    <div className="card-incos">
                        <img src="./img/Easy.png"/>
                    </div>
                  <Card.Title>Non custodial.</Card.Title>
                  <Card.Text>
                  Your crypto in your control! You retain full custody of your funds at all times.
                  </Card.Text>
                </Card.Body>
              </Card>
                </Col>
                
               
                
            </Row>
        </Container>

    </section>
    
    
  )
}

export default Terablock
