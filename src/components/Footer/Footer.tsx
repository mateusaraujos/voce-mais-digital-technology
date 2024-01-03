import Links from "../Links";
import SocialLinks from "../SocialLinks";

import { SocialLink, ToCourse } from "../../types/types";
import { SOME_COURSES } from "../../constants/constants";
import { SOCIAL_LINKS } from "../../constants/specialConstants";

import imgLogo from "../../assets/img/logo.png";

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="center-footer">
        <nav>
          <div>
            <img
              className="imgLogo scale-6"
              src={imgLogo}
              alt="Você mais digital"
            />
          </div>
          <div>
            <ul>
              <li className="courses-pad">Cursos:</li>
              {SOME_COURSES.map((course: ToCourse) => (
                <Links key={course.text} {...course} />
              ))}
            </ul>
          </div>
          <div className="social">
            <ul>
              {SOCIAL_LINKS.map((social: SocialLink) => (
                <SocialLinks key={social.alt} {...social} />
              ))}
            </ul>
            <div className="address">
              <address>
                Rua Domingos Correia, 76,
                <br />
                Centro, Arapiraca/AL
              </address>
            </div>
          </div>
        </nav>
        <div className="copy">
          <p>
            Copyright 2023 Você + Digital technology • Todos os direitos
            reservados
          </p>
          <small className="by">
            Este site foi criado e é mantido por{" "}
            <a
              href="https://github.com/mateusaraujos"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mateus Araújo
            </a>
            .
          </small>
        </div>
      </div>
    </footer>
  );
}
