import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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

          <PrivateRoute path="/dev">
            <DevPage />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <AdminPage />
          </PrivateRoute>
          <PrivateRoute path="/teacher">
            <TeacherPage />
          </PrivateRoute>
          <PrivateRoute path="/student">
            <StudentPage />
          </PrivateRoute>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
