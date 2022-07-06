import { About, Hero, Navigation,Skills,Footer ,Contact,Experience,Projects} from "../../Components/exports";
import "./Home.css";

function Home() {
  return (
    <div className="home">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/* <Experience /> */}
        <Contact />
        <Footer />
    </div>
  );
}

export default Home;
