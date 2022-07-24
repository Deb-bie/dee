import ArrowRightIcon from '@mui/icons-material/ArrowRight';


import Dcard from "./Dcard"

const Discount = () => {
  return (
    <>
      <section className='NewArrivals background'>
        <div className='NewArrivalsContainer'>
          <div className='newArrivalsHeading'>
            <div className='newArrivalsLeft'>
              <img src='https://img.icons8.com/windows/32/fa314a/gift.png' />
              <h2>Big Discounts</h2>
            </div>
            <div className='newArrivalsRight'>
              <span>View all</span>
              <ArrowRightIcon />
            </div>
          </div>
          <Dcard />
        </div>
      </section>
    </>
  )
}

export default Discount
