import React from "react"
import Slider from "react-slick";
import { Ndata } from "../../data/Data"
import {motion} from 'framer-motion'


const Cart = () => {

  const renderSlides = () => 
  Ndata.map((val, index) => (
    <div className="newArrivalsItem" key={index}>
      <div className='img'>
        <motion.img
        whileTap={{ scale: 0.75 }}
        whileHover={{ scale: 1.3 }}
        src={val.cover} alt='' className="newArrivalsImage"  
        />


        {/* <img src={val.cover} alt='' className="newArrivalsImage" /> */}
      </div>
      <div className="newArrivalsTitles">
        <h4>{val.name}</h4>
        <span>${val.price}</span>
      </div>
    </div>
  ));

  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,

    responsive: [
      {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      },
    }]
  }



  return (
    <>
      <div className='content grid product'>
        {/* {Ndata.map((val, index) => {
          return (
            <div className='box' key={index}>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
              <h4>{val.name}</h4>
              <span>${val.price}</span>
            </div>
          )
        })} */}

        <Slider {...sliderSettings}>
          {renderSlides()}
        </Slider>
      </div>
    </>
  )
}

export default Cart
