import React from 'react'

const Heros = () => {
  return (
    <div className="heros bg-success">
      <div className="container-fluid px-5 pt-3">
        <div className="row">
          <div className="col-md-6">
            <h1 className="fw-bold text-warning">
              The latest articles to help you upgrade your skills.
            </h1>
            <p className="fw-semibold text-white mt-3">
              Master Web Development with amazing resources that are available
              for free! Join our Newsletter and get alerted when new articles,
              topics or courses are published.
            </p>
            <form action="">
              <input type="text" placeholder='Email and adresse'  />
              <button className="btn btn-warning text-dark text-capitalize fw-semibold">
                subscribe
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <img
              src="./assets/Asset21.png"
              style={{ objectFit: "cover", "width":"100%" }}
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heros