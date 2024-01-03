import { Link } from "react-router-dom";

import Links from "../Links";

import { HeaderLink } from "../../types/appTypes";
import { HEADER_LINKS } from "../../constants/appConstants";

import imgLogo from "../../assets/img/logo.png";

import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="light-green"></div>
      <div className="dark-green"></div>
      <div className="center-header">
        <nav>
          <a className="logo-link" href="/">
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
