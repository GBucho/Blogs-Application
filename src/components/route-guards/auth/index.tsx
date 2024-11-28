import { useAtom } from "jotai";
// import { useAuthContext } from "../../../context/useAuthContext";
import { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { userAtom } from "../../../store/auth";

const AuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const [user] = useAtom(userAtom);

  if (user) {
    return <Navigate to="/write" />;
  }

  return children || <Outlet />;
};

export default AuthGuard;
