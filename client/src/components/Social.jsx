import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Social = () => {
  return (
    <>
        <div className="social-media my-4 d-flex gap-3  justify-content-center ">
        <span>
          <FontAwesomeIcon icon="fa-brands fa-facebook" />
        </span>
        <span>
          <FontAwesomeIcon icon="fa-brands fa-instagram" />
        </span>
        <span>
          <FontAwesomeIcon icon="fa-brands fa-twitter" />
        </span>
        <span>
          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        </span>
        <span>
          <FontAwesomeIcon icon="fa-brands fa-youtube" />
        </span>
        <span>
          <FontAwesomeIcon icon="fa-brands fa-slack" />
        </span>
        <span>
          <FontAwesomeIcon icon="fa-brands fa-discord" />
        </span>
      </div>
    </>
  )
}
