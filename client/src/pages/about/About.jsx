import React from "react";

import './style.scss';

const About = () => {
  return (
    <div className="about">
      <h3 className="text-center fw-bold my-5">Master Mind Behind "Dive Into Skills"</h3>

      <div className="container">
        <div className="row">
        <div className="col-md-6 left-col">
          <h4 className="fw-bold">ishimaru</h4>
          <p>
            I am ishi. I am a student of master 1 of web developpement
            and also a MERN Stack Developer and Front-end Developer.
          </p>

        </div>
        <div className="col-md-6">
            <img src="./assets/asset21.png" width="55%" alt="" />
        </div>
        </div>
      </div>

      <div className="social-media my-4 d-flex flex-wrap gap-3 justify-content-center ">
        <span>facebook</span>
        <span>insta</span>
        <span>twitter</span>
        <span>linkedin</span>
        <span>youtube</span>
        <span>slack</span>
        <span>discord</span>
      </div>
    </div>
  );
};

export default About;
