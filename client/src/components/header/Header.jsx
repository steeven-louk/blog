import React,{ useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, } from 'react-router-dom'
import axios from 'axios'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './style.scss'

import { toast } from 'react-toastify';

const Header = () => {
  let username = JSON.parse(localStorage.getItem('username'));
  let token = JSON.parse(localStorage.getItem('token'));
  const id =JSON.parse(localStorage.getItem('id'));

  const [toggleMenu, setToggleMenu] = useState(false)
  const [getDataUser, setUser] = useState({});
  const navigate = useNavigate()


  const handleClick = ()=>{
    setToggleMenu(!toggleMenu)
  }

  
useEffect(()=>{
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

  getUser();
}, [id]);

const logout = () =>{
  localStorage.removeItem('token');
  localStorage.removeItem('id');
  localStorage.removeItem('username');

  toast.success('see you later');

  setTimeout(() => {
    navigate('/', {replace: true});
  }, 2000);
}
  

  return (

    <div className='header'>
        <nav className="navbar navbar-expand-lg container-fluid ">
  <div className="container">
    <a className="navbar-brand text-warning fw-bold" href="/">tech-talk</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 fw-bold mb-lg-0">
        <li className="nav-item"  onClick={()=>setToggleMenu(false)}>
          <NavLink  className='nav-link text-white' to="/">Home</NavLink>
        </li>
        <li className="nav-item"  onClick={()=>setToggleMenu(false)}>
          <NavLink className="nav-link text-white" to="/blogs">Blogs</NavLink>
        </li>

        <li className="nav-item"  onClick={()=>setToggleMenu(false)}>
          <NavLink className="nav-link text-white" to="/about">About</NavLink>
        </li>

        <li className="nav-item"  onClick={()=>setToggleMenu(false)}>
          <NavLink   className="nav-link text-white" to="/contact">Contact</NavLink>
        </li>

        
    {!token &&
      <div className="authentification mx-3 mt-2 gap-3 d-flex text-capitalize fw-bold">
        <NavLink to='/register' className=' text-white'>register</NavLink>
        <NavLink to='/login' className=' text-white'>login</NavLink>
      </div>
    }

    {token &&
      <div className="user-group ps-2 position-relative">
       {getDataUser?.photo ?  <img src={`http://localhost:8080/assets/profile/${getDataUser?.photo}`} onClick={handleClick} width={40} height={40} style={{'objectFit':'cover'}} className='rounded-pill mx-2' alt="user-img" />
       :
      
       <div className='rounded-pill border p-2'>
        <FontAwesomeIcon icon="fa-solid fa-user" onClick={handleClick} width={30} height={30} />
       </div>
       }
    
       
       {toggleMenu &&
        <div className="user-group_subMenu text-white bg-dark rounded  position-absolute">
          <ul className='nav flex-column gap-1 p-0 text-capitalize'>
            <li className=' text-white w-100' onClick={()=>setToggleMenu(false)}><Link to='/profile'>{username}</Link></li>
            <li className=' text-white' onClick={()=>setToggleMenu(false)}><Link to="/write">write post</Link></li>
            <li className=' text-white' onClick={()=>setToggleMenu(false)}><Link to={`${id}/favoris`} >favories</Link></li>
            <li className='bg-danger p-1' onClick={()=>logout}>Logout</li>
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