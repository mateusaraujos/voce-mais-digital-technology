import { Link } from "react-router-dom";

import Links from "../Links";

import { HeaderLink } from "../../types/appTypes";
import { HEADER_LINKS } from "../../constants/appConstants";

import imgLogo from "/img/logo.png";

import "./Header.css";

import { useTheme } from "styled-components";
import styled from "styled-components";
import { CustomTheme } from "../../contexts/ThemeContext";

const StyledHeader = styled.header<{ theme: CustomTheme }>`
  background-color: ${(props) =>
    props.theme.mode === "light" ? "#fff" : "#333"};
  color: ${(props) => (props.theme.mode === "light" ? "#333" : "#fff")};
`;

export default function Header() {
  const { theme } = useTheme();

  return (
    <StyledHeader theme={theme}>
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
    </StyledHeader>
  );
}
