import React, { useState, useEffect } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/userSlice";

const Header = ({ token }) => {
  let username = JSON.parse(localStorage.getItem("username"));
  const id = JSON.parse(localStorage.getItem("id"));

  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);
  const [getDataUser, setUser] = useState({});

  const handleClick = () => {
    setToggleMenu(!toggleMenu);
  };

  const dispatch = useDispatch();

  const toggleGroup = ()=>{
    setToggleMenu(false);
    setToggleNav(false)
  }

  useEffect(() => {

    const getUser = async () => {

      try {
        const user = await axios.get("https://mern-blogapi.vercel.app/api/user/" + id, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (user?.status === 200) {
          let { data } = user;
          setUser(data);
        }
      } catch (error) {
        console.log(error);
      }
   
  }
  // eslint-disable-next-line no-lone-blocks
  {token &&  getUser()};
  }, [id, token]);

  const Logout = () => {
    localStorage.clear();
     
    dispatch(setUserData(null));
    toast.success("see you later");
  
    
    setToggleMenu(false)
    setTimeout(() => {
      <Navigate to={'/'} />
      window.location.reload();
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      setToggleMenu(false);
      setToggleNav(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  return (
    <div className="header ">
      <nav className="navbar navbar-expand-lg container-fluid ">
        <div className="container position-relative">
          <a className="navbar-brand text-warning fw-bold" href="/">
            tech-talk
          </a>
          <button
            className="navbar-toggler d-md-none"
            type="button" onClick={()=>setToggleNav(!toggleNav)}>
            <span className="navbar-toggler-icon"></span>
          </button>

            <ul className="nav d-none d-md-flex ms-auto mb-2 fw-bold mb-lg-0">
              <li className="nav-item" onClick={() => setToggleMenu(false)}>
                <NavLink className="nav-link text-white" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item" onClick={() => setToggleMenu(false)}>
                <NavLink className="nav-link text-white" to="/blogs">
                  Blogs
                </NavLink>
              </li>

              <li className="nav-item" onClick={() => setToggleMenu(false)}>
                <NavLink className="nav-link text-white" to="/about">
                  About
                </NavLink>
              </li>

              <li className="nav-item" onClick={() => setToggleMenu(false)}>
                <NavLink className="nav-link text-white" to="/contact">
                  Contact
                </NavLink>
              </li>

              {!token && (
                <div className="authentification mx-3 mt-2 gap-3 d-flex text-capitalize fw-bold">
                  <NavLink to="/register" className=" text-white">
                    register
                  </NavLink>
                  <NavLink to="/login" className=" text-white">
                    login
                  </NavLink>
                </div>
              )}

              {token? (
                <div className="user-group ps-2 position-relative">
                  {getDataUser?.photo ? (
                    <img
                      src={`https://mern-blogapi.vercel.app/assets/profile/${getDataUser?.photo}`}
                      onClick={handleClick}
                      width={40}
                      height={40}
                      style={{ objectFit: "cover" }}
                      className="rounded-pill mx-2"
                      alt="user-img"
                    />
                  ) : (
                    <div className="rounded-pill border p-2">
                      <FontAwesomeIcon
                        icon="fa-solid fa-user"
                        onClick={handleClick}
                        width={30}
                        height={30}
                      />
                    </div>
                  )}

                  {toggleMenu && (
                    <div className="user-group_subMenu text-white bg-dark rounded  position-absolute">
                      <ul className="nav flex-column gap-1 p-0 text-capitalize">
                        <li
                          className=" text-white w-100"
                          onClick={() => setToggleMenu(false)}
                        >
                          <Link to="/profile">{username}</Link>
                        </li>
                        <li
                          className=" text-white"
                          onClick={() => setToggleMenu(false)}
                        >
                          <Link to="write">write post</Link>
                        </li>
                        
                        <li
                          className=" text-white"
                          onClick={() => setToggleMenu(false)}
                        >
                          <Link to={`${id}/favoris`}>favories</Link>
                        </li>
                        <li className="bg-danger p-1" onClick={Logout}>
                          Logout
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ):""}
            </ul>

          <div className={!toggleNav ? 'mobile-menu d-md-none':'mobile-menu card d-md-none active'
          }>
            <ul className="nav d-flex  mx-auto mb-2 fw-bold mb-lg-0">
              <li className="nav-item" onClick={toggleGroup}>
                <NavLink className="nav-link text-white" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item" onClick={toggleGroup}>
                <NavLink className="nav-link text-white" to="/blogs">
                  Blogs
                </NavLink>
              </li>

              <li className="nav-item" onClick={toggleGroup}>
                <NavLink className="nav-link text-white" to="/about">
                  About
                </NavLink>
              </li>

              <li className="nav-item" onClick={toggleGroup}>
                <NavLink className="nav-link text-white" to="/contact">
                  Contact
                </NavLink>
              </li>

              {!token && (
                <div className="authentification mx-3 mt-2 gap-3 d-flex text-capitalize fw-bold">
                  <NavLink to="/register" onClick={toggleGroup}  className=" text-white">
                    register
                  </NavLink>
                  <NavLink to="/login" onClick={toggleGroup} className="text-white">
                    login
                  </NavLink>
                </div>
              )}

              {token ? 
                <div className="user-group ps-2 position-relative">
                  {getDataUser?.photo ? (
                    <img
                      src={`https://mern-blogapi.vercel.app/assets/profile/${getDataUser?.photo}`}
                      onClick={handleClick}
                      width={40}
                      height={40}
                      style={{ objectFit: "cover" }}
                      className="rounded-pill mx-2"
                      alt="user-img"
                    />
                  ) : (
                    <div className="rounded-pill border p-2">
                      <FontAwesomeIcon
                        icon="fa-solid fa-user"
                        onClick={handleClick}
                        width={30}
                        height={30}
                      />
                    </div>
                  )}

                  {toggleMenu && (
                    <div className="user-group_subMenu text-white bg-dark rounded  position-absolute">
                      <ul className="nav flex-column gap-1 p-0 text-capitalize">
                        <li
                          className=" text-white w-100"
                          onClick={toggleGroup}
                        >
                          <Link to="/profile">{username}</Link>
                        </li>
                        <li
                          className=" text-white"
                          onClick={toggleGroup}
                        >
                          <Link to="write">write post</Link>
                        </li>
                        <li
                          className=" text-white"
                          onClick={toggleGroup}
                        >
                          <Link to={`${id}/favoris`}>favories</Link>
                        </li>
                        <li className="bg-danger p-1" onClick={Logout}>
                          Logout
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              : ""}
            </ul>
            </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
