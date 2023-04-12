import React from 'react'

const Card = (props) => {

    const {category,content,createdAt,title} = props?.items;
    let date = new Date(createdAt).toDateString();

    
  return (
    <>
        <div className="card">
            <div className="card-header position-relative">
                <img src="./assets/Asset21.png" alt="" className="card-img-top" />
                    {category && 
                    <span className="category bg-success position-absolute bottom-0 start-0 fw-bold text-warning text-capitalize">
                        {category?.name}
                    </span>}
            </div>
            <div className="card-body bg-tertiary">
                <h5 className="card-title">{title}</h5>

                <p className="card-desc text-muted">
                    {content}   
                </p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
                <span>{date}</span>
                <span>By Ishi</span>
            </div>
        </div>
    </>
  )
}

export default Card