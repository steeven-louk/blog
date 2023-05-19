import React, { useState,useEffect } from 'react'
import axios from 'axios';

export const CategoryScreen = () => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        const getAllCategories = async () => {
    try {
      const getCat = await axios.get("http://localhost:8080/api/categories");
      if (getCat.status === 200) {
        let { data } = getCat;
        setCategory(data.data);

      }
    } catch (error) {
      throw new Error(error.message);
    }
  };
  getAllCategories();

    }, []);


  return (
    <div className="col-lg-12 p-3">
        <div className="section-block d-flex justify-content-between align-items-center mb-3">
          <h3 className="section-title">Categories</h3>
          <span className="btn btn-primary text-capitalize fw-semibold">add category</span>
        </div>
        <div className="card">
          <div className="campaign-table table-responsive">
            <table className="table">
              <thead>
                <tr className="border-0">
                  <th className="border-0">index</th>
                  <th className="border-0">name</th>
                  <th className="border-0">created At</th>
                 
                  <th className="border-0" colSpan={2}>Action</th>
                </tr>
              </thead>
              <tbody>
              {category?.map((item, index)=>(
                <tr key={item._id}>
                  <td>{index +1}</td>

                  <td className="fw-bold text-uppercase">{item.name} </td>
                  <td className="fw-bold text-uppercase"> {new Date(item.createdAt).toLocaleDateString() } </td>
                  
                  <td className='d-flex align-items-baseline mt-3 justify-content-center gap-3'>
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
  )
}
