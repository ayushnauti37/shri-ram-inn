import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedRooms from "./components/FeaturedRooms";
import About from "./components/About";
import Amenities from "./components/Amenities";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Stats from "./components/Stats";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats/>
      <FeaturedRooms />
      <About />
      <Amenities />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;