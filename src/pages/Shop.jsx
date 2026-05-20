import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import ShopIntro from "../components/ShopIntro";
import fabricBg from "../assets/images/tees-bg.png";
import FloatingCart from "../components/FloatingCart";

const Shop = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <PageHeader
        title="Our Shop"
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Shop", path: "/shop" },
        ]}
        backgroundImage={fabricBg}
      />

      <ShopIntro />

      <Footer />
      <FloatingCart />
    </div>
  );
};

export default Shop;