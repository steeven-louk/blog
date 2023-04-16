import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

import './style.scss'

const Header = () => {
  let username = JSON.parse(localStorage.getItem('username'));
  let token = JSON.parse(localStorage.getItem('token'));
  const id =JSON.parse(localStorage.getItem('id'))

  const [toggleMenu, setToggleMenu] = useState(false)
  const [getDataUser, setUser] = useState({});

  const handleClick = ()=>{
    setToggleMenu(!toggleMenu)
  }

  const getUser = async () => {
    try {
      const user = await axios.get("http://localhost:8080/api/user/" + id);

      if (user.status === 200) {
        let { data } = user;
        setUser(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  
useEffect(()=>{
  getUser();
}, [])
  

  return (

    <div className='header'>
        <nav className="navbar navbar-expand-lg container-fluid ">
  <div className="container">
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

        
    {!token &&
      <div className="authentification mx-3 mt-2 gap-3 d-flex text-capitalize fw-bold">
        <Link to='/register' className=' text-white'>register</Link>
        <Link to='/login' className=' text-white'>login</Link>
      </div>
    }

    {token &&
      <div className="user-group ps-2 position-relative">
       {getDataUser?.photo ?  <img src={`http://localhost:8080/assets/profile/${getDataUser?.photo}`} onClick={handleClick} width={45} height={45} style={{'objectFit':'cover'}} className='rounded-pill mx-2' alt="user-img" />
       :
       <img src="./assets/asset21.png" onClick={handleClick} width={45} height={45} className='rounded-pill object-fit-cover bg-danger mx-2' alt="default-img" />
       }
    
       
       {toggleMenu &&
        <div className="user-group_subMenu text-white bg-dark rounded  position-absolute">
          <ul className='nav flex-column gap-1 text-capitalize'>
            <li className=' text-white' onClick={()=>setToggleMenu(false)}><Link to='/profile'>{username}</Link></li>
            <li className=' text-white' onClick={()=>setToggleMenu(false)}><Link to="/write">write post</Link></li>
            <li className=' text-white'onClick={()=>setToggleMenu(false)}>favories</li>
            <li className='bg-danger p-1' onClick={()=>setToggleMenu(false)}>Logout</li>
          </ul>
        </div>
       }
      </div>
    }
      </ul>

    </div>
  </div>
</nav>
    </div>
  )
}

export default Header