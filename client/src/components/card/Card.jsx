import React from 'react'

const Card = () => {
  return (
    <>
        <div className="card">
            <div className="card-header position-relative">
                <img src="./assets/Asset21.png" alt="" className="card-img-top" />
                <span className="category bg-success position-absolute bottom-0 start-0 fw-bold text-warning text-capitalize">category</span>
            </div>
            <div className="card-body bg-tertiary">
                <h5 className="card-title">
                Title goes here Title goes here Title goes here Title goes here                 </h5>

                <p className="card-desc text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque tortor sit amet condimentum porttitor. Integer augue urna, volutpat in sapien a, convallis commodo quam.                </p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
                <span>24/05/2012</span>
                <span>By Ishi</span>
            </div>
        </div>
    </>
  )
}

export default Card