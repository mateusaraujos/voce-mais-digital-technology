import Links from "../Links";
import SocialLinks from "../SocialLinks";
import { SocialLink, ToCourse } from "../../types/appTypes";
import { SOME_COURSES } from "../../constants/appConstants";
import { SOCIAL_LINKS } from "../../constants/specialConstants";
import {
  By,
  ByLink,
  Copy,
  LogoImageFooter,
  Social,
  StyledFooter,
} from "../../styles/footer";
import { useTheme } from "../../hooks/useTheme";

import imgLogo from "../../assets/images/logo.png";
import imgDarkLogo from "../../assets/images/darkLogo.png";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <StyledFooter theme={theme}>
      <div className="center-footer">
        <nav>
          <div>
            <LogoImageFooter
              className="imgLogo"
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
          <Social className="social">
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
          </Social>
        </nav>
        <Copy className="copy">
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
        </Copy>
      </div>
    </StyledFooter>
  );
}
