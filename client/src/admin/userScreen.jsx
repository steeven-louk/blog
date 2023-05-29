import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

export const UserScreen = ({token}) => {

    const [users, setUsers] = useState([]);


    const getAllUsers =async () =>{
      try {
  
      const getUsers = await axios.get("https://mern-blogapi.vercel.app/api/admin/users", {
        headers:{
          Authorization: `Bearer ${token}`
          }
        });
      
        if (getUsers.status === 200) {
          let { data } = getUsers;
          setUsers(data.users);
  
          }
        } catch (error) {
          console.log("err", error);
          throw new Error(error);
        }
      }
      
  useEffect(() => {
    getAllUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  const showAlert = (userId) =>{

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
      let del = await axios.delete(`localhost:8080/api/user/delete/${userId}`,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      });

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
  getAllUsers();

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
           <div className="col-lg-12 p-3">
        <div className="section-block">
          <h3 className="section-title text-uppercase fw-bold text-decoration-underline">User</h3>
        </div>
        <div className="card">
          <div className="campaign-table table-responsive">
            <table className="table">
              <thead>
                <tr className="border-0">
                  <th className="border-0">index</th>
                  <th className="border-0">Photo</th>
                  <th className="border-0">username</th>
                  <th className="border-0">email</th>
                  <th className="border-0">post count</th>
                  <th className="border-0">Action</th>
                </tr>
              </thead>
              <tbody>
              {users?.map((item, index)=>(
                <tr key={item?._id} >
                  <td>{index +1}</td>
                  <td>
                  {item?.photo ? 
                  <img src={`https://mern-blogapi.vercel.app/assets/profile/${item?.photo}`} alt="card-img" style={{ "width":"50px", "height": "50px" }}  className="objectFit-cover rounded-pill" />
                  : 
                    <span className='border border-success rounded-pill p-3'><i className="fa-solid fa-user"></i></span>
                  }
                  </td>
                  <td className="fw-bold text-uppercase">{item.username} </td>
                  <td>{item?.email}</td>
                  <td>{item?.post?.length}</td>
                  <td>
                    <div className='d-flex gap-3 align-items-center pt-1'>
                      <span onClick={showAlert}><i className="fa-solid fa-trash text-danger"></i></span>
                    </div>
                  </td>
                 
                </tr>
              ))}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
