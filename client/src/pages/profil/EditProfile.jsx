import React from 'react'

const EditProfile = ({show_Edit}) => {
  return (
    <div className='editProfile'>
        <div className="container justify-content-center align-items-center d-flex my-auto">
            <form>
                <div className="form-group text-capitalize fw-semibold d-flex flex-column">
                    <label htmlFor="profile">profile</label>
                    <input type="file" name="background-file" />
                </div>
                <hr />
                <div className="form-group text-capitalize fw-semibold d-flex flex-column">
                    <label htmlFor="profile">profile</label>
                    <input type="file" name="profile-file" />
                </div>
                <hr />
                <div className="form-group text-capitalize fw-semibold d-flex flex-column">
                    <label htmlFor="name">name</label>
                    <input type="text" className='form-control' name="name" />
                </div>

                <div className="btn-group mt-3 d-flex justify-content-around my-2 gap-2">
                    <button className="btn btn-danger form-control text-uppercase fw-bold" onClick={(prev)=> show_Edit(!prev)}>cancel</button>
                    <button className="btn btn-primary form-control text-uppercase fw-bold" type='submit'>edite</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditProfile