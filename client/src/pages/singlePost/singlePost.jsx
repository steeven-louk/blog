import React, { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";
import Card from "../../components/card/Card";

import "./style.scss";

import { SinglePageLoading } from "../../components/Loading";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SinglePost = ({token}) => {

  const { id } = useParams();
  const user_Id = JSON.parse(localStorage.getItem("id"));

  const [post, setPost] = useState({});
  const [similarPost, setSimilar] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favoriteId, setFavoriteId] = useState([]);

  const navigate = useNavigate();

  const getSimilarPost = async () => {
    try {
      const getsimilarPost = await axios.get(
        `https://mern-blogapi.vercel.app/api/user/user-post/${user_Id}`
      );
      if (getsimilarPost.status === 200) {
        setSimilar(getsimilarPost.data);
      }
    } catch (error) {
      console.log("err", error.message);
    }
  };

  const existingFav = (id) => favoriteId?.includes(id);

  const addToFavorite = async () => {
    try {
      const fav = await axios.put(`https://mern-blogapi.vercel.app/api/favoris/${user_Id}/${post?._id}`,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      }
      );

      if (fav.status === 201) {
        toast.success(fav.data.message, { position: "top-center" });
        window.location.reload();
      }
    } catch (error) {
      toast.error(error?.response?.data, {
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
  };

  const removeToFavorite = async () => {
    try {
      const del = await axios.delete(
        `https://mern-blogapi.vercel.app/api/favoris/${user_Id}/${id}`,{
          headers:{
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (del.status === 200) {
        toast.success(del?.data.message, { position: "top-center" });
        window.location.reload();

      }
    } catch (error) {
      toast.error(error?.response?.data.message, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const deletePost = async () => {
    try {
      let del = await axios.delete(`https://mern-blogapi.vercel.app/api/post/${user_Id}/${id}`,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      });

      if (del.status === 200) {
        toast.info(del.data.message, {
          hideProgressBar: true,
          position: "top-center",
          autoClose: 2000,
        });

        setTimeout(() => {
          navigate("/blogs", { replace: true });
        }, 1200);
      }
    } catch (error) {
      console.log("error delete", error);
    }
  };

  useEffect(() => {
    const getPost = async () => {
      try {
        setLoading(true);

        const getPost = await axios.get(`https://mern-blogapi.vercel.app/api/post/${id}`,{
          headers:{
          Authorization: token
        }} );
        if (getPost.status === 200) {
          let { data } = getPost;
          setPost(data);
          setLoading(false);
        }
      } catch (error) {
        console.log("err", error);
        throw new Error(error.message);
      }
    };
    getPost();
  }, [id, token]);

  useEffect(() => {
    const getFavorisId = async () => {
      try {
        let { data } = await axios.get(`https://mern-blogapi.vercel.app/api/favoris/${user_Id}/favoris-ids`,{
          headers:{
          Authorization: token
        }} );
        setFavoriteId(data.favoris);
      } catch (error) {
        console.log(error);
      }
    };
    getFavorisId();
    getSimilarPost();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const date = new Date(post.createdAt).toDateString();

  return (
    
    <div className="singlePage container">
      {loading ? (
        <SinglePageLoading />
      ) : (
        <>
          <div className="d-flex justify-content-between align-items-baseline">
            <h1 className="text-dark"> {post?.title} </h1>
          </div>
          <div className="user_group text-dark my-4 d-flex justify-content-between align-items-center">
            <div className="user d-inline-flex align-items-center">
              {post?.user?.photo ? (
                <img src={`https://mern-blogapi.vercel.app/assets/profile/${post?.user?.photo}`} alt="user"  style={{ width:"50px" }} height="50px" className="user-img object-fit-cover rounded-pill" />
              ) : (
                <div className="rounded-pill border border-success p-2">
                  <FontAwesomeIcon
                    icon="fa-solid fa-user"
                    width={30}
                    height={30}
                  />
                </div>
              )}

              <span className="fw-bold text-capitalize ms-2">
                {post?.user?.username}
              </span>
            </div>
            <span>{date}</span>
          </div>

          <div className="post-img">
            {post?.picture && (
              <img
                src={`https://mern-blogapi.vercel.app/assets/posts/${post?.picture}`}
                alt={post?.title}
                style={{ height: "25em", width: "100%", objectFit: "cover" }}
                className="rounded"
              />
            )}
            
              <>
                {!existingFav(post._id) ? (
                  <button
                    className="btn text-uppercase fw-semibold mt-2 btn-success"
                    onClick={addToFavorite}
                  >
                    add to favoris
                  </button>
                ) : (
                  <button
                    className="btn text-uppercase fw-semibold mt-2 btn-danger"
                    onClick={removeToFavorite}
                  >
                    remove to favoris
                  </button>
                )}
                {post?.user?._id === user_Id && (
                <button
                  className="btn text-uppercase fw-semibold btn-outline-danger mt-2 ms-3"
                  onClick={deletePost}
                >
                  delete post
                </button>
                )}
              </>
      
          </div>

          <div className="post-desc mt-5">
            <div
              className="text-dark img-fluid p"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          </div>
          <br />
          <hr />
          <div className="h2 text-center text-capitalize my-5">
            Read Related Blogs
          </div>
        </>
      )}
      <div className="card-container gap-3">
        {similarPost?.post?.slice(0, 3).map((items) => (
          <Card items={items} key={items._id} username={similarPost.username} />
        ))}
      </div>
    </div>
  );
};

export default SinglePost;
