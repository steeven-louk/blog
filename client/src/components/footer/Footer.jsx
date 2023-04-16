import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div className="footer px-5 pt-5 pb-2 text-white" style={{ 'background':'#183114' }}>
      <div className="row">
        <h1 className="text-warning fw-bold text-uppercase">Blog</h1>
        <div className="col-md-4">
          <p>
            {" "}
            Master Web Development with amazing resources that are available for
            free! Join our Newsletter and get alerted when new articles, topics
            or courses are published.
          </p>
        </div>
        <div className="col-md-4 text-capitalize align-items-center">
          <ul className="nav flex-column align-items-center">
            <li>home</li>
            <li>blogs</li>
            <li>courses</li>
            <li>youtube</li>
          </ul>
        </div>
        <div className="col-md-4 text-capitalize  align-items-center">
          <ul className="nav flex-column  align-items-center text-left">
            <li className="nav-item">about</li>
            <li>contact</li>
            <li>privacy policy</li>
            <li>terms & conditions</li>
          </ul>
        </div>
      </div>
      <div className="social-media my-4 d-flex gap-3  justify-content-center ">
        <span><FontAwesomeIcon icon="fa-brands fa-facebook"  /></span>
        <span><FontAwesomeIcon icon="fa-brands fa-instagram"  /></span>
        <span><FontAwesomeIcon icon="fa-brands fa-twitter"  /></span>
        <span><FontAwesomeIcon icon="fa-brands fa-linkedin"  /></span>
        <span><FontAwesomeIcon icon="fa-brands fa-youtube"  /></span>
        <span><FontAwesomeIcon icon="fa-brands fa-slack"  /></span>
        <span><FontAwesomeIcon icon="fa-brands fa-discord"  /></span>
      </div>
      

      <div className="copyright d-flex justify-content-evenly ">
        <span>&copy; COPYRIGHT @ 2023 Blog</span>
        <span>Developed by: ishi</span>
      </div>
    </div>
  );
};

export default Footer;
