import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About"; 
import Shop from "./pages/Shop";
import ContactPage from "./pages/Contact";
import Cart from "./pages/Cart";
import Gallery from "./pages/Gallery";



const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />  
        <Route path="/gallery" element={<Gallery />} /> 
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
