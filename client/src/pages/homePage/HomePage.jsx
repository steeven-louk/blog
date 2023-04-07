import React from 'react'
import Card from '../../components/card/Card'
import Heros from '../../components/heros/Heros'

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

            <button className="btn btn-success mt-5 text-warning align-items-center text-center mx-auto text-capitalize fw-semibold d-flex">read more</button>
        </div>
    </div>
  )
}

export default HomePage