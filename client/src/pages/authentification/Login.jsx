import React, { useState } from 'react'
import axios from 'axios';

import {Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../../redux/loadingSlice';
import { setIsAdmin, setUserData } from '../../redux/userSlice';


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleSubmit = async (e) =>{
        e.preventDefault();

       try {
        dispatch(showLoading())
        const login = await axios.post('http://localhost:8080/api/auth/login',{
            email,
            password
        })
        dispatch(hideLoading())
        if(login.status === 200) {

            localStorage.setItem("id", JSON.stringify(login.data?.info._id));
            localStorage.setItem("token", JSON.stringify(login.data?.token));
            localStorage.setItem("username", JSON.stringify(login.data?.info.username));
            console.log(login)
            dispatch(setUserData(login.data))
            if(login?.data.isAdmin === true){ 
                //  dispatch(setIsAdmin(login?.data.isAdmin));
                 localStorage.setItem("isAdmin", JSON.stringify(login?.data?.isAdmin));
            }
            toast.success(`Welcome ${login.data?.info.username}`, {position: "top-center"});
            
            setTimeout(() => {
                navigate("/", {replace: true});
                // window.location.reload();
             }, 1200);
        }

       } catch (error) {
        dispatch(hideLoading());
        console.log(error)
        toast.error(error.response.data, {position:"top-center"}) 
        throw Error(error);
       }
    }

  return (

<div className='auth'>
    <div className="container">
        <div className="row">
            <div className="col-md-7 p-5 left ">
                <h2>welcome back.</h2>
                <br />
                <span>have not account? <Link to="/register"><em>register</em></Link></span>
            </div>
            <div className="col-md-5 right p-5">
                <h1 className="fw-bold mb-5">Login</h1>
                
                <form onSubmit={handleSubmit} className='form d-flex flex-column gap-3'>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email' required className="form-control " />
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' required className="form-control " />
                    <br />
                    <button className='rounded text-white bg-success border-0 p-1 fw-semibold'>Login</button>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default Login