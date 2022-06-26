import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import '../Styles/hero-section.css'
import Helmet from '../components/Helmet/Helmet';
import heroImg from '../assets/images/hero.png'
import { Link } from 'react-router-dom';
import Category from '../components/Ui/Category/Category';
const Home = () => {
  return (
    <Helmet title='Home'>
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero__content">
                <h5 className='m-3'>Easy Way To Make Order</h5>
                <h1 className='mb-4 hero__title'><span>Hungery?</span> just wait <br /> food at<span> your door</span></h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores laborum, consectetur obcaecati explicabo eos deleniti!</p>
                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">Order Now <i className="ri-arrow-right-s-line"></i></button>
                  <button className='all__foods-btn'><Link to='/foods'>See All Foods</Link></button>
                </div>
                <div className="hero__service  d-flex align-items-center gap-5 mt-5">
                  <p className='d-flex align-items-center gap-2'><span className="shipping__icon"><i className="ri-car-line"></i></span>No Shipping Charge</p>

                  <p className='d-flex align-items-center gap-2'><span className="shipping__icon"><i className="ri-shield-check-line"></i></span>100% Secure Checkout</p>


                </div>
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className="hero__image">
                <img src={heroImg} alt="hero-img" className='w-100' />
              </div>
            </Col>
          </Row>
        </Container>

      </section>
      <section>
        <Category/>
      </section>
    </Helmet>
  )
}

export default Home