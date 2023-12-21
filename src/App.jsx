import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SomosMais from "./components/SomosMais/SomosMais";
import MapaLocal from "./components/MapaLocal/MapaLocal";
import Carrossel from "./components/Carrossel/Carrossel";
import { BANNERS } from "./data/data";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Carrossel images={BANNERS} />
        <SomosMais />
        <MapaLocal />
      </main>
      <Footer />
    </div>
  );
}

export default App;
