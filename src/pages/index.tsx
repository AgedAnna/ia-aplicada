import About from "./about/About";
import Group from "./group/Group";
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
      <section id="equipe">
        <Group />
      </section>
    </>
  );
};

export default LandingPage;
