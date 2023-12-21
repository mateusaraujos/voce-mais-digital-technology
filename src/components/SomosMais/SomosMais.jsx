import imgVideo from "../../assets/img/video.png";
import "./SomosMais.css";

export default function SomosMais() {
  return (
    <section id="section-two">
      <h2>
        <span className="thin">Somos a</span> você+digital
      </h2>
      <div className="center-section">
        <div className="section-mais">
          <div className="video-tamanho">
            <img className="video" src={imgVideo} alt="Vídeo" />
          </div>
          <div className="texto">
            <p>
              Na <strong>Você+Digital Technology</strong>, nossa paixão é
              desbravar o mundo tecnológico e tornar a educação acessível para
              todos. Nascemos da convicção de que a tecnologia é uma ferramenta
              poderosa para transformar vidas e impulsionar o futuro.
            </p>
            <p>
              Nosa missão é oferecer cursos práticos e especializados que
              capacitam estudantes e profissionais a dominar habilidades
              essenciais no universo digital.
            </p>
            <p>
              Nós valorizamos a excelência, a criatividade e a experiência do
              aprendizado. Acreditamos que cada passo na jornada tecnológica é
              uma oportunidade para o crescimento.
            </p>
            <p>
              Junte-se a nós e mergulhe em um ambiente de aprendizado inovador,
              onde a educação se concentra com a tecnologia, e cada conquista é
              um passo adiante para um futuro brilhante.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
