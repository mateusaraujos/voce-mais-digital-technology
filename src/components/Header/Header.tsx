import { Link } from "react-router-dom";

import Links from "../Links";

import { HeaderLink } from "../../types/types";
import { HEADER_LINKS } from "../../constants/constants";

import imgLogo from "../../assets/img/logo.png";

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
            {HEADER_LINKS.map((link: HeaderLink) => (
              <Links key={link.text} {...link} />
            ))}
          </ul>
          <Link className="portal" to="/portal-do-aluno">
            Portal do Aluno
          </Link>
        </nav>
      </div>
    </header>
  );
}
