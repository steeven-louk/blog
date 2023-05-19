import React from "react";


import "./style.scss";
import { Social } from "../../components/Social";

const Contact = () => {
  return (
    <div className="contact ">
      <div className="row">
        <div className="col-md-6 left-col p-4 ">
          <h2>CONTACTEZ-NOUS</h2>
          <hr />
          <p>
            Nous sommes toujours heureux de discuter avec nos visiteurs et nos
            membres. Si vous avez des questions, des commentaires ou des
            suggestions concernant notre blog, n'hésitez pas à nous contacter à
            tout moment. Vous pouvez nous contacter via notre formulaire de
            contact en ligne ci-dessous.
             Si vous
            avez besoin d'une assistance, veuillez nous
            contacter par e-mail et nous vous répondrons dans les plus brefs
            délais.
          </p>

          <div className="d-flex flex-column gap-1 mt-5">
            <span>div@gmail.com</span>
            <span>+952456582</span>
            <span>+952456582</span>
          </div>
        </div>

        <div className="col-md-6 right-col p-5">
          <h2 className="text-capitalize text-white">send me email</h2>

          <form action="">
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                className="border-warning rounded mb-2 form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                className="border-warning rounded form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Headline"
                className="border-warning rounded my-2"
              />
            </div>
            <div className="form-group">
              <textarea
                name="details"
                className="border-warning rounded"
                placeholder="Details about Query"
                cols="30"
                rows="5"
              ></textarea>
            </div>
            <div className="send">
              <button className="btn text-dark fw-semibold bg-warning text-capitalize border-0">
                send
              </button>
              <br />

              <span className="text-white or">or</span>

              <Social/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
