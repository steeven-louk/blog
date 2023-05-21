import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <>
         <div className="nav-left-sidebar sidebar-dark">
	        <div className="menu-list">
			<div className="user card bg-dark shadow-lg p-2">
						<div className="img_container">
						<img src="./assets/Asset21.png" style={{ "width":"6em", "height":"6em" }} alt="" className="d-block mx-auto img-fluid card-img-top rounded-pill border border-success" />
						</div>
						<hr />
						<span className="h5 text-center fw-bold text-uppercase">admin</span>
					</div>
	            <nav className="navbar navbar-expand-lg navbar-light">
					
	                <Link className="d-xl-none d-lg-none" to="dashboard">Dashboard</Link>
	                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
	                    <span className="navbar-toggler-icon"></span>
	                </button>
	                <div className="collapse navbar-collapse" id="navbarNav">
	                    <ul className="navbar-nav flex-column">
	                        
	                        <li className="nav-item ">
	                            <NavLink to={"dashboard"} className={({ isActive, isPending }) => 
									isPending ? "pending" : isActive ? "active nav-link" : "nav-link"} >
                                <i className="fa fa-fw fa-user-circle"></i>
                                Dashboard
                                </NavLink>
	                        </li>
                           

	                        <li className="nav-divider">
	                            Features
	                        </li>
	                        <li className="nav-item">
	                            <NavLink className={({ isActive, isPending }) => 
									isPending ? "pending" : isActive ? "active nav-link" : " nav-link"} to={"users"}>
									<i className="fa-solid fa-user"></i> User
								</NavLink>
	                        </li>
							<li className="nav-item">
	                            <NavLink className={({ isActive, isPending }) => 
									isPending ? "pending" : isActive ? "active nav-link" : " nav-link"}to={"category"}><i className="fa-solid fa-list"></i> Categories </NavLink>
	                        </li>

							

							<li className="nav-divider">Admin</li>
							<li className='nav-item'>
							
								<Link className='nav-link'><i className="fa-solid fa-pen-to-square"></i> Edit</Link>
							</li>
							<hr />
							<li className="nav-item bg-danger mb-2 rounded">
	                            <Link className="nav-link text-white  fw-semibold" href="/">
									<i className="fa-solid fa-right-from-bracket"></i> Logout 
								 </Link>
	                        </li>

							<li className='nav-item rounded bg-dark'>
							
								<Link className='nav-link text-white rounded fw-semibold'><i className="fa-solid fa-trash"></i> Delete</Link>
							</li>
	                       
	                    </ul>
	                </div>
	            </nav>
	        </div>
	    </div>
    </>
  )
}
