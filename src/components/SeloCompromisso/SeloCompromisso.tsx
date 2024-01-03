import imgSelo from "/icons/selo.png";

import "./SeloCompromisso.css";

export default function SeloCompromisso() {
  return (
    <article>
      <div className="center-article">
        <div className="article-commitment">
          <img className="stamp" src={imgSelo} alt="Selo" />
          <p>
            Compromisso absoluto com a<br /> excelência em cada curso.
          </p>
        </div>
      </div>
    </article>
  );
}
