/* eslint-disable array-callback-return */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";

import './style.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditProfile from "./EditProfile";

const Profile = ({token}) => {
  
  const [blogs, setBlogs] = useState([]);

  const [userData, setUserData] = useState({});
  const [showEdit, setShowEdit] = useState(false);
  const [search, setSearch] = useState("");
  
  const id =JSON.parse(localStorage.getItem('id'));


  const blogLength = blogs?.post?.length;


  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await axios.get("https://tech-talk.loukteck.fr/api/user/" + id,{
            headers:{
              Authorization: `Bearer ${token}`
            }
          }
        ); 
        if (user.status === 200) {
          let { data } = user;
          setUserData(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [id, token]);



  useEffect(() => {
    const getBlogs = async () => {
      try {
        const posts = await axios.get("https://tech-talk.loukteck.fr/api/user/user-post/" + id,{
          headers:{
            Authorization: `Bearer ${token}`
          }
        } );
        if (posts.status === 200) {
          let { data } = posts;
          setBlogs(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    getBlogs();
  }, [id, token]);


  return (
    <>
    {showEdit && <EditProfile token={token} show_Edit={setShowEdit} userName={userData.username}/>}
         <div className="profile px-3 mt-3">
      <header>
        <div className="profile-background rounded position-relative">
        {userData?.bg_picture ? <img src={`https://tech-talk.loukteck.fr/assets/profile/bg_picture/${userData?.bg_picture}`} className="rounded" alt="" /> :
        <label htmlFor="bg-picture" className="bg-picture_btn">
          <FontAwesomeIcon icon="fa-solid fa-plus" className="icon"/>
        </label>

       }


        </div>

        <div
          className="profile_picture  mx-auto position-relative rounded-pill"
        >
        
        {userData?.photo ? <img src={`https://tech-talk.loukteck.fr/assets/profile/${userData?.photo}`} alt='profil_image' className=""/> :
        <label htmlFor="img-profil" className="user-picture_btn">
            <FontAwesomeIcon icon="fa-solid fa-user" className="icon" />
        </label>
        }
       
        </div>
     
     
        <div className="info_container d-block text-center">
          <h3 className="name text-capitalize fw-bold">{userData?.username}</h3>
          <div className="align-items-baseline fw-semibold gap-3 d-inline-flex text-capitalize">
            <span className="fw-semibold">Blog ({blogLength})</span>
            <em>|</em>
            <span>favoris (10)</span>
          </div>
        </div>
      </header>

      <main>
        <section className="search-zone rounded p-4 bg-white mb-5">
          <div className="d-flex flex-wrap gap-2 justify-content-between align-items-center ">
            <div className="d-flex flex-column text-capitalize">
            <span>{userData?.username} ({blogLength})</span>
            <span className="btn btn-primary fw-semibold" onClick={()=> setShowEdit(!showEdit)}>editer le profil</span>
            <span className="btn btn-outline-danger text-capitalize fw-semibold mt-2">delete my account</span>
            </div>
            <div className=" d-inline-flex">
              <input
                type="text"
                name="search"
                placeholder="Search Blogs..."
                className="p-1 ps-3 rounded border"
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
              />
            </div>
          </div>
        </section>

        <section className="card-container gap-3">
        {blogLength === 0 ? <div className="h3 my-3">vous avez aucun blogs</div> 
        :
        <>
              {blogs?.post?.filter((item)=>{
                if(search === ""){
                  return item;
                } else if(item?.title.includes(search)){
                  return item;
                }
              }).map((blog) => (
            <Card items={blog} username={blogs?.username} key={blog?._id} />
          ))}
        </>
      
        }
        </section>
      </main>
    </div>
    </>
  );
};

export default Profile;
