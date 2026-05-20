import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import fabricBg from "../assets/images/tees-bg.png";
import Testimonials from "../components/Testimonials";
import { FaRecycle, FaBuilding, FaMicroscope } from "react-icons/fa";
import AboutUs from "../components/AboutUs";
import Marquee from "../components/Marquee";
import HowItWorks from "../components/HowItWorks";
import FloatingCart from "../components/FloatingCart";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="About Us"
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ]}
        backgroundImage={fabricBg}
      />
      <AboutUs />
      <Marquee />
      <HowItWorks />
      <Testimonials />
      <Footer />
      <FloatingCart />
    </div>
  );
};

export default About;