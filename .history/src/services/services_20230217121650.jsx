import React from 'react'
import { Container, Row, Col} from 'reactstrap'
import { motion } from 'framer-motion'

const services = () => {
  return <section className="services">
    <Container>
        <Row>
            <Col lg='3' md='4'>
                <div className="service__item">
                    <span><i class="ri-truck-line"></i></span>
                    <div>
                        <h3>Free Shipping</h3>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default services