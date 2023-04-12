import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card'
import Heros from '../../components/heros/Heros'
import axios from 'axios';
import { Link } from 'react-router-dom'

import './style.scss';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getLatestBlog = async () =>{
    try {
      setLoading(true)
      const post = await axios.get('http://localhost:8080/api/post');
      if(post.status === 200){
        let {data} = post;
        setPosts(data.data);
        setLoading(false);
      }
    } catch (error) {
      console.log('err', error);
      throw new Error(error);
    }
  }

  useEffect(() => {
    getLatestBlog();
  }, [])

  
  return (
    <div className='homePage'>
    {loading && <div>Loading...</div>}
      <Heros/>

        <div className="px-3">
            <div className="h2 text-center text-capitalize my-5">latest blogs</div>

            <div className="card-container gap-3">
                {posts?.slice(0,4).map((items)=>(

                <Card items={items} key={items?._id}/>
                ))}
            </div>

            <Link to="/blogs" className="btn btn-success mt-5 text-warning w-25 mx-auto text-capitalize fw-semibold d-block">read more</Link>
        </div>
    </div>
  )
}

export default HomePage