import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import axios from "axios";
import { LoadingCard } from "../../components/Loading";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllBlog = async () =>{
    try {
      setLoading(true)
      const post = await axios.get('http://localhost:8080/api/post');
      if(post.status === 200){
        let {data} = post;
        setPosts(data.data);
        setLoading(false);
      }
    } catch (error) {
      console.log('err', error);
      throw new Error(error);
    }
  }


  const getAllCategories = async ()=>{
   try {
    setLoading(true)
    const getCat = await axios.get('http://localhost:8080/api/categories');
    if(getCat.status === 200){
      let {data} = getCat;
        setCategory( data.data);
        setLoading(false);
      }
   } catch (error) {
    console.log('err', error);
    throw new Error(error.message);
   }
  }

  useEffect(() => {
    getAllBlog();
  }, []) 
  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div className="blogs pb-4">
      <div className="px-2">
        <div className=" d-flex  gap-4 justify-content-end my-4">
          <select className="text-capitalize fw-semibold p-1 rounded">

          {category?.map((cat)=>(
            <option value={cat._id}>{ cat.name }</option>
          ))}
          </select>
       
        </div>

        <div className="card-container d-flex gap-3">

          {posts?.map((items)=>(
           <>
           {loading? <LoadingCard/> :  <Card items={items} key={items?._id}/>}
           </>
           
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
