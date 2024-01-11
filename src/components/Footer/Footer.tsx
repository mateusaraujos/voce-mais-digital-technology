import Links from "../Links";
import SocialLinks from "../SocialLinks";

import { SocialLink, ToCourse } from "../../types/appTypes";
import { SOME_COURSES } from "../../constants/appConstants";
import { SOCIAL_LINKS } from "../../constants/specialConstants";
import { By, ByLink, LogoImageFooter, StyledFooter } from "../../resources/themes/footer";
import { useTheme } from "../../hooks/useTheme";

import imgLogo from "../../resources/assets/images/logo.png";
import imgDarkLogo from "../../resources/assets/images/darkLogo.png";

import "./Footer.css";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <StyledFooter theme={theme}>
      <div className="center-footer">
        <nav>
          <div>
            <LogoImageFooter
              className="imgLogo scale-6"
              src={theme.mode === "light" ? imgLogo : imgDarkLogo}
              alt="Você mais digital"
            />
          </div>
          <div>
            <ul>
              <li className="courses-pad">Cursos:</li>
              {SOME_COURSES.map((course: ToCourse) => (
                <Links key={course.text} {...course} />
              ))}
            </ul>
          </div>
          <div className="social">
            <ul>
              {SOCIAL_LINKS.map((social: SocialLink) => (
                <SocialLinks key={social.alt} {...social} />
              ))}
            </ul>
            <div className="address">
              <address>
                Rua Domingos Correia, 76,
                <br />
                Centro, Arapiraca/AL
              </address>
            </div>
          </div>
        </nav>
        <div className="copy">
          <p>
            Copyright 2024 Você + Digital technology • Todos os direitos
            reservados
          </p>
          <By className="by">
            Este site foi criado e é mantido por{" "}
            <ByLink
              href="https://github.com/mateusaraujos"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mateus Araújo
            </ByLink>
            .
          </By>
        </div>
      </div>
    </StyledFooter>
  );
}
