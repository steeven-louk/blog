import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

import './style.scss'

const Header = () => {
  let username = JSON.parse(localStorage.getItem('username'));
  let token = JSON.parse(localStorage.getItem('token'));
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleClick = ()=>{
    setToggleMenu(!toggleMenu)
  }
  

  return (
    <div className='header'>
        <nav className="navbar navbar-expand-lg bg-success">
  <div className="container-fluid">
    <a className="navbar-brand text-warning fw-bold" href="/">Blog</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 fw-bold mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-warning" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/blogs">Blogs</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="/about">About</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="/contact">Contact</Link>
        </li>
      </ul>

    {!token &&
      <div className="authentification mx-3 gap-3 d-flex text-capitalize fw-bold">
        <Link to='/register' className=' text-white'>register</Link>
        <Link to='/login' className=' text-white'>login</Link>
      </div>
    }
    {token &&
      <div className="user-group ps-2 position-relative">
        <img src="./assets/asset21.png" onClick={handleClick} width={45} height={45} className='rounded-pill object-fit-cover bg-danger mx-2' alt="" />
        {/* <span className='text-white fw-bold'>{username}</span> */}
       
       {toggleMenu &&
        <div className="user-group_subMenu text-white bg-dark rounded  position-absolute">
          <ul className='nav flex-column gap-1 text-capitalize'>
            <li className=' text-white' onClick={()=>setToggleMenu(false)}><Link to='/profile'>{username}</Link></li>
            <li><Link to="/write">write post</Link></li>
            <li>favories</li>
            <li className='bg-danger'>Logout</li>
          </ul>
        </div>
       }
      </div>
    }
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header