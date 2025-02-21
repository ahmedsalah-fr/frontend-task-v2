import { Navigate } from "react-router-dom";

interface PublicRouteProps {
  children: React.ReactNode;
  isAuthenticated: boolean;
}

export const PublicRoute = ({
  children,
  isAuthenticated,
}: PublicRouteProps) => {
  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }

  return <>{children}</>;
};
