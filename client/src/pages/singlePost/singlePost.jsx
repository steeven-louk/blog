import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/card/Card";

import parse from 'html-react-parser';
// import parse from 'html-react-parser/dist/html-react-parser'


import './style.scss'
const SinglePost = () => {

  const [post, setPost] = useState({});
  const [similarPost, setSimilar] = useState([]);
  const [loading, setLoading] = useState(false);
  const {id} = useParams();

  const userId = "6432f1606032991bfd8a97cb"

  const getPost = async () =>{
    try {
      setLoading(true)
      
      const getPost = await axios.get(`http://localhost:8080/api/post/${id}`);
     if(getPost.status === 200){
       let {data} = getPost;
         setPost(data);
         setLoading(false);
       }
    } catch (error) {
     console.log('err', error);
     throw new Error(error.message);
    }
  }

  const getSimilarPost = async () =>{
    try{
      const getsimilarPost = await axios.get(`http://localhost:8080/api/user/user-post/${userId}`);
    if(getsimilarPost.status === 200){

      setSimilar(getsimilarPost.data)
    } 

    }catch(error){
      console.log('err', error.message);
    }
  }

  // eslint-disable-next-line 
  useEffect(()=>{
    getPost();
  }, []);
  
  useEffect(() => {
    getSimilarPost();
  }, []);
  const date = new Date(post.createdAt).toDateString();

  return (
    <div className="singlePage container">
        {loading && <div>Loading...</div>}

      <div className="d-flex justify-content-between align-items-baseline" >
      <h1 className="text-dark"> {post?.title} </h1>
      <span>save</span>
      </div>
      <div className="user_group text-dark my-4 d-flex justify-content-between align-items-center">
        <div className="user d-inline-flex align-items-center">
          <img src="" alt="user" className="user-img" />
          <span className="fw-bold text-capitalize ms-2">{post?.user?.username}</span>
        </div>
        <span>{date}</span>
      </div>

      <div className="post-img">
       {post?.picture &&
        <img
          src={`http://localhost:8080/assets/posts/${post?.picture}`}
          alt={post?.title}
          style={{ height: "25em", width: "100%", objectFit: "cover" }}
          className="rounded"
        />
        }
      </div>

      <div className="post-desc mt-5">
        <p className="text-dark"> {parse(post?.content)} </p>
      </div>
        <br />
        <hr />
      <div className="h2 text-center text-capitalize my-5">
        Read Related Blogs
      </div>

      <div className="card-container gap-3">
      {similarPost?.post?.slice(0,3).map((items)=> <Card items={items} key={items._id} username={similarPost.username}/>)}
        {/* <Card />
        <Card />
        <Card /> */}
      </div>
    </div>
  );
};

export default SinglePost;
