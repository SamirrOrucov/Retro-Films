import React from 'react'
import "./Footer.scss"
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer'>
      <div className="footer_container">
        <div className="input"><input type="text" placeholder='Email' /> <button>Abunə Ol</button></div>
          <div className="social">
          <i class="fa-brands fa-square-facebook"></i>
          <i class="fa-brands fa-tiktok"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-x-twitter"></i>
          
          </div>
          <div className="pageLinks">
            <NavLink to={"/films"}>Retro Films <i class="fa-solid fa-arrow-up-right-from-square"></i></NavLink>
            <NavLink to={"/musics"}>Film Musics <i class="fa-solid fa-arrow-up-right-from-square"></i></NavLink>
            <NavLink to={"/actors"}>Actors <i class="fa-solid fa-arrow-up-right-from-square"></i> </NavLink>

          </div>
          <p>Mədəniyyət Nazirliyi@2024</p>
      </div>
    </div>
  )
}

export default Footer