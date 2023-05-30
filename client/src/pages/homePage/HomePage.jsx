import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card'
import Heros from '../../components/heros/Heros'
import axios from 'axios';
import { Link } from 'react-router-dom'

import './style.scss';
import { LoadingCard } from '../../components/Loading';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    const getLatestBlog = async () =>{
    try {
      setLoading(true)
      const post = await axios.get('https://mern-blogapi.vercel.app/api/post');
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
    getLatestBlog();
  }, [])

  
  return (
    <div className='homePage'>
      <Heros/>

        <div className="px-3 mb-4">
            <div className="h2 text-center text-capitalize my-5">latest blogs</div>

            <div className="card-container gap-3">
    
                {posts?.slice(0,4).map((items, index)=>(
                  <>
                    {loading? <LoadingCard key={index}/> : <Card key={items?._id} items={items}/>}
                  </>
                ))}
            </div>

            <Link to="/blogs" className="btn btn-success mt-5 text-warning w-25 mx-auto text-capitalize fw-semibold d-block">read more</Link>
        </div>
    </div>
  )
}

export default HomePage