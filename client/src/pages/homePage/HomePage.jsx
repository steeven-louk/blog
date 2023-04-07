import React from 'react'
import Card from '../../components/card/Card'
import Heros from '../../components/heros/Heros'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='home'>
      <Heros/>

        <div className="px-5">
            <div className="h2 text-center text-capitalize my-5">latest blogs</div>

            <div className="card-container d-flex wrap gap-3 w-full">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>

            <Link to="/blogs" className="btn btn-success mt-5 text-warning w-25 mx-auto text-capitalize fw-semibold d-block">read more</Link>
        </div>
    </div>
  )
}

export default HomePage