import { Navigate, Outlet, useLocation } from "react-router-dom";

function ProtectedRoute({
  isAuthenticated = false,
  children,
  redirectTo = "/login",
}) {
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate
        to={redirectTo}
        replace
        state={{ from: location }}
      />
    );
  }

  return children || <Outlet />;
}

export default ProtectedRoute;