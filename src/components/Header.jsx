import React from 'react'
import { Link } from 'react-router-dom' 

import { BsPeople } from "react-icons/bs";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import { HiOutlineHome } from "react-icons/hi2";


const Header = () => {
  return (
    <div className="header">
        <ul className="header__list">
           <Link to='/' className="header__li">
              <span className="header__icons">
                  <HiOutlineHome className='header__ico' />
              </span>
              <div className="header__content">Home</div>
           </Link>
           <Link to='/community' className="header__li">
              <span className="header__icons">
                 <FaArrowsDownToPeople className='header__ico' />
              </span>
              <div className="header__content">Community</div>
           </Link>
           <Link to='/users' className="header__li">
              <span className="header__icons">
                 <BsPeople className='header__ico' />
              </span>
              <div className="header__content">Users</div>
           </Link>
        </ul>
    </div>
  )
}

export default Header