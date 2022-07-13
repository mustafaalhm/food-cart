import React from 'react'
import Slider from 'react-slick'

// import images avatar
import ava01 from '../../../assets/images/ava-1.jpg'
import ava02 from '../../../assets/images/ava-2.jpg'
import ava03 from '../../../assets/images/ava-3.jpg'

import '../../../Styles/slider.css'
const Testimonial = () => {
    const settings ={
    dots:true,
    autoplay:true,
    infinite:true,
    speed:3000,
    autoplaySpeed:3000,
    awipeToSlider:true,
    slidesToShow:1,
    slidesToScrool:1,

    }
  return <Slider {...settings}>
    <div>
      <p className="review__text">
       " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate non expedita atque
         quod ex et nesciunt corporis hic rerum adipisci, 
        dolores debitis dolorem ratione distinctio. Distinctio ex soluta unde pariatur."
      </p>
      <div className='slider__content d-flex align-items-center gap-3'>
        <img src={ava01} alt="" />
        <h2>maged</h2>
      </div>
    </div>
    <div>
    <p className="review__text">
       " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate non expedita atque
         quod ex et nesciunt corporis hic rerum adipisci, 
        dolores debitis dolorem ratione distinctio. Distinctio ex soluta unde pariatur."
      </p>
      <div className='slider__content d-flex align-items-center gap-3'>
        <img src={ava02} alt="" />
        <h2>elaza</h2>
      </div>
    </div>
    <div>
    <p className="review__text">
       " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate non expedita atque
         quod ex et nesciunt corporis hic rerum adipisci, 
        dolores debitis dolorem ratione distinctio. Distinctio ex soluta unde pariatur."
      </p>
      <div className='slider__content d-flex align-items-center gap-3'>
        <img src={ava03} alt="" />
        <h2>Mickel </h2>
      </div>
    </div>

  </Slider>
}

export default Testimonial