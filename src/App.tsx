import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/login/ForgotPassword";
import ChangePassword from "./pages/login/ChangePassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/ChangePassword" element={<ChangePassword />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
