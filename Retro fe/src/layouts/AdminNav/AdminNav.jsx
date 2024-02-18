import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./AdminNav.scss"
function AdminNav() {
  return (
    <div className='adminNav'>
        <div className="adminNav_container">
            <Link to={"/"} className='logo'>AZE & FILMS</Link>
         <div className="adminNav_container_nav">
                <NavLink to={"/admin/films"}><i class="fa-solid fa-film"></i>  Films</NavLink>
                <NavLink to={"/admin/actors"}><i class="fa-solid fa-masks-theater"></i>  Actors</NavLink>
                <NavLink to={"/admin/users"}><i class="fa-solid fa-user"></i>  Users</NavLink>
            </div>
        </div>
    </div>
  )
}

export default AdminNav