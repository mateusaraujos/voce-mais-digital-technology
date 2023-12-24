import imgLogo from "../../assets/img/logo.png";
import Links from "../Links";
import { HEADER_LINKS } from "../../data/data";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="verde-claro"></div>
      <div className="verde-escuro"></div>
      <div className="center-header">
        <nav>
          <a className="link-logo" href="/">
            <img className="imgLogo" src={imgLogo} alt="Você mais digital" />
          </a>
          <ul>
            {HEADER_LINKS.map((link) => (
              <Links key={link.texto} {...link} />
            ))}
          </ul>
          <a className="portal" href="#">
            Portal do Aluno
          </a>
        </nav>
      </div>
    </header>
  );
}
