import axios from 'axios';
import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

export const Sidebar = () => {
	const username = JSON.parse(localStorage.getItem('username')) || 'admin'
	const id = JSON.parse(localStorage.getItem('id'))
	const navigate = useNavigate();
	const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("username");

    toast.success("see you later");

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const showAlert = () =>{

const swalWithBootstrapButtons = Swal.mixin({
customClass: {
  confirmButton: 'btn btn-success',
  cancelButton: 'btn btn-danger'
},
buttonsStyling: false
});

swalWithBootstrapButtons.fire({
title: 'Are you sure?',
text: "You won't be able to revert this!",
icon: 'warning',
showCancelButton: true,
confirmButtonText: 'Yes, delete it!',
cancelButtonText: 'No, cancel!',
reverseButtons: true
}).then(async(result) => {
if (result.isConfirmed) {
  try {
      let del = await axios.delete(`localhost:8080/api/user/delete/${id}`);

      if (del.status === 200) {
        toast.info(del.data.message, {
          hideProgressBar: true,
          position: "top-center",
          autoClose: 2000,
        });

        swalWithBootstrapButtons.fire(
      'Deleted!',
      'User has been deleted.',
      'success'
    )
	navigate("/");


      }

  } catch (error) {
    console.log("error delete", error);
  }

 
} else if (
  /* Read more about handling dismissals below */
  result.dismiss === Swal.DismissReason.cancel
) {
  swalWithBootstrapButtons.fire(
    'Cancelled',
    'Your imaginary file is safe :)',
    'error'
  )
}
})
}


  return (
    <>
         <div className="nav-left-sidebar sidebar-dark">
	        <div className="menu-list">
			<div className="user card bg-dark shadow-lg p-2">
					<div className="img_container">
						<img src="/assets/Asset21.png" style={{ "width":"6em", "height":"6em", "objectFit":"cover" }} alt="" className="d-block mx-auto img-fluid card-img-top rounded-pill border border-success" />
					</div>
						<hr />
						<span className="h5 text-center fw-bold text-uppercase">{username}</span>
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
							<li className="nav-item">
	                            <NavLink className={({ isActive, isPending }) => 
									isPending ? "pending" : isActive ? "active nav-link" : "nav-link"}to={"edit"}><i className="fa-solid fa-pen-to-square"></i> Edit </NavLink>
	                        </li>
							

							<hr />
							<li className="nav-item bg-danger mb-2 rounded">
	                            <span className="nav-link text-white  fw-semibold" onClick={Logout}>
									<i className="fa-solid fa-right-from-bracket"></i> Logout 
								 </span>
	                        </li>

							<li className='nav-item rounded bg-dark'>
							
								<span className='nav-link text-white rounded fw-semibold' onClick={showAlert}>
									<i className="fa-solid fa-trash"></i> Delete
								</span>
							</li>
	                       
	                    </ul>
	                </div>
	            </nav>
	        </div>
	    </div>
    </>
  )
}
