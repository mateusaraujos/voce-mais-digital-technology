import { HeaderLink } from "../types/types";

export default function Links({ url, text }: HeaderLink) {
  return (
    <li>
      <a className="page-links" href={url}>
        {text}
      </a>
    </li>
  );
}
