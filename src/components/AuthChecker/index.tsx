import { Navigate, Outlet } from "react-router-dom";
import { PrivatePageTemplate } from "../PrivatePageTemplate";

export const AuthChecker: React.FC = () => {
  const auth = { token: true };

  if (auth.token)
    return (
      <PrivatePageTemplate>
        <Outlet />
      </PrivatePageTemplate>
    );

  return <Navigate to="/login" />;
};
