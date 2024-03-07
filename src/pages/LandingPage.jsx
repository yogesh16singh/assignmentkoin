import Header from "../layouts/Header";
import Team from "../components/Team";
import Container from "../layouts/Container";
import Tokenomics from "../components/Tokenomics";
import About from "../components/About";
const LandingPage = () => {
  return (
    <>
      <Header />
      <Container>
        <About />
        <Tokenomics />
        <Team />
      </Container>
    </>
  );
};

export default LandingPage;
