import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";


import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import StarRateIcon from '@mui/icons-material/StarRate';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';






const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='rightControl' onClick={onClick}>
      <button className='next'>
        <ArrowRightAltIcon />
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='leftControl' onClick={onClick}>
      <button className='prev'>
      <KeyboardBackspaceIcon />
      </button>
    </div>
  )
}
const FlashCard = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const settings = {
    dots: false,
    infinite: true,
    centerPadding: "50px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,


    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        }
      },

      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      }
    ]

  }

  return (
    <>
      <Slider {...settings}>
        {productItems.map((productItems) => {
          return (
            <div className='box'>
              <div className='product mtop'>
                <div className='img'>
                  <span className='discount'>{productItems.discount}% Off</span>
                  <img src={productItems.cover}  alt='' />
                  {/* <div className='product-like'>
                    <label>{count}</label> <br />
                    <FavoriteIcon onClick={increment} />
                  </div> */}
                </div>
                <div className='flashProductDetails'>
                  <h3>{productItems.name}</h3>
                  <div className='flashProductRate' style={{margin: "10px 0px"}}>
                    <StarRateIcon />
                    <StarRateIcon />
                    <StarRateIcon />
                    <StarRateIcon />
                    <StarRateIcon />
                  </div>
                  <div className='flashPrice' style={{margin: "0px"}}>
                    <h4>${productItems.price}.00 </h4>
                    {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                    
                  </div>
                  <button onClick={() => addToCart(productItems)}>
                      <AddShoppingCartIcon />
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default FlashCard
