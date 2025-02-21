import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { PublicRoute } from "./components/PublicRoute";
import { useState, useEffect } from "react";

const AppRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/signin"
          element={
            <PublicRoute isAuthenticated={isAuthenticated}>
              <SignIn setIsAuthenticated={setIsAuthenticated} />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute isAuthenticated={isAuthenticated}>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Home setIsAuthenticated={setIsAuthenticated} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/home" />
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
