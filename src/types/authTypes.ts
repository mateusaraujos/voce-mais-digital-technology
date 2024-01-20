import { ReactNode } from "react";

export interface AuthContextProps {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export interface PrivateRouteProps {
  path: string;
  children: React.ReactNode;
}
