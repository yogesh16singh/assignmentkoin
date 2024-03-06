import Header from "../layouts/Header";
import Team from "../components/Team/TeamMember";
import Container from "../layouts/Container";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Team />
      </Container>
    </>
  );
};

export default LandingPage;
