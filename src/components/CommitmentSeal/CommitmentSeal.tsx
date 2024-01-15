import { useTheme } from "../../hooks/useTheme";
import { SealArticle, Stamp } from "../../styles/commitmentSeal";

import imgSelo from "/img/icons/selo.png";

export default function CommitmentSeal() {
  const { theme } = useTheme();

  return (
    <SealArticle theme={theme}>
      <div className="center-article">
        <div className="article-commitment">
          <Stamp className="stamp" src={imgSelo} alt="Selo" />
          <p>
            Compromisso absoluto com a<br /> excelência em cada curso.
          </p>
        </div>
      </div>
    </SealArticle>
  );
}
