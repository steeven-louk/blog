import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.scss";

const Contact = () => {
  return (
    <div className="contact ps-5">
      <div className="row">
        <div className="col-md-6 container left-col p-3 ">
          <h2>CONTACTEZ-NOUS</h2>
          <p>
            Nous sommes toujours heureux de discuter avec nos visiteurs et nos
            membres. Si vous avez des questions, des commentaires ou des
            suggestions concernant notre blog, n'hésitez pas à nous contacter à
            tout moment. Vous pouvez nous contacter via notre formulaire de
            contact en ligne ci-dessous ou en nous envoyant un e-mail à
            l'adresse suivante : [adresse e-mail]. Nous sommes également
            présents sur les réseaux sociaux, alors n'hésitez pas à nous suivre
            sur Twitter, Facebook et LinkedIn pour rester au courant de nos
            dernières mises à jour et pour interagir avec notre communauté.
            Notre adresse postale est la suivante : [adresse postale]. Si vous
            souhaitez nous envoyer du courrier, veuillez utiliser cette adresse.
            Nous sommes ouverts du lundi au vendredi, de 9 h à 17 h. Si vous
            avez besoin d'une assistance en dehors de ces heures, veuillez nous
            contacter par e-mail et nous vous répondrons dans les plus brefs
            délais.
          </p>

          <div className="contact-left">
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

              <div className="social-media mt-4 d-flex gap-3">
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
