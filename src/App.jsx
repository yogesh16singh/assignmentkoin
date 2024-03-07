import { BrowserRouter } from "react-router-dom";
// import { CryptoCoinContextProvider } from "./context/CryptoCoinContext";
import Router from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
