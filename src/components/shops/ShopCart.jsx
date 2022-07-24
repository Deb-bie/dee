import React, { useState } from "react"

import StarRateIcon from '@mui/icons-material/StarRate';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const ShopCart = ({ shopItems, addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      {shopItems.map((shopItems, index) => {
        return (
          <div className='box'>
            <div className='grid-product'>
              <div className='img'>
                <span className='discount'>{shopItems.discount}% Off</span>
                <img src={shopItems.cover} alt='' />
                {/* <div className='product-like'>
                  <label>{count}</label> <br />
                  <i className='fa-regular fa-heart' onClick={increment}></i>
                </div> */}
              </div>
              <div className='Shop-details'>
                <h3>{shopItems.name}</h3>
                <div className='Shoprate'>
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />

                </div>
                <div className='Shopprice'>
                  <h4>${shopItems.price}.00 </h4>
                  {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                </div>
                <button onClick={() => addToCart(shopItems)}>
                    <AddShoppingCartIcon />
                 </button>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ShopCart
