import Footer from "components/Footer/Footer";
import styles from "./Homepage.module.scss";
import Header from "./components/header/Header";
import CrewSection from "./components/CrewSection/CrewSection";
import Services from "./components/Services/Services";

const Homepage = () => {
  return (
    <>
      <Header />
      <CrewSection />
      <Services />
      <Footer />
    </>
  );
};

export default Homepage;
