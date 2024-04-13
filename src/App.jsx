import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Notfound from "./pages/Notfound";
import Verify_Email from "./pages/Verify_Email";
import Forgot_Password from "./pages/Forgot_Password";
import Reset_Password from "./pages/Reset_Password";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/verify-email" element={<Verify_Email />} />
        <Route path="/forgot-password" element={<Forgot_Password />} />
        <Route path="/user/reset-password" element={<Reset_Password />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
