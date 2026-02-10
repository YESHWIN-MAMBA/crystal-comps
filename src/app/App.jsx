import Header from "../components/Header";
import Hero from "../sections/Hero";
import PlayNow from "../sections/PlayNow";
import HowToPlay from "../sections/HowToPlay";
import AboutUs from "../sections/AboutUs";
import Newsletter from "../sections/Newsletter";
import Footer from "../sections/Footer";
import CrystalScene from "../three/CrystalScene";
import "../styles/globals.css";

export default function App() {
  return (
    <div className="app">
      {/* 3D is fixed behind content */}
      <CrystalScene />

      <Header />

      <main>
        <Hero id="home" />
        <PlayNow id="play" />
        <HowToPlay id="how" />
        <AboutUs id="about" />
        <Newsletter id="contact" />
      </main>

      <Footer />
    </div>
  );
}
