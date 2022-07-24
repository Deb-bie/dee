import BorderAllIcon from '@mui/icons-material/BorderAll';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


import "./TopCate.css"
import TopCart from "./TopCart"

const TopCate = () => {
  return (
    <>
      <section className='TopCate background'>
        <div className='TopCateContainer'>
          <div className='TopCateHeading'>
            <div className='TopCateHeadingLeft'>
              <BorderAllIcon className="borderall" />
              <h2>Top Categories</h2>
            </div>
            <div className='TopCateHeadingRight '>
              <span>View all</span>
              <ArrowRightIcon />
            </div>
          </div>
          <TopCart />
        </div>
      </section>
    </>
  )
}

export default TopCate
