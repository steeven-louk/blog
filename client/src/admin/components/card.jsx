import React from 'react'

export const Card = () => {
  return (
    <div className="row">
      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="card">
          <div className="card-body">
            <div className="d-inline-block">
              <h5 className="text-muted">Total Views</h5>
              <h2 className="mb-0"> 10,28,056</h2>
            </div>
            <div className="float-right icon-circle-medium  icon-box-lg  bg-info-light mt-1">
              <i className="fa fa-eye fa-fw fa-sm text-info"></i>
            </div>
          </div>
        </div>
      </div>{" "}


        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="card">
            <div className="card-body">
                <div className="d-inline-block">
                <h5 className="text-muted">Total Views</h5>
                <h2 className="mb-0"> 10,28,056</h2>
                </div>
                <div className="float-right icon-circle-medium  icon-box-lg  bg-info-light mt-1">
                <i className="fa fa-eye fa-fw fa-sm text-info"></i>
                </div>
            </div>
            </div>
        </div>{" "}
      </div>
  )
}
