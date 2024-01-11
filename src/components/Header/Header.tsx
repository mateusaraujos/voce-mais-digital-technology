import Links from "../Links";

import { HeaderLink } from "../../types/appTypes";
import { HEADER_LINKS } from "../../constants/appConstants";
import { useTheme } from "../../hooks/useTheme";
import {
  StyledHeader,
  LogoImage,
  PortalLink,
  LogoLink,
} from "../../resources/themes/header";

import imgLogo from "../../resources/assets/images/logo.png";
import imgDarkLogo from "../../resources/assets/images/darkLogo.png";

import "./Header.css";

export default function Header() {
  const { theme } = useTheme();

  return (
    <StyledHeader theme={theme}>
      <div className="light-green"></div>
      <div className="dark-green"></div>
      <div className="center-header">
        <nav>
          <LogoLink className="logo-link" href="/">
            <LogoImage
              className="imgLogo"
              src={theme.mode === "light" ? imgLogo : imgDarkLogo}
              alt="Você mais digital"
            />
          </LogoLink>
          <ul>
            {HEADER_LINKS.map((link: HeaderLink) => (
              <Links key={link.text} {...link} />
            ))}
          </ul>
          <PortalLink className="portal" to="/portal-do-aluno">
            Portal do Aluno
          </PortalLink>
        </nav>
      </div>
    </StyledHeader>
  );
}
