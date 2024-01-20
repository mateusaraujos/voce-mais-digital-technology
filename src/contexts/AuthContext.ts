import { createContext } from "react";

import { AuthContextProps } from "../types/authTypes";

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);
