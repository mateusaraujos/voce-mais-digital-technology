import PropTypes from "prop-types";

export default function ExemplosCursos({ imagem, alt, legenda }) {
  return (
    <figure>
      <img className="img-exemplos" src={imagem} alt={alt} />
      <figcaption>{legenda}</figcaption>
    </figure>
  );
}

ExemplosCursos.propTypes = {
  imagem: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  legenda: PropTypes.node.isRequired,
};
