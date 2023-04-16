import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Card from "../../components/card/Card";

import './style.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserContext } from "../../services/userProvider";

const Profile = () => {
  const [blogs, setBlogs] = useState([]);
  const [userFile, setUserFile] = useState("");
  const [pictureFile, setPictureFile] = useState("");
  const [userData, setUserData] = useState({})

  // const {user} = useContext(UserContext);

  
  const id =JSON.parse(localStorage.getItem('id'))

  const getBlogs = async () => {
    try {
      const posts = await axios.get(
        "http://localhost:8080/api/user/user-post/" + id
      );
      if (posts.status === 200) {
        // console.log('ee', posts)
        let { data } = posts;
        setBlogs(data);
      }
    } catch (error) {
      console.log(error);
    }
  };


  const handleSubmitProfil = async(e) =>{
    e.preventDefault();

    if(userFile){
      const data = new FormData();
      const filename = data.name;
      data.append('name', filename);
      data.append('img-profil', userFile)
     
      try {
        
      const setImg = await axios.post('http://localhost:8080/api/upload-profile', data);
      console.log(setImg);
      } catch (error) {
        console.log('err', error)
      }

      try {
        const setUser = await axios.post('http://localhost:8080/api/user/add-photo/'+ id, {photo:userFile.name});
          if(setUser.status === 200){
            let { data } = setUser;
            setUser(data.data)
          }
        console.log('fff',setUser);
      } catch (error) {
        console.log('err', error);
      }
    }
  }

  const handleSubmitBg = async(e) =>{
    e.preventDefault();

    if(pictureFile){
      const data = new FormData();
      const filename = data.name;
      data.append('name', filename);
      data.append('bg-picture', pictureFile)
     
      try {
        
      const setBg = await axios.post('http://localhost:8080/api/upload-bg_profile', data);
      console.log(setBg);
      } catch (error) {
        console.log('err', error)
      }

      try {
        const setUser = await axios.post('http://localhost:8080/api/user/add-bg_picture/'+ id, {bg_picture:userFile.name});
          if(setUser.status === 200){
            let { data } = setUser;
            setUser(data.data)
          }
        console.log('fff',setUser);
      } catch (error) {
        console.log('err', error);
      }
    }
  }

  const blogLength = blogs?.post?.length;


  const getUser = async () => {
    try {
      const user = await axios.get(
        "http://localhost:8080/api/user/" + id);
      if (user.status === 200) {
        // console.log('ee', posts)
        let { data } = user;
        setUserData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

// console.log(userData)
  useEffect(() => {
    getBlogs();
  }, []);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="profile px-3 mt-3">
      <header>
        <div className="profile-background rounded position-relative">
        {userData?.bg_picture ? <img src="./assets/singlePost.png" className="rounded" alt="" /> :
        <form onSubmit={handleSubmitBg} >
           <input type="file" name="bg-picture"  id="bg-picture" className="d-none" />
        <label htmlFor="bg-picture" className="bg-picture_btn">
          <FontAwesomeIcon icon="fa-solid fa-plus" className="icon"/>
        </label>
        <button className="btn btn-primary text-capitalize fw-bold" type="submit">add bg</button>
        </form>
       }
          {/*  */}
        </div>
        <div
          className="profile_picture  mx-auto position-relative rounded-pill"
        >
        
        {userData?.photo ? <img src={`http://localhost:8080/assets/profile/${userData?.photo}`} alt='profil_image' className=""/> :
        <form onSubmit={handleSubmitProfil} encType="multipart/form-data">
        <label htmlFor="img-profil" className="user-picture_btn">
            <FontAwesomeIcon icon="fa-solid fa-user" className="icon" />
        </label>
          <input type="file" onChange={(e)=> setUserFile(e.target.files[0])} name="img-profil" id="img-profil" className="d-none" />
          <button type="submit" className="btn btn-success text-capitalize ms-5">add</button>
        </form>
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
          <div className="d-flex justify-content-between align-items-center ">
            <span>{userData?.username} ({blogLength})</span>
            <div className=" d-inline-flex">
              <input
                type="text"
                name="search"
                placeholder="Search Blogs..."
                className="p-1 ps-3 rounded border"
              />
            </div>
          </div>
        </section>

        <section className="card-container gap-3">
        {blogLength === 0 ? <div className="h3 my-3">vous avez aucun blogs</div> 
        :
        <>
              {blogs?.post?.map((blog) => (
            <Card items={blog} username={blogs?.username} key={blog?._id} />
          ))}
        </>
      
        }
        </section>
      </main>
    </div>
  );
};

export default Profile;
