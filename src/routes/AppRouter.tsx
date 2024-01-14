import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/*
      <Route path="/portal-do-aluno" element={<PortalAluno />} />
      <Route path="/catalogo-de-cursos" element={<CatalogoCursos />} />
      */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
