import React, { useState } from 'react'
import axios from 'axios';
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) =>{
        e.preventDefault();

       try {
        const login = await axios.post('http://localhost:8080/api/auth/login',{
            email,
            password
        })
        if(login.status === 200) {
             localStorage.setItem("id", JSON.stringify(login.data.id));
             localStorage.setItem("token", JSON.stringify(login.data.token));
             localStorage.setItem("username", JSON.stringify(login.data.username));

             setTimeout(() => {
                window.location.replace("/");
             }, 2000);
        }
       } catch (error) {
        // console.log(error?.response?.data);
        throw new Error(error);
       }
    }

  return (
    <div className='auth'>
    <div className="container">
        <div className="row">
            <div className="col-md-7 bg-primary">l</div>
            <div className="col-md-5 p-5">
                <h2 className="fw-bold">Login</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quas.</p>
                
                <form onSubmit={handleSubmit} className='form d-flex flex-column gap-3'>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email' required className="form-control " />
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' required className="form-control " />
                    <br />
                    <button className='d-inline-block pull-right  text-white bg-success border-0 p-1 fw-semibold'>Login</button>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default Login