import { Navigate, useLocation } from "react-router-dom";
import { isLoggedIn } from "./utils/auth";
import { writeJson } from "./utils/storage";

function ProtectedRoute({ children }) {
  const location = useLocation();

  if (!isLoggedIn()) {
    writeJson("redirectAfterLogin", location.pathname + location.search);
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
