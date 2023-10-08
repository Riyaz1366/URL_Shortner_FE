import Login from "./Login";
import Pages from "./Pages";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import ShortenURL from "./ShortenURL";
import ResetPassword from "./ResetPassword";
import ShortenedURLList from './ShortenedURLList'; 
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";



import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">


      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/page" element={<Pages />} />
        <Route path="/forgetpassword" element={<ForgotPassword />} />
        <Route path="/ShortenURL" element={<ShortenURL />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/ShortenedURLList" element={<ShortenedURLList />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
