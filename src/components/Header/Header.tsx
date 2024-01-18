import { useLocation } from "react-router-dom";

import Links from "../Links";
import { HeaderLink } from "../../types/appTypes";
import { HEADER_LINKS } from "../../constants/appConstants";
import { useTheme } from "../../hooks/useTheme";
import {
  StyledHeader,
  LogoImage,
  PortalLink,
  LogoLink,
} from "../../styles/header";

import imgLogo from "../../assets/images/logo.png";
import imgDarkLogo from "../../assets/images/darkLogo.png";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
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
          {currentPath === "/" ? (
            <>
              <ul>
                {HEADER_LINKS.map((link: HeaderLink) => (
                  <Links key={link.text} {...link} />
                ))}
              </ul>
              <PortalLink className="portal" to="/authenticate">
                Portal do Aluno
              </PortalLink>
            </>
          ) : (
            <div></div>
          )}
        </nav>
      </div>
    </StyledHeader>
  );
}
