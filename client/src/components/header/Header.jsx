import React from 'react'

const Header = () => {
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
          <a className="nav-link active text-warning" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/blogs">Blogs</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-white" href="/About">About</a>
        </li>

        <li className="nav-item">
          <a className="nav-link  text-white" href="/contact">Contact</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header