import { Suspense, lazy } from "react";
import LoadingScreen from "../components/LoadingScreen.jsx";

const Loadable = (Component) => (props) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

export const LandingPage = Loadable(
  lazy(() => import("../pages/LandingPage.jsx")),
);
