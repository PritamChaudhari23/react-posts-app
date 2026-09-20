import { createContext, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  login as loginAction,
  logout as logoutAction,
} from "../../store/slices/authSlice";

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  const isAuthenticated = !!token;

  const login = (credentials) => dispatch(loginAction(credentials));
  const logout = () => dispatch(logoutAction());

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
