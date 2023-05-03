import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.scss";

const About = () => {
  return (
    <div className="about">
      <h3 className="text-center fw-bold my-5">
        Master Mind Behind "Dive Into Skills"
      </h3>

      <div className="container">
        <div className="row">
          <div className="col-md-6 left-col">
            <p>
              Bonjour et bienvenue sur mon blog de
              développement ! Je suis [votre nom], un développeur passionné par
              l'informatique et les nouvelles technologies. Depuis plusieurs
              années, j'ai travaillé dans diverses entreprises et projets en
              tant que développeur, ce qui m'a permis d'acquérir une solide
              expérience dans ce domaine. J'ai créé ce blog pour partager mes
              connaissances et mes expériences avec d'autres passionnés de
              développement. Mon objectif est de créer une communauté où les
              débutants peuvent apprendre et se lancer dans le développement,
              tandis que les développeurs expérimentés peuvent partager leurs
              astuces et leurs projets. Je vais aborder différents sujets sur ce
              blog, tels que les langages de programmation, les frameworks, les
              bibliothèques, les outils de développement, et bien plus encore.
              Je vais également partager mes propres créations et projets pour
              vous inspirer et vous montrer ce que vous pouvez accomplir en tant
              que développeur. Mon approche pour écrire des articles est basée
              sur des exemples concrets et pratiques, qui aideront les lecteurs
              à mieux comprendre les concepts. Je suis également ouvert aux
              questions et aux commentaires, alors n'hésitez pas à me contacter
              si vous avez besoin d'aide ou si vous voulez partager vos propres
              expériences. Je m'adresse à tous les passionnés de développement,
              qu'ils soient débutants ou expérimentés. Mon objectif est de créer
              une communauté dynamique et interactive, où chacun peut apprendre,
              partager et échanger ses connaissances. Si vous voulez me
              contacter, vous pouvez utiliser mon adresse e-mail [votre adresse
              e-mail], ou me suivre sur mes comptes de réseaux sociaux [vos
              comptes de réseaux sociaux].Merci de votre intérêt pour notre communauté de développement et de votre participation à notre blog !
            </p>
          </div>
          <div className="col-md-6">
            <img src="./assets/asset21.png" width="100%" alt="" />
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default About;
