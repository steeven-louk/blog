import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const UserScreen = () => {

    const [users, setUsers] = useState([]);

  
  useEffect(() => {
    const getAllUsers =async () =>{
    try {

    const getUsers = await axios.get("http://localhost:8080/api/admin/users");
    
    if (getUsers.status === 200) {
        let { data } = getUsers;
        setUsers(data.users);

      }
    } catch (error) {
      console.log("err", error);
      throw new Error(error);
    }
  }

    getAllUsers();
  }, [])

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
                  <th className="border-0" colSpan={2}>Action</th>
                </tr>
              </thead>
              <tbody>
              {users?.map((item, index)=>(
                <tr key={item._id} >
                  <td>{index +1}</td>
                  <td>
                  {item?.photo ? 
                  <img src={`http://localhost:8080/assets/profile/${item?.photo}`} alt="card-img" style={{ "width":"50px", "height": "50px" }}  className="objectFit-cover rounded-pill" />
                  : 
                    <span className='border border-success rounded-pill p-3'><i className="fa-solid fa-user"></i></span>
                  }
                  </td>
                  <td className="fw-bold text-uppercase">{item.username} </td>
                  <td>{item?.email}</td>
                  <td>{item?.post?.length}</td>
                  <td className='d-flex mt-4 align-items-center gap-3'>
                  <i className="fa-solid fa-pen-to-square text-success"></i>
                  <i className="fa-solid fa-trash text-danger"></i>
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
