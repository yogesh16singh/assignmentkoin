import Header from "../layouts/Header";
import Team from "../components/Team";
import Container from "../layouts/Container";
import Tokenomics from "../components/Tokenomics";
import Performance from "../components/Performance";
import About from "../components/About";
import Sidebar from "../components/Sidebar";
import Sentiment from "../components/Sentiment";
import SubHeader from "../components/SubHeader";
import Hero from "../components/Hero";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Hero />
        <SubHeader />
        <Performance />
        <Sentiment />
        <About />
        <Tokenomics />
        <Team />
      </Container>
      <Sidebar />
    </>
  );
};

export default LandingPage;
