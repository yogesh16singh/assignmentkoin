import { TrendingContextProvider } from "./context/TrendingContext";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <TrendingContextProvider>
      <LandingPage />
    </TrendingContextProvider>
  );
};

export default App;
