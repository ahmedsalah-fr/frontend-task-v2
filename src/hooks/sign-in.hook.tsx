import { useState } from "react";
import { staticEmail, staticPassword } from "../constants";
import useScreenSize from "./screen-size.hook";
import { useNavigate } from "react-router-dom";

const useSignIn = (setIsAuthenticated: (value: boolean) => void) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const { isMobile } = useScreenSize();
  const { isTablet } = useScreenSize();

  const navigate = useNavigate();

  const handlePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSignIn = () => {
    try {
      if (email === staticEmail && password === staticPassword) {
        localStorage.setItem("isAuthenticated", "true");
        setIsAuthenticated(true);
        navigate("/home", { replace: true });
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      console.error("Navigation error:", err);
      setError("An error occurred during sign in");
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    handlePasswordVisibility,
    handleSignIn,
    error,
    isMobile,
    isTablet,
  };
};

export default useSignIn;
