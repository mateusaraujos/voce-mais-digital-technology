import { Helmet } from "react-helmet";

import ThemeToggle from "../../components/ThemeToogle/ThemeToogle";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useTheme } from "../../hooks/useTheme";
import { LogoImage, LogoLink } from "../../styles/header";
import {
  LoginSection,
  MainAuthenticate,
  Presentation,
} from "../../styles/authenticate";

import imgLogo from "../../assets/images/logo.png";
import imgDarkLogo from "../../assets/images/darkLogo.png";

export default function Authenticate() {
  const { theme } = useTheme();
  return (
    <>
      <Helmet>
        <title>Faça login para ter acesso a sua conta | Você+Digital</title>

        <meta
          name="description"
          content="Página de login para usuários cadastrados"
        />

        <meta name="keywords" content="Login, Frase, React, TypeScript" />
      </Helmet>

      <ThemeToggle />
      <ScrollToTop />

      <MainAuthenticate>
        <Presentation>
          <LogoLink tabIndex={1} className="logo-link" href="/">
            <LogoImage
              className="imgLogo"
              src={theme.mode === "light" ? imgLogo : imgDarkLogo}
              alt="Você mais digital"
            />
          </LogoLink>
          <blockquote>
            “O sucesso não é por acaso. É trabalho duro, perseverança,
            aprendizado, estudo, sacrifício e, acima de tudo, amor pelo que você
            está fazendo ou aprendendo a fazer.”
            <cite> - Pelé</cite>
          </blockquote>
        </Presentation>
        <LoginSection>
          <h1>Login</h1>
          <LoginForm />
        </LoginSection>
      </MainAuthenticate>
    </>
  );
}
