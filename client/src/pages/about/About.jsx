import React from "react";

import "./style.scss";
import { Social } from "../../components/Social";

const About = () => {

  return (

    <div className="about">
      <h3 className="text-center fw-bold my-5">
        Master Mind Behind "TECH-TALK"
      </h3>

      <div className="container">
        <div className="row">
          <div className="col-md-6 left-col">
            <p>
              Bonjour et bienvenue sur mon blog de
              développement ! Je suis <em className="fw-bold">Steeven</em>, un développeur passionné par
              l'informatique et les nouvelles technologies. Depuis plusieurs
              années, j'ai travaillé sur divers projets en
              tant que développeur, ce qui m'a permis d'acquérir de solide
              compétences dans ce domaine. J'ai créé ce blog pour partager mes
              connaissances et mes expériences avec d'autres passionnés de
              développement. Mon objectif est de créer une communauté où les
              débutants peuvent apprendre et se lancer dans le milieu de la programmation,
              tandis que les développeurs expérimentés peuvent partager leurs
              astuces et leurs projets. Je vais aborder différents sujets sur ce
              blog, tels que les langages de programmation, les frameworks, les
              bibliothèques, les outils de développement, et bien plus encore.
              Je suis également ouvert aux questions et aux commentaires, alors n'hésitez pas à me contacter
              si vous avez besoin d'aide ou si vous voulez partager vos propres
              expériences.Merci de votre intérêt pour notre communauté de développement et de votre participation à notre blog !
            </p>
          </div>
          <div className="col-md-6">
            <img src="https://tech-talk.loukteck.fr/assets/Asset21.png" width="100%" alt="header" />
          </div>
        </div>
      </div>

      <Social/>
    </div>
  );
};

export default About;
