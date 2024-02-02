import React, { useState } from "react";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="navbar">
      <div className="navbar_container">
        <div className="logo">
          <Link to={"/"}>AZEFILMS</Link>
        </div>
        <div className="links">
          <NavLink to={"/films"}>Films</NavLink>
          <NavLink to={"/actors"}>Actors</NavLink>
          <div className="line"></div>
          <div className="icons">
            <Link>
              <i class="fa-brands fa-instagram"></i>
            </Link>
            <Link>
              <i class="fa-brands fa-x-twitter"></i>
            </Link>
            <Link>
              <i class="fa-brands fa-youtube"></i>
            </Link>
            <Link>
              <i class="fa-solid fa-rss"></i>
            </Link>
          </div>
        </div>
       
        <div className=  {
            isOpen?"responsiveNav isOpen":"responsiveNav"
            
        }>
        <NavLink to={"/films"} onClick={()=>setIsOpen(!isOpen)}>Films</NavLink>
          <NavLink to={"/actors"} onClick={()=>setIsOpen(!isOpen)}>Actors</NavLink>
          <div className="icons">
            <Link >
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link>
              <i className="fa-brands fa-x-twitter"></i>
            </Link>
            <Link>
              <i className="fa-brands fa-youtube"></i>
            </Link>
            <Link>
              <i className="fa-solid fa-rss"></i>
            </Link>
          </div>
        </div>
        <div className="hamburger" onClick={()=>setIsOpen(!isOpen)}>
        <i className    ="fa-light fa-bars"></i>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
