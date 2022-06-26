import React from 'react'
import '../../Styles/footer.css'
import logo from '../../assets/images/res-logo.png'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
const Footer = () => {
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='3' md='4' sm='6'>
          <div className="logo footer__logo text-start">
            <img src={logo} alt="" />
            <h5 className='footer__title'>Tasty Treat</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est non mollitia officia, beatae minus dignissimos.</p>
          </div>
        </Col>
        <Col lg='3' md='4' sm='6'>
          <h4>Delivery Time</h4>
          <ListGroup className="delivery__time__list">
            <ListGroupItem className="delivery__time__item border-0 ps-0">
              <span>Sunday - Thursday</span>
              <p>10:00 am to 10:00 pm</p>
            </ListGroupItem>

            <ListGroupItem className="delivery__time__item border-0 ps-0">
              <span>Friday - Satrday</span>
              <p>Off</p>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col lg='3' md='4' sm='6'>
          <h4>Contact</h4>
          <ListGroup className="delivery__time__list">
            <ListGroupItem className="delivery__time__item border-0 ps-0">
              <p>Location : Cairo</p>

            </ListGroupItem>
            <ListGroupItem className="delivery__time__item border-0 ps-0">
              <span>Phone:01124612215</span>

            </ListGroupItem>

            <ListGroupItem className="delivery__time__item border-0 ps-0">
              <span>Email: Mustafa@yahoo.com</span>

            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col lg='3' md='4' sm='6'>
          <h5 className="fotter_title">NewsLetter</h5>
          <p>Subscribe our NewsLetter</p>
          <div className="newsletter">
            <input type="email" placeholder='please enter email' />
            <span><i className="ri-send-plane-line"></i></span>
          </div>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col lg='6' md='6'>
          <p className='copyright__text'>Copyright reserved 2022 made by mustafa alhm</p>
        </Col>
        <Col lg='6' md='6'>
          <div className="social__links d-flex align-items-center  gap-4 justify-content-end">
            <p className='m-0'>Follow :</p>
            <span><Link to='#'><i className="ri-facebook-line"></i></Link></span>
            <span><Link to='#'><i className="ri-github-line"></i></Link></span>
            <span><Link to='#'><i className="ri-youtube-line"></i></Link></span>
            <span><Link to='#'><i className="ri-linkedin-line"></i></Link></span>
          </div>
        </Col>

      </Row>
    </Container>
  </footer>
}

export default Footer