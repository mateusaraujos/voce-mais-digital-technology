import { SocialLink } from "../types/types";

export default function SocialLinks({ children, url, image, alt }: SocialLink) {
  return (
    <li>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img className="icon" src={image} alt={alt} style={{ float: "left" }} />
        {children}
      </a>
    </li>
  );
}
