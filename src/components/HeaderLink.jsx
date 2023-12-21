import PropTypes from "prop-types";

export default function HeaderLink({ url, texto }) {
  return (
    <li>
      <a href={url}>{texto}</a>
    </li>
  );
}

HeaderLink.propTypes = {
  url: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
};
