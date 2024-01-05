import imgSelo from "/img/icons/selo.png";

import "./CommitmentSeal.css";

export default function CommitmentSeal() {
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
