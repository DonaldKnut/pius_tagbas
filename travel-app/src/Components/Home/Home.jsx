import React from 'react'
import './home.css'
import video from '../../Assets/video.mp4'
import { SlLocationPin } from "react-icons/sl";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { TbApps } from "react-icons/tb";

const Home = () => {
  return (
    <section className='home'>
      <div className="overlay"></div>
        <video src={video} muted autoPlay loop typeof='video/mp4'></video>
     

      <div className="homeContent container">
        <div className="textDiv">

          <span className="smallText">
           Our Packages
          </span>


          <h1 className="homeTitle">
              Search your Holiday
            </h1>

        </div>

        <div className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city" className='label'>Search your destination:</label>
            <div className="input flex">
            <input type="text" placeholder='Enter name here' className='edit' />
            <SlLocationPin className='icon' />
            </div>
        
          </div>

          <div className="dateInput">
            <label htmlFor="date" className='label'>Select your date:</label>
            <div className="input flex">
            <input type="date" className='edit'/>
            </div>
           
          </div>

          <div className="priceInput">

          <div className="label_total flex">
            <label htmlFor="price" className='label'>Max peice:</label>
            <h3 className='total'>$5000</h3>
          </div>

          <div className="input flex">
            <input type="range" max="$5000 "min="$1000" className='edit'/>
          </div>

          </div>

            <div className="searchOptions flex">
            <HiFilter className='icon' />
            <span className='span'>MORE FILTERS</span>
            </div>
        </div>

        <div className="homeFooterIcons flex">
          <div className="rightIcons">
          <FiFacebook className='icon'/>
          <FaInstagram className='icon' />
          <FaTripadvisor className='icon'/>
          
          </div>

          <div className="leftIcons">
          <FaList  className='icon'/>
          <TbApps  className='icon' />

          </div>

        </div>
      </div>
    </section>
  )
}

export default Home;