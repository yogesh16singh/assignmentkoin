import { useRoutes, Navigate } from "react-router-dom";
import { LandingPage } from "./element";
import { CryptoCoinContextProvider } from "../context/CryptoCoinContext";
const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to="/bitcoin" replace />,
      index: true,
    },
    {
      path: "/:id",
      element: (
        <CryptoCoinContextProvider>
          <LandingPage />
        </CryptoCoinContextProvider>
      ),
    },
  ]);
};

export default Router;
