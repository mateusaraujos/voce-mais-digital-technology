import Header from "../../components/Header/Header";
import Carrossel from "../../components/Carrossel/Carrossel";
import EscolhaCurso from "../../components/EscolhaCurso/EscolhaCurso";
import SomosMais from "../../components/SomosMais/SomosMais";
import MapaLocal from "../../components/MapaLocal/MapaLocal";
import Footer from "../../components/Footer/Footer";
import VenhaSerMais from "../../components/VenhaSerMais/VenhaSerMais";
import { BANNERS } from "../../data/data";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Carrossel imagens={BANNERS} />
        <EscolhaCurso />
        <SomosMais />
        <MapaLocal />
        <VenhaSerMais />
      </main>
      <Footer />
    </div>
  );
}
