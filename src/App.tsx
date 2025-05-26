import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
// Update the import path below if your Register component is located elsewhere
import ForgotPassword from "./pages/login/forgotPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
