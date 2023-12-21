import imgLogo from "../../assets/img/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="verde-claro"></div>
      <div className="verde-escuro"></div>
      <div className="center-header">
        <nav>
          <a href="/">
            <img className="imgLogo" src={imgLogo} alt="Você mais digital" />
          </a>
          <ul>
            <li>
              <a href="#section-one">Cursos</a>
            </li>
            <li>
              <a href="#section-two">Quem somos</a>
            </li>
            <li>
              <a href="#section-four">Quero ser +digital</a>
            </li>
          </ul>
          <a className="portal" href="#">
            Portal do Aluno
          </a>
        </nav>
      </div>
    </header>
  );
}
