import { Route, Navigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import { PrivateRouteProps } from "../types/authTypes";

export default function PrivateRoute({ children, ...rest }: PrivateRouteProps) {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      element={
        isAuthenticated ? (
          <>{children}</>
        ) : (
          <Navigate to="/authenticate" replace={false} />
        )
      }
    />
  );
}
