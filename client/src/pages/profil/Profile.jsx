/* eslint-disable array-callback-return */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";

import './style.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditProfile from "./EditProfile";

const Profile = ({token}) => {
  
  const [blogs, setBlogs] = useState([]);
  // const [userFile, setUserFile] = useState("");
  // const [pictureFile, setPictureFile] = useState("");
  const [userData, setUserData] = useState({});
  const [showEdit, setShowEdit] = useState(false);
  const [search, setSearch] = useState("");
  
  const id =JSON.parse(localStorage.getItem('id'));

  // const handleSubmitProfil = async(e) =>{
  //   e.preventDefault();

  //   if(userFile){
  //     const data = new FormData();
  //     const filename = data.name;
  //     data.append('name', filename);
  //     data.append('img-profil', userFile)

  //     try {
        
  //      await axios.post('http://localhost:8080/api/upload-profile', data);
  //     } catch (error) {
  //       console.log('err', error)
  //     }

  //     try {
  //       const setUser = await axios.post('http://localhost:8080/api/user/add-photo/'+ id, {photo:userFile.name});
  //         if(setUser.status === 200){
  //           let { data } = setUser;
  //           setUser(data.data)
  //         }
  //     } catch (error) {
  //       console.log('err', error);
  //     }
  //   }
  // }


  // const handleSubmitBg = async(e) =>{
  //   e.preventDefault();

  //   if(pictureFile){
  //     const data = new FormData();
  //     const filename = data.name;
  //     data.append('name', filename);
  //     data.append('bg-picture', pictureFile)
     
  //     try {
        
  //     await axios.post('http://localhost:8080/api/upload-bg_profile', data);
  //     } catch (error) {
  //       console.log('err', error)
  //     }

  //     try {
  //       const setUser = await axios.post('http://localhost:8080/api/user/add-bg_picture/'+ id, {bg_picture:pictureFile.name});
  //         if(setUser.status === 200){
  //           let { data } = setUser;
  //           // setUser(data.data)
  //           console.log(data);
  //         }
  //       console.log('fff',setUser);
  //     } catch (error) {
  //       console.log('err', error);
  //     }
  //   }
  // }

  const blogLength = blogs?.post?.length;


  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await axios.get("http://localhost:8080/api/user/" + id,{
          headers:{
            Authorization: token,
          }
        }); 
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
        const posts = await axios.get(
          "http://localhost:8080/api/user/user-post/" + id
        );
        if (posts.status === 200) {
          let { data } = posts;
          setBlogs(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    getBlogs();
  }, [id]);


  return (
    <>
    {showEdit && <EditProfile token={token} show_Edit={setShowEdit} userName={userData.username}/>}
         <div className="profile px-3 mt-3">
      <header>
        <div className="profile-background rounded position-relative">
        {userData?.bg_picture ? <img src={`http://localhost:8080/assets/profile/bg_picture/${userData?.bg_picture}`} className="rounded" alt="" /> :
        <label htmlFor="bg-picture" className="bg-picture_btn">
          <FontAwesomeIcon icon="fa-solid fa-plus" className="icon"/>
        </label>

       }


        </div>

        <div
          className="profile_picture  mx-auto position-relative rounded-pill"
        >
        
        {userData?.photo ? <img src={`http://localhost:8080/assets/profile/${userData?.photo}`} alt='profil_image' className=""/> :
        <label htmlFor="img-profil" className="user-picture_btn">
            <FontAwesomeIcon icon="fa-solid fa-user" className="icon" />
        </label>
        }
        {/* <form onSubmit={handleSubmitProfil} encType="multipart/form-data">
        <label htmlFor="img-profil" className="user-picture_btn">
            <FontAwesomeIcon icon="fa-solid fa-user" className="icon" />
        </label>
          <input type="file" onChange={(e)=> setUserFile(e.target.files[0])} name="img-profil" id="img-profil" className="d-none" />
          <button type="submit" style={{ 'top':'95px','right':'38px' }} className="btn position-relative  btn-success text-capitalize ms-5">add</button>
        </form> */}
            
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
