import { useEffect } from "react";

export const useDynamicHead = (favicon: string, theme: string) => {
  useEffect(() => {
    // Remover todos os favicons existentes
    const existingFavicons = document.querySelectorAll('link[rel="icon"]');
    existingFavicons.forEach((faviconElement) => {
      document.head.removeChild(faviconElement);
    });

    // Adicionar o novo favicon
    const newFavicon = document.createElement("link");
    newFavicon.rel = "icon";
    newFavicon.type = "image/x-icon";
    newFavicon.href = favicon;
    document.head.appendChild(newFavicon);

    // Adicionar o novo theme
    const newTheme = document.createElement("meta");
    newTheme.name = "theme-color";
    newTheme.content = theme;
    document.head.appendChild(newTheme);

    // Cleanup
    return () => {
      // Realizar a limpeza se necessário
    };
  }, [favicon, theme]);
};
