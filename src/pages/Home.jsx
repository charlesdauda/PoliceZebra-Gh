import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Collection from "../components/Collection";
import Services from "../components/Services";
import Testing from "../components/Testing";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import FloatingCart from "../components/FloatingCart";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <Collection />
      <Services />
      <Testing />
      <Process />
      <Testimonials />
      <Footer />
      <FloatingCart />
    </div>
  );
};

export default Home;