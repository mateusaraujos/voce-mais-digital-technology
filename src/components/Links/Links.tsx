import LinksProps from "./LinksProps";

export default function Links({ url, texto }: LinksProps) {
  return (
    <li>
      <a className="links-header" href={url}>
        {texto}
      </a>
    </li>
  );
}
  