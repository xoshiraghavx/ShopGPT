 import React from 'react'
 import './footer.css'
 import logo from '../../assets/images/eco-logo.png'


import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom';
 const Footer = () => {
   return <footer className="footer">
    <Container>
      <Row>
        <Col lg='4'>
        <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>ShopGPT</h1>
              </div>
        </div>
        <p className="footer_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In consectetur quasi quos laborum alias dolore debitis assumenda dolores illum est.
              </p>
        </Col>
        <Col lg='3'>
          <div className="footer__quick-links">
            <h4 className="quick__links-title">Top Categories</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Mobile Phones</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Mordern Sofa</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Arm Chair</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Smart Watches</Link>
              </ListGroupItem>

            </ListGroup>
          </div>
        </Col>
        <Col lg='2'>
        <div className="footer__quick-links">
            <h4 className="quick__links-title">Useful Links</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='/shop'>Shop</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='/cart'>Cart</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='/login'>Login</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Privacy Policy</Link>
              </ListGroupItem>

            </ListGroup>
          </div>
        </Col>
        <Col lg='3'>
        <div className="footer__quick-links">
            <h4 className="quick__links-title">Contact</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <span><i class="ri-map-pin-line"></i></span>
                <p>123, zindaBazar, Noida, India</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <span><i class="ri-phone-line"></i></span>
                <p>+91 1234567897</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <span><i class="ri-mail-line"></i></span>
                <p>shopgpt@gmail.com</p>
              </ListGroupItem>

                         </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
   </footer>
 }
 
 export default Footer