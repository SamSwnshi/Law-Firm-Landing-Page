import "./App.css";
import Hero from "./Component/Hero/Hero";
import Intro from "./Component/Intro/Intro";
import Card from "./Component/Card/Card";
import Practices from "./Component/Practices/Practices";
import Clients from "./Component/Clients/Clients";
import OurTeam from "./Component/OurTeam/Ourteam";
import Faq from "./Component/Faq/Faq";
import Newsletter from "./Component/Newsletter/Newsletter";
import Footer from "./Component/Footer/Footer";
function App() {
  return (
    <>
      <div>
        <Hero />
        <Intro />
        <Card />
        <Practices />
        <Clients />
        <OurTeam />
        <Faq />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}

export default App;
