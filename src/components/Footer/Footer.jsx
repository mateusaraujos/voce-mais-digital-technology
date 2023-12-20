import imgLogo from "../../assets/img/logo.png";
import imgInsta from "../../assets/img/items/insta.png";
import imgWhats from "../../assets/img/items/whats.png";
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
              <li>
                <a href="#">Informática básica e avançada</a>
              </li>
              <li>
                <a href="#">Manutenção em Hardware</a>
              </li>
              <li>
                <a href="#">Evolução Profissional</a>
              </li>
            </ul>
          </div>
          <div className="social">
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/vocemaisdigital_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icon"
                    src={imgInsta}
                    alt="instagram"
                    align="left"
                  />
                  @vocemaisdigital_
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="icon"
                    src={imgWhats}
                    alt="WhatsApp"
                    align="left"
                  />
                  <span data-phone="(99) 9999-9999">(99) 9999-9999</span>
                </a>
              </li>
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
