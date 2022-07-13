import React, { useState, useEffect } from 'react'
import { Container, Row, Col, ListGroupItem, ListGroup } from 'reactstrap';
import '../Styles/hero-section.css'
import Helmet from '../components/Helmet/Helmet';
import heroImg from '../assets/images/hero.png'
import { Link } from 'react-router-dom';
import Category from '../components/Ui/Category/Category';
import '../Styles/home.css'
import ProductCard from '../components/Ui/product-card/ProductCard';
import products from '../assets/fake-data/products.js';

// import img data
import featureImg01 from '../assets/images/service-01.png'
import featureImg02 from '../assets/images/service-02.png'
import featureImg03 from '../assets/images/service-03.png'
import foodCategoryImg01 from '../assets/images/hamburger.png'
import foodCategoryImg02 from '../assets/images/pizza.png'
import foodCategoryImg03 from '../assets/images/bread.png'
import networkImg from '../assets/images/network.png'
import whyImg from '../assets/images/location.png'
import Testimonial from '../components/Ui/slider/TestimonialSlider';





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
  const [category, setCategory] = useState('All');
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    if (category === 'All') {
      setAllProducts(products)
    } else {
      const filteredData = products.filter(item => item.category === category);
      setAllProducts(filteredData);
    }
  }, [category]);
  useEffect(() => {
    const filteredPizza = products.filter(item => item.category === 'Pizza');
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, [])
  return (
    <Helmet title='Home'>
      {/* hero section  */}
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
      {/* category section */}
      <section className='pt-0'>
        <Category />
      </section>
      {/* servece section */}
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
                <Col lg='4' md='4' sm='6' key={index} className='mt-4'>
                  <div className='feature__item text-center px-5 py-3'>
                    <img src={item.imgUrl} alt="" className='w-25 mb-3' />
                    <h5 className='fw-bold mb-3'>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </Col>
              ))

            }


          </Row>
        </Container>
      </section>
      {/* popular foods section */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2>Popular Foods</h2>
            </Col>
            <Col lg='12'>
              <div className="food__category d-flex align-items-center justify-content-center gap-5">
                <button className={`all__btn ${category === 'All' ? 'foodBtnActive' : ' '}`} onClick={() => setCategory('All')}>All</button>
                <button className={`d-flex align-items-center gap-2 ${category === 'Burger' ? 'foodBtnActive' : ' '}`} onClick={() => setCategory('Burger')}><img src={foodCategoryImg01} alt="" />Burger</button>
                <button className={`d-flex align-items-center gap-2 ${category === 'Pizza' ? 'foodBtnActive' : ' '}`} onClick={() => setCategory('Pizza')}><img src={foodCategoryImg02} alt="" />Pizza</button>
                <button className={`d-flex align-items-center gap-2 ${category === 'Bread' ? 'foodBtnActive' : ' '}`} onClick={() => setCategory('Bread')}><img src={foodCategoryImg03} alt="" />Bread</button>
              </div>
            </Col>
            {
              allProducts.map(item => (
                <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mt-5'>
                  <ProductCard item={item} />
                </Col>
              ))
            }

          </Row>
        </Container>
      </section>
      {/* why section */}
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <img src={whyImg} alt="" className='w-100' />
            </Col>
            <Col lg='6' md='6'>
              <div className="why__tasty-treat">
                <h2 className="tasty-treat__title mb-4">Why <span> tasty treat ?</span></h2>
                <p className='tasty-treat__desc'>Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Minus quas sit, autem vero nulla quibusdam
                  ab et voluptate voluptas atque!</p>

                <ListGroup className='mt-5'>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose-us__title d-flex align-items-center gap-2'> <i className="ri-checkbox-circle-line"></i>
                      fresh and tasty food</p>
                    <p className='choose-us__desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, maiores?</p>
                  </ListGroupItem>

                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose-us__title d-flex align-items-center gap-2'><i className="ri-checkbox-circle-line"></i> Quality support </p>
                    <p className='choose-us__desc' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti.</p>
                  </ListGroupItem>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose-us__title d-flex align-items-center gap-2 '><i className="ri-checkbox-circle-line"></i> Order from any Location </p>
                    <p className='choose-us__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti.</p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* hot pizza */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2>Hot Pizza</h2>
            </Col>
            {
              hotPizza.map((item) => (
                <Col lg='3' md='3' key={item.id}>
                  <ProductCard item={item} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
      {/* network */}
      <section>
        <Container>
          <Row>
              <Col lg='6' md='6'>
              <div className='testimonial'>
                <h5 className='testimonial__subtitle mb-4'>testimonial</h5>
                <h2 className='testimonial__title mb-4'>What our <span>Customers</span> are saying</h2>
                <p className='testimonial__desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Praesentium quae rerum non quidem earum iure voluptas vel odio, perferendis veniam!</p>
              <Testimonial/>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <img src={networkImg} alt="" className='w-100' />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home