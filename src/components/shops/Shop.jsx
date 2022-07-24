import ArrowRightIcon from '@mui/icons-material/ArrowRight';


import Catg from "./Catg"
import ShopCart from "./ShopCart"
import "./Shop.css";
import "../../style.css"


const Shop = ({ addToCart, shopItems }) => {
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          <Catg />

          <div className='contentWidth'>
            <div className='contentWidthHeading'>
              <div className='heading-left row  f_flex'>
                <h2>Mobile Phones</h2>
              </div>
              <div className='contentHeadingRight heading-right row '>
                <span>View all</span>
                <ArrowRightIcon />
              </div>
            </div>
            <div className='product-content  grid1'>
              <ShopCart addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop
