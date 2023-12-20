import imgLogo from "../../assets/img/logo.png";
import imgInsta from "../../assets/img/items/insta.png";
import imgWhats from "../../assets/img/items/whats.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div>
          <img
            className="imgLogo escala-5"
            src={imgLogo}
            alt="Você mais digital"
          />
        </div>
        <div>
          <ul>
            <li className="cursos-pad">Cursos:</li>
            <li>
              <a href="">Informática básica e avançada</a>
            </li>
            <li>
              <a href="">Manutenção em Hardware</a>
            </li>
            <li>
              <a href="">Evolução Profissional</a>
            </li>
          </ul>
        </div>
        <div>

        </div>
      </div>
    </footer>
  );
}
