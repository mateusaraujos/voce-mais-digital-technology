import PropTypes from "prop-types";

export default function SocialLinks({ children, url, imagem, alt }) {
  return (
    <li>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img className="icon" src={imagem} alt={alt} align="left" />
        {children}
      </a>
    </li>
  );
}

SocialLinks.propTypes = {
  children: PropTypes.node.isRequired, // Aceita qualquer nó React.
  url: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
