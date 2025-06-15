import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ForgotPassword from "@/pages/forgot-password/ForgotPassword";
import ChangePassword from "@/pages/change-password/ChangePassword";
import Category from "./pages/category/Category";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/ChangePassword" element={<ChangePassword />} />

        {/* Route dùng layout Home */}
        <Route path="/" element={<Home />}>
          <Route path="category" element={<Category />} />
          {/* Có thể thêm các route con khác tại đây */}
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
