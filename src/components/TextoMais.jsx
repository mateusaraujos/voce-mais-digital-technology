import PropTypes from "prop-types";

export default function TextoMais({ texto }) {
  return <p>{texto}</p>;
}

TextoMais.propTypes = {
  texto: PropTypes.node.isRequired,
};
