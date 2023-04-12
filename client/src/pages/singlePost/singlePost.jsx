import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/card/Card";

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

  console.log('ss',similarPost.username)
  useEffect(()=>{
    getPost();
  }, []);

  useEffect(() => {
    getSimilarPost();
  }, []);
  const date = new Date(post.createdAt).toDateString();

  return (
    <div className="p-5">
        {loading && <div>Loading...</div>}

      <h1 className="text-dark"> {post?.title} </h1>
      <div className="user_group text-dark my-4 d-flex justify-content-between align-items-center">
        <div className="user d-inline-flex align-items-center">
          <img src="" alt="user" className="user-img" />
          <span className="fw-bold text-capitalize ms-2">el ishi</span>
        </div>
        <span>{date}</span>
      </div>

      <div className="post-img">
       {post?.picture &&
        <img
          src={post?.picture}
          alt={post?.title}
          style={{ height: "25em", width: "100%", objectFit: "cover" }}
          className="img-fluid rounded"
        />
        }
      </div>

      <div className="post-desc mt-5">
        <p className="text-dark"> {post?.content} </p>
      </div>

      <div className="h2 text-center text-capitalize my-5">
        Read Related Blogs
      </div>

      <div className="card-container gap-3">
      {similarPost?.post?.map((items)=> <Card items={items} key={items._id} username={similarPost.username}/>)}
        {/* <Card />
        <Card />
        <Card /> */}
      </div>
    </div>
  );
};

export default SinglePost;
