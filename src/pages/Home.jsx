import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import '../Styles/hero-section.css'
import Helmet from '../components/Helmet/Helmet';
import heroImg from '../assets/images/hero.png'
import { Link } from 'react-router-dom';
import Category from '../components/Ui/Category/Category';
import '../Styles/home.css'

// import img data
import featureImg01 from '../assets/images/service-01.png'
import featureImg02 from '../assets/images/service-02.png'
import featureImg03 from '../assets/images/service-03.png'

const featureData = [
  {
    title: 'Quicke Delivery',
    imgUrl: featureImg01,
    desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, voluptatum?'
  },
  {
    title: 'Super dine Up',
    imgUrl: featureImg02,
    desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, voluptatum?'
  },
  {
    title: 'Easy pick up',
    imgUrl: featureImg03,
    desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, voluptatum?'
  },

]
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
      <section className='pt-0'>
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h5 className='feature__subtitle mb-4'>What We Serve?</h5>
              <h2 className='feature__title'>Just Sit Back At Home</h2>
              <h2 className='feature__title'>we will <span>take care</span></h2>
              <p className='mb-1 bt-4  feature__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, vero?</p>
              <p className=' feature__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, vero?</p>

            </Col>
            {
              featureData.map((item, index) => (
                <Col lg='4' md='4' key={index} className='mt-4'>
                  <div className='feature__item text-center px-5 py-3'>
                    <img src={item.imgUrl} alt=""  className='w-25 mb-3'/>
                    <h5 className='fw-bold mb-3'>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </Col>
              ))

            }


          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home