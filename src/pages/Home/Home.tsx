import { Helmet } from "react-helmet";

import ThemeToggle from "../../components/ThemeToogle/ThemeToogle";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Header from "../../components/Header/Header";
import Carousel from "../../components/Carousel/Carousel";
import ChooseCourse from "../../components/ChooseCourse/ChooseCourse";
import WeAreVoceMais from "../../components/WeAreVoceMais/WeAreVoceMais";
import LocationMap from "../../components/LocationMap/LocationMap";
import ComeBeMaisDigital from "../../components/ComeBeMaisDigital/ComeBeMaisDigital";
import Footer from "../../components/Footer/Footer";
import { BANNERS } from "../../constants/appConstants";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Você + Digital</title>

        <meta name="description" content="Página inicial da Você + Digital" />

        <meta
          name="keywords"
          content="Home, Carrossel, Sessões, React, TypeScript"
        />
      </Helmet>

      <ThemeToggle />
      <ScrollToTop />

      <Header />
      <main>
        <Carousel images={BANNERS} />
        <ChooseCourse />
        <WeAreVoceMais />
        <LocationMap />
        <ComeBeMaisDigital />
      </main>
      <Footer />
    </>
  );
}
