import React from 'react'

export const Card = ({countUser, countPost}) => {
  return (
    <div className="row justify-content-center">
      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="card">
          <div className="card-body">
            <div className="d-inline-block">
              <h5 className="text-muted">Total Blogs <i className="fa-solid fa-blog"></i></h5>
              <h2 className="mb-0 fw-bold">{countPost}</h2>
            </div>
            
          </div>
        </div>
      </div>{" "}


        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="card">
            <div className="card-body">
                <div className="d-inline-block">
                <h5 className="text-muted">Total User <i className="fa-solid fa-users"></i></h5>
                <h2 className="mb-0 fw-bold">{countUser}</h2>
                </div>
                
            </div>
            </div>
        </div>{" "}
      </div>
  )
}
