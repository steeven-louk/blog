import React from "react";
import { Social } from "../Social";

const Footer = () => {
  
  return (
    <div className="footer px-5 pt-5 mt-5 pb-2 text-white" style={{ 'background':'#183114' }}>
        <h1 className="text-warning fw-bold text-uppercase">tech-talk</h1>
      <div className="d-flex justify-content-between flex-wrap  ">
        <div className="col-md-4">
          <p>
            {" "}
            Master Web Development with amazing resources that are available for
            free! Join our Newsletter and get alerted when new articles, topics
            or courses are published.
          </p>
        </div>
        <div className=" text-capitalize">
          <ul className="nav flex-column ">
            <li>home</li>
            <li>blogs</li>
            <li>courses</li>
            <li>youtube</li>
          </ul>
        </div>
        <div className=" text-capitalize">
          <ul className="nav flex-column">
            <li className="nav-item">about</li>
            <li>contact</li>
            <li>privacy policy</li>
            <li>terms & conditions</li>
          </ul>
        </div>
      </div>

      <Social/>
      

      <div className="copyright d-flex justify-content-evenly ">
        <span>&copy; COPYRIGHT @ 2023 Blog</span>
        <span>Developed by: ishi</span>
      </div>
    </div>
  );
};

export default Footer;
