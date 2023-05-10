import React, { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import Card from "../../components/card/Card";


import './style.scss'
import { useDispatch, useSelector } from "react-redux";
import { addToFavoris, removeFromFavorites, selectFavorites } from "../../redux/favoritesSlice";
import { SinglePageLoading } from "../../components/Loading";
import { toast } from 'react-toastify';


const SinglePost = () => {

  const {id} = useParams();
  const user_Id = JSON.parse(localStorage.getItem('id'));

 

  const [post, setPost] = useState({});
  const [similarPost, setSimilar] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  
  // const [isFavorite, setIsFavorite] = useState(false);

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
      const getsimilarPost = await axios.get(`http://localhost:8080/api/user/user-post/${user_Id}`);
    if(getsimilarPost.status === 200){

      setSimilar(getsimilarPost.data)
    } 

    }catch(error){
      console.log('err', error.message);
    }
  }
  

useEffect(() => {
  const getUser = async () => {
    try {
      const user = await axios.get("http://localhost:8080/api/user/" + user_Id);
console.log(user)
      if (user.status === 200) {
        let { data } = user;
        setUser(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  getUser();
}, [user_Id])

const dispatch = useDispatch();
const isFavorite = useSelector(selectFavorites);

  const addToFavorite = async () =>{
    if(isFavorite === false) {
       try {
        const fav = await axios.post(`http://localhost:8080/api/favoris/${user_Id}/${post?._id}`);
        console.log(fav)

        if(fav.status === 201){
      
      dispatch(addToFavoris(id));

    }
    } catch (error) {
      toast.error(error?.response?.data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  } 

  else{
    try {
      // const isInFavorite = JSON.parse(localStorage.getItem('favoris_id'))
      // console.log('is',isInFavorite);
      const del = await axios.delete(`http://localhost:8080/api/favoris/${user_Id}/${id}`);
      

      if(del.status === 200){
        dispatch(removeFromFavorites(post?._id))
        
     
      //  localStorage.setItem('favoris_id', JSON.stringify(isFavorite));
      }
    console.log('fav', del);
    } catch (error) {
      console.log('errr',error);
      toast.error(error?.response?.data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  }
   
  }


  console.log('favorite', selectFavorites);

  useEffect(()=>{
    getPost();
  }, []);
  
  useEffect(() => {
    getSimilarPost();
  }, []);



  const date = new Date(post.createdAt).toDateString();

  return (
    <div className="singlePage container">
        {loading ? <SinglePageLoading/> : 
        (
          <>
          <div className="d-flex justify-content-between align-items-baseline" >
      <h1 className="text-dark"> {post?.title} </h1>

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
        <span className="btn text-uppercase fw-semibold mt-2 btn-success" onClick={addToFavorite}>{!isFavorite? 'add to favoris' : 'remove to favoris'}</span>

      </div>

      <div className="post-desc mt-5">
        <div  className="text-dark img-fluid p" dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </div>
        <br />
        <hr />
      <div className="h2 text-center text-capitalize my-5">
        Read Related Blogs
      </div>
          </>
        )}



      <div className="card-container gap-3">
      {similarPost?.post?.slice(0,3).map((items)=> <Card items={items} key={items._id} username={similarPost.username}/>)}
      
      </div>
    </div>
  );
};

export default SinglePost;
