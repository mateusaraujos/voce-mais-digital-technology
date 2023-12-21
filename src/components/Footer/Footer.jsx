import imgLogo from "../../assets/img/logo.png";
import Links from "../Links";
import SocialLinks from "../SocialLinks";
import { TIPOS_CURSOS } from "../../data/data";
import { SOCIAL_LINKS } from "../../data/SOCIAL_LINKS";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="center-footer">
        <nav>
          <div>
            <img
              className="imgLogo escala-6"
              src={imgLogo}
              alt="Você mais digital"
            />
          </div>
          <div>
            <ul>
              <li className="cursos-pad">Cursos:</li>
              {TIPOS_CURSOS.map((curso) => (
                <Links key={curso.texto} {...curso} />
              ))}
            </ul>
          </div>
          <div className="social">
            <ul>
              {SOCIAL_LINKS.map((social) => (
                <SocialLinks key={social.alt} {...social} />
              ))}
            </ul>
            <div className="address">
              <p>
                <address>
                  Rua Domingos Correia, 76,
                  <br />
                  Centro, Arapiraca/AL
                </address>
              </p>
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
