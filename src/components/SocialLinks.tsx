import { useTheme } from "../hooks/useTheme";
import { FooterSocialLink, SocialIcons } from "../resources/themes/socialLinks";
import { SocialLink } from "../types/appTypes";

export default function SocialLinks({ children, url, image, alt }: SocialLink) {
  const { theme } = useTheme();

  return (
    <li>
      <FooterSocialLink
        theme={theme}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialIcons className="icon" src={image} alt={alt} style={{ float: "left" }} />
        {children}
      </FooterSocialLink>
    </li>
  );
}
