import { Navigate, Outlet } from "react-router-dom";
import { PrivatePageTemplate } from "../PrivatePageTemplate";
import { useEffect, useState } from "react";

export const AuthChecker: React.FC = () => {
  const [currentPlaylistId, setCurrentPlaylistId] = useState<string>();
  const [isTokenValid, setIsTokenValid] = useState<boolean | undefined>(
    undefined
  );

  useEffect(() => {
    const token = window.localStorage.getItem("access_token");
    if (token)
      if (JSON.parse(atob(token.split(".")[1]))) return setIsTokenValid(true);

    setIsTokenValid(false);
  }, []);

  if (isTokenValid === false) return <Navigate to="/login" />;

  if (isTokenValid === true)
    return (
      <PrivatePageTemplate>
        <Outlet />
      </PrivatePageTemplate>
    );

  return <>...loading</>;
};
