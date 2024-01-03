import { HeaderLink } from "../types/appTypes";

export default function Links({ url, text }: HeaderLink) {
  return (
    <li>
      <a className="page-links" href={url}>
        {text}
      </a>
    </li>
  );
}
