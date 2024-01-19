import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Authenticate from "../pages/Authenticate/Authenticate";
import DevPage from "../pages/auth/DevPage";
import AdminPage from "../pages/auth/AdminPage";
import TeacherPage from "../pages/auth/TeacherPage";
import StudentPage from "../pages/auth/StudentPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/authenticate" element={<Authenticate />} />

      <Route path="/dev" element={<DevPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/teacher" element={<TeacherPage />} />
      <Route path="/student" element={<StudentPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
