import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignIn from "./pages/signIn/SignIn";
import Home from "./pages/home/Home";
import SignUp from "./pages/signup/SignUp";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  </Router>
);

export default AppRoutes;
