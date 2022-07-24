import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {Ddata} from "../../data/Data"
import "../newArrivals/NewArrivals.css";



import { motion } from 'framer-motion'





const Dcard = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,

    responsive: [{
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
      <Slider {...settings}>
        {Ddata.map((value, index) => {
          return (
            <>
              <div className='discountProduct' key={index}>
                <div className='img'>
                  <motion.img 
                    whileTap={{ scale: 0.75}}
                    whileHover={{ scale: 0.75}}
                    src={value.cover} alt='' width='100%' />
                  {/* <img src={value.cover} alt='' width='100%' /> */}
                </div>
                <h4>{value.name}</h4>
                <span>{value.price}</span>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default Dcard
