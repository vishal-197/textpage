import React from 'react'
import { Container, Row , Col } from 'react-bootstrap'

function Happyusers() {
  return (
    <section id="happyusers">
        <Container>
            <Row>
                <Col xs={4}>
                    <div>
                        <span>$ 20,000,000</span><p>Transaction Volume</p>
                    </div>
                </Col>
                <Col  xs={4} >
                    <div>
                        <span>2,234,000,000</span><p>Transaction Volume</p>
                    </div>
                </Col>
                <Col  xs={4}>
                    <div>
                        <span>25,000</span><p>Secure Transactions</p>
                    </div>
                </Col>
                <Col  xs={4}>
                    <div>
                        <span>8,000</span><p>Happy Users</p>
                    </div>
                </Col>
                <Col  xs={4}>
                    <div>
                        <span>24 hrs</span><p>Support</p>
                    </div>
                </Col>
            </Row>
        </Container>

    </section>
   
    

  )
}

export default Happyusers