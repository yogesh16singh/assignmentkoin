import { BrowserRouter } from "react-router-dom";
import { CryptoCoinContextProvider } from "./context/CryptoCoinContext";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    // <CryptoCoinContextProvider>
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
    // </CryptoCoinContextProvider>
  );
};

export default App;
