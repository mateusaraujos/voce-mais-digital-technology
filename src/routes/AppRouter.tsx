import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Authenticate from "../pages/Authenticate/Authenticate";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/authenticate" element={<Authenticate />} />
      {/*
      <Route path="/portal-do-aluno" element={<PortalAluno />} />
      */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
