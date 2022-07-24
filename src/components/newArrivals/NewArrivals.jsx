import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import Cart from "./Cart"
import "./NewArrivals.css"

const NewArrivals = () => {
  return (
    <>
      <section className='NewArrivals background'>
        <div className='NewArrivalsContainer'>
          <div className='newArrivalsHeading'>
            <div className='newArrivalsLeft'>
              <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
              <h2>New Arrivals </h2>
            </div>
            <div className='newArrivalsRight'>
              <span>View all</span>
              <ArrowRightIcon />
            </div>
          </div>
          <Cart />
        </div>
      </section>
    </>
  )
}

export default NewArrivals
