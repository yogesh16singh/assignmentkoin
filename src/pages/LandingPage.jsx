import Header from "../layouts/Header";
import Team from "../components/Team";
import Container from "../layouts/Container";
import Tokenomics from "../components/Tokenomics";
import About from "../components/About";
// import Sidebar from "../components/Sidebar";
import Sentiment from "../components/Sentiment";
const LandingPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Sentiment />
        <About />
        <Tokenomics />
        <Team />
      </Container>
      {/* <Sidebar /> */}
    </>
  );
};

export default LandingPage;
