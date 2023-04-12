import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import axios from "axios";

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
        <h3 className="text-capitalize text-center fw-bold mt-3">categories</h3>
        <div className="category-group d-flex flex-wrap align-items-center gap-4 justify-content-center mb-5">
          {category?.map((cat)=>(

          <span className="text-capitalize fw-semibold" key={cat._id}>{cat.name}</span>
          ))}
       
        </div>

        <div className="card-container d-flex gap-3">

          {loading && <div>Loading...</div>}

          {posts?.map((items)=>(
            <Card items={items} key={items?._id}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
