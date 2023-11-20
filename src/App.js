import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AdminDashboard,
  LoginPage,
  ForgotPasswordPage,
  ManageEmployers,
  ManageCandidates,
  ManageProfile,
  RegisterPage,
  EmployerDashboard,
  ApprovedEmployers,
} from "./pages/index";
import { AdminLayout, EmployerLayout } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="login" element={<LoginPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        <Route path="register" element={<RegisterPage />} />

        <Route path="admin/" element={<AdminLayout />} >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="manage-employers" element={<ManageEmployers />} />
          <Route path="manage-candidates" element={<ManageCandidates />} />
          <Route path="approved-employees" element={<ApprovedEmployers />} />
        </Route>

        <Route path="employer/" element={<EmployerLayout />} >
          <Route path="dashboard" element={<EmployerDashboard />} />
          <Route path="manage-profile" element={<ManageProfile />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
