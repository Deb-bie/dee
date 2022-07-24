import React from "react"
import Categories from "./Categories"
import "./Home.css"
import "../../style.css"
import SliderHome from "./Slider"

const Home = () => {
  window.addEventListener("scroll", function () {
    const home = document.querySelector(".home")
    home.classList.toggle("active", window.scrollY > 50)
  })

  return (
    <>
      <section className='home' id="home">
        <div className='homeWrapper'>
          <Categories />
          <SliderHome />
        </div>
      </section>
    </>
  )
}

export default Home
