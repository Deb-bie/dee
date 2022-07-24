import React from "react"
import FlashCard from "./FlashCard"
import "./Flash.css";
import PropertyList from './trial.jsx'

import BoltIcon from '@mui/icons-material/Bolt';





const FlashDeals = ({ productItems, addToCart }) => {
  return (
    <>
      <section className='flash'>
        <div className='flashContainer'>
          <div className='heading f_flex flashHeading'>
            <BoltIcon className="bolt" />
            <h1>Flash Deals</h1>
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart} />
          {/* <PropertyList productItems={productItems} addToCart={addToCart}/> */}
        </div>
      </section>
    </>
  )
}

export default FlashDeals
