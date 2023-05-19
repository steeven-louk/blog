import React, { useEffect, useState } from "react";
import { Card } from "./components/card";

import axios from "axios";

const Dashboard = () => {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([]);

  const getAllBlogs =async () =>{
    try {
      setLoading(true);
      const post = await axios.get("http://localhost:8080/api/post");
      if (post.status === 200) {
        let { data } = post;
        setPosts(data.data);
        setLoading(false);
      }
    } catch (error) {
      console.log("err", error);
      throw new Error(error);
    }
  }

  useEffect(() => {
  getAllBlogs();
  }, [])


  return (
    <div className=" p-2">
      <Card />

      <div className="col-lg-12">
        <div className="section-block">
          <h3 className="section-title">My Active Campaigns</h3>
        </div>
        <div className="card">
          <div className="campaign-table table-responsive">
            <table className="table">
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
                    <i className="fa-solid fa-trash text-danger ms-3"></i>
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
