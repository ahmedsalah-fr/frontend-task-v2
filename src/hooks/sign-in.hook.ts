import { useState } from "react";
import { staticEmail, staticPassword } from "../constants";
import useScreenSize from "./screen-size.hook";

const useSignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const { isMobile } = useScreenSize();
  const { isTablet } = useScreenSize();

  const handlePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSignIn = () => {
    if (email === staticEmail && password === staticPassword) {
      setError("");
    } else {
      setError("Invalid email or password");
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
