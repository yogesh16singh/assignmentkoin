import Header from "../layouts/Header";
import Team from "../components/Team/TeamMember";
import Container from "../layouts/Container";
import Tokenomics from "../components/Tokenomics";
const LandingPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Team />
        <Tokenomics />
      </Container>
    </>
  );
};

export default LandingPage;
