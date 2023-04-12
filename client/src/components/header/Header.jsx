import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  let username = JSON.parse(localStorage.getItem('username'));
  let token = JSON.parse(localStorage.getItem('token'));
  
  

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
      <div className="user-group ps-2">
        <img src="./assets/asset21.png" width={45} height={45} className='rounded-pill object-fit-cover bg-danger mx-2' alt="" />
        <span className='text-white fw-bold'>{username}</span>
      </div>
    }
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header