import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Página não encontrada | Você+Digital</title>

        <meta
          name="description"
          content="Página de erro personalizada para a Você+Digital"
        />

        <meta
          name="keywords"
          content="Erro, 404, NotFound, React, TypeScript"
        />
      </Helmet>

      <h1>Página não encontrada!</h1>
    </>
  );
}
