import { HeaderLink } from "../types/types";

export default function Links({ url, text }: HeaderLink) {
  return (
    <li>
      <a className="links-header" href={url}>
        {text}
      </a>
    </li>
  );
}
