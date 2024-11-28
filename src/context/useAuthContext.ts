import { useContext } from "react";
import { AuthContext } from ".";

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("You mush use auth Context inside Auth Context Provider");
  }

  return authContext;
};
