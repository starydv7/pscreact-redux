import{ Routes, Route } from "react-router-dom";
import './App.css';
import Admin from "./components/Admin";
import AdminLogin from "./components/AdminLogin";
import Home from "./components/Home";
import Hotels from "./components/Hotels";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/hotel" element={<Hotels />} />
        
     </Routes>
    </div>
  );
}

export default App;
