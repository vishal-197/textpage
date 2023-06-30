import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Power() {
  return (
    <section id="powerful-section" className='pos-rel'>
        <Container>
            <Row className=''>
            <Col md={3} xs={12} className='heading-box'>
                <div className='powerful-title'>
                    <h1><span className='heading'>The Powerful,</span> TeraBlock <span></span></h1>
                </div>
                </Col>
            <Col md={3} xs={12}>
                <div className='card-box-inner'>
                    <h2>Non Custodial</h2>
                    <p>Nobody can suspend your wallet, freeze your money, or stop your transactions.</p>
                </div>
                </Col>
            <Col md={3} xs={12}>
                <div className='card-box-inner'>
                    <h2>Completely de-Googled</h2>
                    <p>Nobody can suspend your wallet, freeze your money, or stop your transactions.</p>
                </div>
                </Col>
            <Col md={3} xs={12}>
                <div className='card-box-inner'>
                    <h2>Completely de-Googled</h2>
                    <p>Nobody can suspend your wallet, freeze your money, or stop your transactions.</p>
                </div>
                </Col>

            </Row>

        </Container>
    </section>
  )
}

export default Power