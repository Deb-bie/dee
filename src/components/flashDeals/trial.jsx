import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import {Propertylist} from "../../data/Data.js";
import "./trial.css"

const PropertyList = ({ productItems, addToCart }) => {

//   const data = Propertylist;

  const renderSlides = () => 
  productItems.map((num) => 
    <div className="pListItem">
      <img src={num.cover} className="pListImg" />
      <div className="pListTitles">
        <h1>{num.name}</h1>
        <p>{num.properties} properties</p>
      </div>
    </div>
  );

  const LeftArrow = ({ className, style, onClick }) => (
    <button style={{...style, left: -10, zIndex: 10, height: "40px", width: "40px", borderRadius: "20px", opacity: 1, color: "white"}} onClick={onClick} className={className}>
      <div>back</div>
    </button>
  );

  const RightArrow = ({ className, style, onClick }) => (
    <button style={{...style, right: -10, zIndex: 10, height: "40px", width: "40px", borderRadius: "20px", opacity: 1, color: "white"}} onClick={onClick} className={className}>
      <div>back</div>
    </button>
  );

  const sliderSettings = {
    // ref: sliderRef,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    // prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
    // infinite: false,
    // centerMode: true,
    //  centerPadding: '0',


    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    }]
    
  }


  return (
    <div className="pList">
      <Slider {...sliderSettings} >
        {renderSlides()}
      </Slider>
        
    </div>
  )
}

export default PropertyList