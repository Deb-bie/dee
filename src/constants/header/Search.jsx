import React, { useState } from 'react';

import { Link, useNavigate } from "react-router-dom"
import PersonIcon from '@mui/icons-material/Person';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SearchIcon from '@mui/icons-material/Search';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';




import logo from "../../assets/logo/logo.svg"

const Search = ({ CartItem }) => {
  const navigate = useNavigate();


  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 50)
  })

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);


  const handleLogo = () => {
    navigate("/home")
  }

  return (
    <>
      <section className='search'>
        <div className='searchContainer'>
          <div className="menuicon" onClick={handleClick}>
            { click ? 
              (
                <div className="close">
                  <CloseOutlinedIcon classsName="close" style={{fontSize: "30px"}}/> 
                </div>
              ) : (
                <div className="menu">
                  <MenuOutlinedIcon style={{fontSize: "30px"}}/>
                </div>
              )
            }
          </div>

          <Link to="/" className="link" onClick={handleLogo}>
            <div className='logo'>
              <img src={logo} alt='' />
            </div>
          </Link>

          {
            click ? (
             <>
              <div className="menu active">
                <div className="active-container">
                  <div>Fashion</div>
                  <div>Electronic</div>
                  <div>Cars </div>
                  <div>Home and Garden</div>
                  <div>Gifts</div>
                  <div>Music</div>
                  <div>Health & Beauty</div> 
                  <div>Pets</div>
                  <div>Baby Toys</div>
                  <div>Groceries</div>
                  <div>Books</div>
                  <div>Health & Beauty</div>
                  <div>Health & Beauty</div>
                  <div>Health & Beauty</div>
                </div>
              </div>
             </>
            ) : (
              <></>
            )
          }

          <div className='search-box'>
            {/* <SearchIcon className="searchIcon" /> */}
            <input type='text' placeholder="I'm searching for ..." />
            {/* <span>All Category</span> */}
          </div>

          <div className='searchIcons'>
            <PersonIcon />
            <div className='cart'>
              <Link to='/cart'>
                <LocalMallIcon />
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>

          
        </div>
      </section>
    </>
  )
}

export default Search
