import axios from 'axios';
import React from 'react'
import { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditProfile = ({show_Edit, userName, token}) => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState();
    const [bgPhoto, setBgPhoto] = useState();

    const userId =JSON.parse(localStorage.getItem('id'))

    const handleSubmit = async (e)=>{
        e.preventDefault();
    
        const updatePost ={
          username,
          email,
        };
    
        if(photo){
          const data = new FormData();
          const filename = photo.name;
          data.append('name', filename);
          data.append('img-profil', photo);
          updatePost.photo = filename;
    
          try {
            await axios.post("http://localhost:8080/api/upload-profile", data);
          } catch (error) {
            console.log('err', error.message);
          }
        }

        if(bgPhoto){
            const data = new FormData();
            const filename = bgPhoto.name;
            data.append('name', filename);
            data.append('bg-picture', bgPhoto)
            updatePost.bg_picture = filename;

           
          try {
              
            await axios.post('http://localhost:8080/api/upload-bg_profile', data);
            } catch (error) {
              console.log('err', error)
            }
          }
        
        try {

          await axios.put("http://localhost:8080/api/user/update/" + userId,{
            headers:{
              Authorization: `Bearer ${token}`
            }
          },
           updatePost);
    
          setUsername('');
          setEmail('');
          setPhoto(null);
          setBgPhoto(null);

            
          toast.success("L'article a été modifier avec succes", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });

            show_Edit(false);
            window.location.reload();
            
        } catch (error) {
          console.log('errWrite', error);
          throw Error(error);
        }
      }
     


  return (
    <div className='editProfile'>
        <div className="container justify-content-center align-items-center d-flex my-auto">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="form-group text-capitalize fw-semibold d-flex flex-column">
                    <label htmlFor="profile">profile</label>
                    <input type="file" onChange={(e)=> setBgPhoto(e.target.files[0])} name="bg_picture" />
                </div>
                <hr />
                <div className="form-group text-capitalize fw-semibold d-flex flex-column">
                    <label htmlFor="profile">profile</label>
                    <input type="file" onChange={(e)=> setPhoto(e.target.files[0])} name="img-profil" />
                </div>
                <hr />
                <div className="form-group text-capitalize fw-semibold d-flex flex-column">
                    <label htmlFor="username">name</label>
                    <input type="text" value={username} placeholder={userName} onChange={(e)=> setUsername(e.target.value)} className='form-control' name="username" />
                </div>
                <div className="form-group text-capitalize fw-semibold d-flex flex-column">
                    <label htmlFor="name">email</label>
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className='form-control' name="email" />
                </div>

                <div className="btn-group mt-3 d-flex justify-content-around my-2 gap-2">
                    <button className="btn btn-danger form-control text-uppercase fw-bold" onClick={(prev)=> show_Edit(!prev)}>cancel</button>
                    <button className="btn btn-primary form-control text-uppercase fw-bold" type='submit'>edite</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditProfile