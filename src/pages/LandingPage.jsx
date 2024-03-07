import Navbar from "../layouts/Navbar";
import Team from "../components/Team";
import Container from "../layouts/Container";
import Tokenomics from "../components/Tokenomics";
import Performance from "../components/Performance";
import About from "../components/About";
import Sidebar from "../components/Sidebar";
import Sentiment from "../components/Sentiment";
import SubHeader from "../components/SubNavbar";
// import Hero from "../components/Hero";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Container>
        {/* <Hero /> */}
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
