import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import './residencies.css'
import data from '../utils/slider.json'
import { sliderSettings } from '../utils/common';


const Residenices = () => {
  return (
    <div className='container overflow' id='residencies'>
      <div className='position'>
        <h3 className='orangeText'>Best Choices</h3> 
        <h2 className='purpleText fw-bolder'>Popular Residencies</h2>
      </div>
      <div className='py-5'>
        <Swiper {...sliderSettings}>
          <SliderButtons/>
          {data.map((card,i) => (
            <SwiperSlide key={i}>
              <div>
              <div className="card hoverEffect">
                <img src={card.image} className="card-img-top r-img" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title orangeText">$ {card.price}</h5>
                  <h5 className="card-title purpleText fw-bold">{card.name}</h5>
                  <p className="card-text">{card.detail}</p>
                </div>
              </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Residenices


const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="r-button">
      <button className='btn btn-style' onClick={()=> swiper.slidePrev()}><i className="fa-regular fa-less-than"></i></button>
      <button className='btn btn-style' onClick={()=> swiper.slideNext()}><i className="fa-solid fa-greater-than"></i></button>
    </div>
  )
}
