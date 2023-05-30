import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {

    const {category,content,createdAt,title, user, _id,picture} = props?.items;

    let date = new Date(createdAt).toDateString();
    let username = props?.username;

    return (
    <>
        <div className="card">
           <Link to={`/singlePost/${_id}`}>
           <div className="card-header position-relative p-0">
                <img src={`https://tech-talk.loukteck.fr/assets/posts/${picture}`} alt="card-img" width={100} height={154} className="card-img-top object-fit-cover" />
                    {category && 
                   <span className="category bg-success position-absolute bottom-0 start-0 fw-bold text-warning text-capitalize">
                        {category?.name}
                    </span>
                    }
            </div>
            <div className="card-body">
                <h5 className="card-title text-dark">{title}</h5>

                <p className="card-desc text-muted" dangerouslySetInnerHTML={{ __html: content }}></p>
            </div>
           </Link>
            <div className="card-footer d-flex justify-content-between align-items-center">
                <span>{date}</span>
              {user?.username &&  <span className='text-capitalize fw-semibold'>By {user.username}</span>}
              {username && <span className='text-capitalize fw-semibold'>By {username}</span>}
            </div>
        </div>
    </>
  )
}

export default Card