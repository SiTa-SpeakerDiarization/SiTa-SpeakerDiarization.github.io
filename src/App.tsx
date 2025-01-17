import CoverImage from "./components/CoverImage";
import ScrollSection from "./components/ScrollSection";
import StaticSection from "./components/StaticSection";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <CoverImage />
      <ScrollSection />
      <StaticSection />
      <Footer />
    </div>
  );
}

export default App;
