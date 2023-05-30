import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const EditAdmin = ({token}) => {

    const [file, setFile] = useState();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const id = JSON.parse(localStorage.getItem('id'));
    
    const handleSubmit = async (e)=>{
        e.preventDefault();
    
        const updatePost ={
          username,
          email
        };
    
        if(file){
          const data = new FormData();
          const filename = file.name;
          data.append('name', filename);
          data.append('img-profil', file);
          updatePost.photo = filename;
    
          console.log('data',data)
          try {
            await axios.post("https://tech-talk.loukteck.fr/api/upload-profile", data);
          } catch (error) {
            console.log('err', error.message);
          }
        }

        try {

         await axios.put("https://tech-talk.loukteck.fr/api/user/update/" + id,{
          headers:{
            Authorization: `Bearer ${token}`
          }
        }, updatePost);
    
          setUsername('');
          setEmail('')
          setFile(null);

            
          toast.success("Le profile a été modifier avec succes", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });

            window.location.reload();
            
        } catch (error) {
          toast.error(error.message);
          throw Error(error);
        }
      }
     

  return (
    <div className='p-3'>
 
        <form onSubmit={handleSubmit} className="form border p-5 rounded border-5 border-warning w-75 mx-auto">
            {file && <img src={URL.createObjectURL(file)} style={{ "width":"6em", "height":"6em", "objectFit":"cover" }} alt="" className="d-block mx-auto img-fluid card-img-top rounded-pill border border-success" />
        

}
            <div className="form-group mb-3">
                <label htmlFor="profile">Profile image</label>
                <input type="file" onChange={(e)=> setFile(e.target.files[0])} className="form-control outline-0" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder='Name' value={username} onChange={(e)=>setUsername(e.target.value)} className="form-control outline-0" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email' className="form-control outline-0" />
            </div>
           
    
            <button type="submit" className="btn btn-success text-uppercase fw-semibold my-4 mx-auto d-block">update</button>
        </form>
    </div>
  )
}

export default EditAdmin