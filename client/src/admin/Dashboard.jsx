import React, { useEffect, useState } from "react";
import { Card } from "./components/card";

import Swal from "sweetalert2";
import axios from "axios";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const userID = JSON.parse(localStorage.getItem('id'));

  const getAllBlogs =async () =>{
    try {
      // setLoading(true);
      const post = await axios.get("http://localhost:8080/api/post");
      if (post.status === 200) {
        let { data } = post;
        setPosts(data.data);
        // setLoading(false);
      }
    } catch (error) {
      console.log("err", error);
      throw new Error(error);
    }
  }



  const showAlert = (postId) =>{

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
      let del = await axios.delete(`http://localhost:8080/api/post/${userID}/${postId}`);

      if (del.status === 200) {
        
        swalWithBootstrapButtons.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )

  getAllBlogs();

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

  useEffect(() => {
  getAllBlogs();
  }, []);


  return (
    <div className=" p-2">
      <Card />

      <div className="col-lg-12">
        <div className="section-block">
          <h3 className="section-title fw-bold text-decoration-underline text-uppercase">Blogs</h3>
        </div>
        <div className="card">
          <div className="campaign-table table-responsive">
            <table className="table table-responsive table-hover">
              <thead>
                <tr className="border-0">
                  <th className="border-0">index</th>
                  <th className="border-0">Image</th>
                  <th className="border-0">title</th>
                  <th className="border-0">user</th>
                  <th className="border-0">category</th>
                  <th className="border-0">Action</th>
                </tr>
              </thead>
              <tbody>
              {posts?.map((item, index)=>(
                <tr key={item._id}>
                  <td>{index +1}</td>
                  <td>
                  <img src={`http://localhost:8080/assets/posts/${item?.picture}`} alt="card-img" width={20} height={50} className="card-img-top object-fit-cover" />
                  </td>
                  <td>{item.title} </td>
                  <td className="fw-bold text-uppercase">{item?.user.username}</td>
                  <td>{item?.category.name}</td>
                  <td>
                    <div>
                    <i className="fa-solid fa-pen-to-square text-success"></i>
                    <span onClick={()=>showAlert(item._id)}><i className="fa-solid fa-trash text-danger ms-3"></i></span>
                    </div>
                  </td>
                </tr>
              ))}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
