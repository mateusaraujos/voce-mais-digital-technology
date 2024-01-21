import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Authenticate from "../pages/Authenticate/Authenticate";
import DevPage from "../pages/auth/DevPage";
import AdminPage from "../pages/auth/AdminPage";
import TeacherPage from "../pages/auth/TeacherPage";
import StudentPage from "../pages/auth/StudentPage";
import AuthProvider from "../providers/AuthProvider";
import PrivateRoute from "./PrivateRoute";

export default function AppRouter() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authenticate" element={<Authenticate />} />

          <Route path="/dev" element={<PrivateRoute />}>
            <Route index element={<DevPage />} />
          </Route>
          <Route path="/admin" element={<PrivateRoute />}>
            <Route index element={<AdminPage />} />
          </Route>
          <Route path="/teacher" element={<PrivateRoute />}>
            <Route index element={<TeacherPage />} />
          </Route>
          <Route path="/student" element={<PrivateRoute />}>
            <Route index element={<StudentPage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
