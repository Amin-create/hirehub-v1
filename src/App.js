import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Dashboard,
  LoginPage,
  ForgotPasswordPage, ManageEmployers,
  RegisterPage
} from "./pages/index";
import { AdminLayout } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="login" element={<LoginPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        <Route path="register" element={<RegisterPage />} />

        <Route path="admin/" element={<AdminLayout />} >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="manage-employers" element={<ManageEmployers />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
