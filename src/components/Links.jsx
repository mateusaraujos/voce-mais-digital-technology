import PropTypes from "prop-types";

export default function Links({ url, texto }) {
  return (
    <li>
      <a href={url}>{texto}</a>
    </li>
  );
}

Links.propTypes = {
  url: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
};