import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedRooms from "./components/FeaturedRooms";
import About from "./components/About";
import Amenities from "./components/Amenities";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="app-wrapper">

      <Navbar />

      <Hero />

      <FeaturedRooms />

      <About />

      <Testimonials />

      <Amenities />

      <Gallery />

      <Footer />

    </div>
  );
}

export default App;