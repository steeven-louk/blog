import React, { useState,useEffect } from 'react'
import axios from 'axios';
import {toast} from 'react-toastify'
export const CategoryScreen = () => {

    const [category, setCategory] = useState([]);
    const [toggleCategory, setToggleCategory] = useState(false);
    const [input, setInput] = useState('')

    const addCategory = async (e)=>{
        e.preventDefault();
        try {
        const data = await axios.post("http://localhost:8080/api/categories", {
          name: input
        });
            if(data === 201){
              toast.success(data.statusText,{position: "top center"})
              setToggleCategory(false);
              getAllCategories();
              setInput("");
            }
        } catch (error) {
            console.log(error);
            throw new Error(error.message);
        }
    }



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

    
    const deleteCategory = async ( id)=>{
        try {
        const data = await axios.delete("http://localhost:8080/api/categories/"+id);
            console.log(data);
            if(data.status === 200){
              toast.success("category has been deleted",{position: "top center"})
              getAllCategories();
            }
        } catch (error) {
            console.log(error);
            throw new Error(error.message);
        }
    }

    useEffect(() => {
      getAllCategories();
    }, []);


  return (

    <div className="col-lg-12 p-3">
        {toggleCategory && <div style={{'zIndex':'10'  }} className='position-absolute border border-2 border-success w-50 top-50 start-50 shadow translate-middle card p-3'>
          <div onClick={()=>setToggleCategory(false)}>
          <i className="fa-solid fa-circle-xmark ms-auto d-flex align-items-end justify-content-end btn"></i>

          </div>         
            <form onSubmit={addCategory}>
                <input type="text" className="form-control" placeholder='Name' value={input} onChange={(e)=> setInput(e.target.value)}/>
                <button type='submit' className="btn w-25 mx-auto d-block btn-success text-uppercase fw-semibold mt-2">add</button>
            </form>
        </div>}
        <div className="section-block d-flex justify-content-between align-items-center mb-3">
          <h3 className="section-title fw-bold text-decoration-underline text-uppercase">Categories</h3>
          <span onClick={()=> setToggleCategory(!toggleCategory)} className="btn btn-primary text-capitalize fw-semibold">add category</span>
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
                  
                  <td>
                    <div>
                        <i className="fa-solid fa-pen-to-square text-success"></i>
                       <span onClick={()=>deleteCategory(item._id)}> <i className="fa-solid fa-trash text-danger"></i></span>
                    </div>
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
