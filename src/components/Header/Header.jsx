import imgLogo from "../../assets/img/logo.png";
import HeaderLink from "../HeaderLink";
import { HEADER_LINKS } from "../../data";
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
            {HEADER_LINKS.map((links) => (
              <HeaderLink key={links.texto} {...links} />
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
