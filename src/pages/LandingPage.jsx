import Header from "../layouts/Header";
import Team from "../components/Team";
import Container from "../layouts/Container";
import Tokenomics from "../components/Tokenomics";
import About from "../components/About";
import Sidebar from "../components/Sidebar";
const LandingPage = () => {
  return (
    <>
      <Header />
      <Container>
        <About />
        <Tokenomics />
        <Team />
      </Container>
      <Sidebar />
    </>
  );
};

export default LandingPage;
