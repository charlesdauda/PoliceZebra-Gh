import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ProductCard from "./ProductCard";
import { products, categories } from "../data/Products";

const ShopIntro = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const filteredProducts = products.filter(
    (p) => p.category === activeCategory
  );

  return (
    <>
      <section className="px-6 lg:px-12 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight text-blue-950 mb-4">
            Shop Our Collection
          </h2>
          <p className="text-blue-950/60 leading-relaxed">
            Quality textiles crafted with care. Browse our range of everyday
            essentials, made for comfort and built to last. Pick your
            favorites, add them to your cart, and we'll handle the rest.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-12">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-bold tracking-wider uppercase text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-blue-700 text-white shadow-lg scale-105"
                  : "bg-white text-blue-950 hover:bg-blue-50 border border-blue-950/10"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>

      <section className="lg:hidden px-6 pb-20">
        <Swiper
          key={activeCategory}
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={16}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet !bg-blue-950/30",
            bulletActiveClass: "swiper-pagination-bullet-active !bg-blue-700",
          }}
          className="pb-10!"
        >
          {filteredProducts.map((product) => (
            <SwiperSlide key={product.id} className="h-auto">
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      
      <section className="hidden lg:block px-6 lg:px-12 pb-20">
        <div className="grid grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ShopIntro;