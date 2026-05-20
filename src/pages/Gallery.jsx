import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import GalleryGrid from "../components/GalleryGrid";
import FloatingCart from "../components/FloatingCart";
import fabricBg from "../assets/images/tees-bg.png";

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <PageHeader
        title="Gallery"
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ]}
        backgroundImage={fabricBg}
      />

      <GalleryGrid />

      <Footer />

      <FloatingCart />
    </div>
  );
};

export default Gallery;