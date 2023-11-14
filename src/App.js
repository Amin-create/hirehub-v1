
import "../src/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  ForgotPasswordPage,
  RegisterPage
} from "./pages/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
        // element={<Layout />}
        >
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="register" element={<RegisterPage />} />
          {/* <Route path="about" element={<AboutPage />} /> */}
          {/* <Route path="features" element={<FeaturesPage />} />  */}
          {/* <Route path="contact" element={<ContactPage />} /> */}
          {/* <Route path="terms-of-conditions" element={<TermsOfConditionsPage />} /> */}
          {/* <Route path="privacy-policy" element={<PrivacyPolicyPage />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
