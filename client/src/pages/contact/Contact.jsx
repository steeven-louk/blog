import React from 'react'

const Contact = () => {
  return (
    <div className=' bg-success px-5'>
       <div className="row">
       <div className="col-md-6 p-3 text-white">
          <h2>Have a Query in Mind</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum iusto incidunt perferendis enim quasi. Perferendis.</p>
        
          <div className="contact">
              <span>div@gmail.com</span>
              <span>+952456582</span>
          </div>
        </div>
       
       
        <div className="col-md-6">
          <h2 className="text-capitalize text-white">send me email</h2>

          <form action="">
            <div className="form-group">
              <input type="text" placeholder='Your Name'  className='border-warning rounded mb-2'/>
            </div>
            <div className="form-group">
            <input type="email" placeholder='Your Email'  className='border-warning rounded' />

            </div>
            <div className="form-group">
            <input type="text" placeholder='Headline'  className='border-warning rounded my-2' />

            </div>
            <div className="form-group">
              <textarea name="details" className='border-warning rounded' placeholder='Details about Query' cols="30" rows="5"></textarea>
            </div>
            <div className="send">
              <button className="btn btn-dark bg-warning text-capitalize border-0">send</button> 
              <br />

              <span className='text-white'>or</span>

              <div className="social-media mt-4 d-flex gap-3 justify-content-center ">
                <span>facebook</span>
                <span>insta</span>
                <span>twitter</span>
                <span>linkedin</span>
                <span>youtube</span>
                <span>slack</span>
                <span>discord</span>
            </div>

            </div>
          </form>
        </div>
       </div>
    </div>
  )
}

export default Contact