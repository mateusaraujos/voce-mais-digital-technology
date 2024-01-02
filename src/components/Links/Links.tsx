import LinksProps from "./LinksProps";

export default function Links({ url, text }: LinksProps) {
  return (
    <li>
      <a className="links-header" href={url}>
        {text}
      </a>
    </li>
  );
}
