import React, { useState } from "react";
import "./style.scss";
import axios from "axios";
import {toast} from "react-toastify";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const register = await axios.post(
        "https://mern-blogapi.vercel.app/api/auth/register",
        {
          username,
          email,
          password,
        }
      );

      if (register.status === 201) {
        setUsername("");
        setEmail("");
        setPassword("");

          window.location.replace("/login");
      }
    } catch (error) {
      toast.error(error?.response.data, { position: "top-center" });
      // console.log(error.response.data);
      console.log(error)
      // throw new Error(error?.response?.data);
    }
  };

  return (
    <div className="auth">
      <div className="container">
        <div className="row">
          <div className="col-md-7 d-none d-md-block p-5 left">
            <h2>hello world.</h2>
            <span>
              have a account?{" "}
              <Link to="/login">
                <em>login</em>
              </Link>
            </span>
          </div>
          <div className="col-md-5 col-sm-12 right p-5">
            <h2 className="fw-bold mb-5">Register</h2>
            

            <form
              onSubmit={handleSubmit}
              className="form d-flex flex-column gap-3"
            >
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"
                className="form-control"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                required
                className="form-control "
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                required
                className="form-control "
              />

              <button className="rounded  text-white bg-success border-0 p-1 fw-semibold">
                Register
              </button>

            </form>
            <br />
            <span className='fw-semibold d-md-none'>Have a account? <Link to="/login" className='fw-bold text-dark text-capitalize text-decoration-underline'>login</Link></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
