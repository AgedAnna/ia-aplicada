import About from "./about/About";
import Header from "./header/Header";
import Ia from "./ia/Ia";

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <section id="home">
        <Ia />
      </section>
      <section id="proposta">
        <About />
      </section>
      {/* <section id="clients">
        <Clientes />
      </section>
      <section id="contact">
        <Contact />
      </section>  
      <FooterPage /> */}
    </>
  );
};

export default LandingPage;
