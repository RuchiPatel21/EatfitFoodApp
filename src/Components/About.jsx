import React, { useContext } from 'react'
import AboutHeading from './ClassBasedComponent/AboutHeading'
import { UserContext } from '../utils/UserContext';

const About = () => {
  const {darkTheme} = useContext(UserContext);
  return (
    <div className='min-h-screen text-center font-sans'>
      <div className={darkTheme?"bg-black py-5 d-flex align-items-center":"bg-slate-300 py-5 d-flex align-items-center"}>
        <img src="https://www.swiggy.com/about-us/wp-content/uploads/2024/04/DE-on-bike-2-2.png" alt="" />
        <div className={darkTheme?"text-black":""}>
        {/* <h1 className={darkTheme?"text-black text-center":"text-center"}>About Eatfit</h1>
        <p className={darkTheme?"text-black text-lg":"text-lg"}>Eatfit is a new-age consumer-first organization offering an easy-to-use convenience platform, accessible through a unified app.</p> */}
        <h1 className="text-center">About Eatfit</h1>
        <p className="text-lg">Eatfit is a new-age consumer-first organization offering an easy-to-use convenience platform, accessible through a unified app.</p>
        </div>
        <img src="	https://www.swiggy.com/about-us/wp-content/uploads/2024/04/03-Instamart_3_front_view_2_skycolour.png" alt="" />
      </div>
      <div className='d-flex align-items-center'>
        <img src="	https://www.swiggy.com/about-us/wp-content/uploads/2024/04/Group-1000006479.png" alt="" />
        <div className='text-start ps-4'>
          <h1>Mission</h1>
          <p className='text-2xl font-mono '>Our mission is to elevate the quality of life of the urban consumer by offering unparalleled convenience. Convenience is what makes us tick. It’s what makes us get out of bed and say, “Let’s do this.”</p>
        </div>
      </div>
      <div className='d-flex align-items-center'>
        <div className='text-start ps-4'>
          <h1>Industry pioneer</h1>
          <p className='text-2xl font-mono '>Being among the first few entrants, Swiggy has successfully pioneered the hyperlocal commerce industry in India, launching Food Delivery in 2014 and Quick Commerce in 2020. Due to the pioneering status of Swiggy, it is well-recognised as a leader in innovation in hyperlocal commerce and as a brand synonymous with the categories it is present in.</p>

        </div>
        <img src="https://www.swiggy.com/about-us/wp-content/uploads/2024/04/about-img1-new.png" alt="" />

      </div>
    </div>
  )
}

export default About
