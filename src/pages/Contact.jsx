import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import ContactInfo from "../components/ContactInfo";
import ContactMap from "../components/ContactMap";
import fabricBg from "../assets/images/tees-bg.png";
import FloatingCart from "../components/FloatingCart";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <PageHeader
        title="Contact Us"
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact" },
        ]}
        backgroundImage={fabricBg}
      />

      <ContactInfo />
      <ContactMap />

      <Footer />
      <FloatingCart />
    </div>
  );
};

export default Contact;