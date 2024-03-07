// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

import Navbar from "../layouts/Navbar";
import Container from "../layouts/Container";

import BreadCrumbs from "../components/BreadCrumbs";
import Hero from "../components/Hero";
import SubHeader from "../components/SubNavbar";
import Performance from "../components/Performance";
import About from "../components/About";
import Tokenomics from "../components/Tokenomics";
import Sentiment from "../components/Sentiment";
import Sidebar from "../components/Sidebar";
import Team from "../components/Team";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Container>
        <BreadCrumbs />
        <Hero />
        <SubHeader />
        <Performance />
        <Sentiment />
        <About />
        <Tokenomics />
        <Team />
      </Container>
      <Footer />
      <Sidebar />
    </>
  );
};

export default LandingPage;
