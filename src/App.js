// Components
import HeaderTop from "./components/headerTop/HeaderTop";
import HeaderTitle from "./components/headerTitle/HeaderTitle";
import HeaderFooter from "./components/headerFooter/HeaderFooter";
import Benefits from "./components/benefits/Benefits";
import Apartments from "./components/apartments/Apartmets";
import Cta from "./components/cta/Cta";
import Video from "./components/video/Video";
import SectionMap from "./components/sectionMap/SectionMap";
import Feedback from "./components/feedback/Feedback";
import Footer from "./components/footer/Footer";

// Styles
import "./css/main.css";

// App
function App() {
  return (
    <div className="App">
      <header className="header">
        <HeaderTop />
        <HeaderTitle />
        <HeaderFooter />
      </header>

      <main>
        <Benefits />
        <Apartments />
        <Cta />
        <Video />
        <SectionMap />
        <Feedback />
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
