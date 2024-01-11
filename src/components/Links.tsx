import { HeaderLink } from "../types/appTypes";
import { useTheme } from "../hooks/useTheme";

import { HeaderLinks } from "../resources/themes/links";

export default function Links({ url, text }: HeaderLink) {
  const { theme } = useTheme();

  return (
    <li>
      <HeaderLinks theme={theme} className="page-links" href={url}>
        {text}
      </HeaderLinks>
    </li>
  );
}
