// === IMAGE IMPORTS ===
import sportsock from "../assets/images/products/sportred.webp";
import basicsock from "../assets/images/products/basicash.webp";
import trendysock from "../assets/images/products/trendyblue.webp";
import comfortsock from "../assets/images/products/comfort1.webp";


import menbox from "../assets/images/products/menbox1.webp";
import menunder from "../assets/images/products/underwear1.webp";
import premiumBoxer from "../assets/images/products/premium1.webp";
import platinumBoxer from "../assets/images/products/platinum1.webp";

import classicShorts from "../assets/images/products/class1.webp";
import casualShorts from "../assets/images/products/casual1.webp";
import swimShorts from "../assets/images/products/swimshort1.webp";
import vibesShorts from "../assets/images/products/vibes1.webp";

import plainTee from "../assets/images/products/plain1.webp";
import lacImg from "../assets/images/products/lac1.webp";
import graphicTee from "../assets/images/products/graphic1.webp";
import Police83 from "../assets/images/products/tee1.webp";


//import cottonSinglet from "../assets/images/products/wool.jpg";
//import sportsSinglet from "../assets/images/products/wool.jpg";
//import ribbedSinglet from "../assets/images/products/wool.jpg";

import basicFlips from "../assets/images/products/fb1.webp";
import CamoFlips from "../assets/images/products/camo1.webp";
import Thongs from "../assets/images/products/flat1.webp";
import Flip83 from "../assets/images/products/flip831.webp";

import sporthover from "../assets/images/products/sportyellow.webp";
import basichover from "../assets/images/products/basicblack.webp";
import Trendyhover from "../assets/images/products/trendyash.webp";
import comforthover from "../assets/images/products/comfort2.webp";

import menhover from "../assets/images/products/menbox2.webp";
import underhover from "../assets/images/products/underwear2.webp";
import premiumHover from "../assets/images/products/premium2.webp";
import platinumHover from "../assets/images/products/platinum2.webp";

import classicHover from "../assets/images/products/class2.webp";
import casualHover from "../assets/images/products/casual2.webp";
import swimHover from "../assets/images/products/swimshort2.webp";
import vibesHover from "../assets/images/products/vibes2.webp";

import plainHover from "../assets/images/products/plain2.webp";
import lacHover from "../assets/images/products/lac2.webp";
import graphicHover from "../assets/images/products/graphic2.webp";
import Police83Hover from "../assets/images/products/tee2.webp";

import basicFlipsHover from "../assets/images/products/fb2.webp";
import CamoFlipsHover from "../assets/images/products/camo2.webp";
import ThongsHover from "../assets/images/products/flat2.webp";
import Flip83Hover from "../assets/images/products/flip832.webp";

// === SIZE SETS ===
// Define different size formats once, then reference per product
const SIZES = {
  clothing: ["S", "M", "L", "XL", "XX"],
  socks: ["1", "2", "3", "4"],
  footwear: ["38", "39", "40", "41", "42", "43", "44", "45"],
  freeSize: ["Free Size"],
};

// === COLOR PALETTE ===
export const ALL_COLORS = {
  Pink: "#ec4899",
  Black: "#000000",
  Orange: "#f97316",
  Brown: "#92400e",
  Blue: "#1d4ed8",
  Purple: "#9333ea",
  White: "#ffffff",
  Ash: "#9ca3af",
  Yellow: "#facc15",
  Green: "#16a34a",
  Red: "#ef4444",
  Grey: "#6b7280",
  BlueBlack : "#1e293b",
};

// === PRODUCTS ===
export const products = [
  // ----- Socks -----
  {
    id: "sock-1",
    category: "socks",
    name: "Police Sport Sock Black Serie",
    description: "Comfortable cotton ankle socks, pack of 3.",
    price: 30,
    image: sportsock,
    hoverImage: sporthover,
    sizes: SIZES.socks,
    colors: ["Red", "Yellow", "White"],
  },
  {
    id: "sock-2",
    category: "socks",
    name: "Police Basic Socks",
    description: "Soft cotton crew socks, pack of 3.",
    price: 40,
    image: basicsock,
    hoverImage: basichover,
    sizes: SIZES.socks,
    colors: ["Black", "Ash", "Grey"],
  },
  {
    id: "sock-3",
    category: "socks",
    name: "Police Trendy Socks",
    description: "Breathable performance socks, pack of 5.",
    price: 55,
    image: trendysock,
    hoverImage: Trendyhover,
    sizes: SIZES.socks,
    colors: ["Brown", "Ash", "Blue"],
  },
  {
    id: "sock-5",
    category: "socks",
    name: "Police Comfortable Style Socks",
    description: "Breathable performance socks, pack of 5.",
    price: 55,
    image: comfortsock,
    hoverImage: comforthover,
    sizes: SIZES.socks,
    colors: ["Ash", "Blue", "Black"],
  },

  // ----- Boxers -----
  {
    id: "boxer-1",
    category: "boxers",
    name: "Police 1983 Men Boxer",
    description: "Premium cotton boxer brief with elastic waistband.",
    price: 35,
    image: menbox,
    hoverImage: menhover,
    sizes: SIZES.clothing,
    colors: ["BlueBlack", "Orange", "Ash"],
  },
  {
    id: "boxer-2",
    category: "boxers",
    name: "Police Underwear",
    description: "Lightweight mesh boxer for active days.",
    price: 45,
    image: menunder,
    hoverImage: underhover,
    sizes: SIZES.clothing,
    colors: ["Black", "Ash", "Blue", "Grey", "White"],
  },
  {
    id: "boxer-3",
    category: "boxers",
    name: "Police Max",
    description: "Pack of 3 premium boxers in assorted colors.",
    price: 90,
    image: premiumBoxer,
    hoverImage: premiumHover,
    sizes: SIZES.clothing,
    colors: ["Black", "Blue", "Green", "Ash", "White"],
  },
    {
    id: "boxer-4",
    category: "boxers",
    name: "Police Platinum Boxer",
    description: "Pack of 3 premium boxers in assorted colors.",
    price: 90,
    image: platinumBoxer,
    hoverImage: platinumHover,
    sizes: SIZES.clothing,
    colors: ["Black", "Blue", "Brown", "Ash"],
  },

  // ----- Shorts -----
  {
    id: "short-1",
    category: "shorts",
    name: "Police Classic Shorts",
    description: "Everyday cotton shorts with drawstring.",
    price: 80,
    image: classicShorts,
    hoverImage: classicHover,
    sizes: SIZES.clothing,
    colors: ["Black", "Blue", "Ash"],
  },
  {
    id: "short-2",
    category: "shorts",
    name: "Police Casual Shorts",
    description: "Breathable mesh shorts perfect for training.",
    price: 95,
    image: casualShorts,
    hoverImage: casualHover,
    sizes: SIZES.clothing,
    colors: ["Black", "Ash", "Blue", "Brown"],
  },
  {
    id: "short-3",
    category: "shorts",
    name: "Premium Cotton Shorts",
    description: "Soft premium shorts for relaxed comfort.",
    price: 120,
    image: swimShorts,
    hoverImage: swimHover,
    sizes: SIZES.clothing,
    colors: ["Black", "Brown", "Ash", "Blue"],
  },
   {
    id: "short-4",
    category: "shorts",
    name: "Premium Lounge Shorts",
    description: "Soft premium shorts for relaxed comfort.",
    price: 120,
    image: vibesShorts,
    hoverImage: vibesHover,
    sizes: SIZES.clothing,
    colors: ["Black", "Brown", "Ash", "Blue"],
  },

  // ----- Tees -----
  {
    id: "tee-1",
    category: "tees",
    name: "Police Cotton T-Shirt",
    description: "Classic plain cotton tee in essential colors.",
    price: 60,
    image: plainTee,
    hoverImage: plainHover,
    sizes: SIZES.clothing,
    colors: ["White", "Black", "Ash", "Blue", "Pink", "Green"],
  },
  {
    id: "tee-2",
    category: "tees",
    name: "Premium Police Lacoste",
    description: "Soft v-neck tee made from premium cotton blend.",
    price: 85,
    image: lacImg,
    hoverImage: lacHover,
    sizes: SIZES.clothing,
    colors: ["White", "Black", "Blue","BlueBlack", "Pink", "Green"],
  },
  {
    id: "tee-3",
    category: "tees",
    name: "Police Premium Graphic Tees",
    description: "Trendy oversized fit with bold graphic design.",
    price: 100,
    image: graphicTee,
    hoverImage: graphicHover,
    sizes: SIZES.clothing,
    colors: ["Black", "White", "Orange", "Ash"],
  },
   {
    id: "tee-4",
    category: "tees",
    name: "Police 1983 Graphic Tee",
    description: "Trendy oversized fit with bold graphic design.",
    price: 100,
    image: Police83,
    hoverImage: Police83Hover,
    sizes: SIZES.clothing,
    colors: ["Black", "White", "Purple", "Orange"],
  },

  // ----- Singlets -----
  /*
  {
    id: "singlet-1",
    category: "singlets",
    name: "Classic Cotton Singlet",
    description: "Lightweight cotton singlet for everyday wear.",
    price: 50,
    image: cottonSinglet,
    hoverImage: woolHover,
    sizes: SIZES.clothing,
    colors: ["White", "Black", "Ash"],
  },
  {
    id: "singlet-2",
    category: "singlets",
    name: "Sports Mesh Singlet",
    description: "Breathable mesh singlet for workouts.",
    price: 65,
    image: sportsSinglet,
    hoverImage: woolHover,
    sizes: SIZES.clothing,
    colors: ["Black", "Blue", "Ash", "White"],
  },
  {
    id: "singlet-3",
    category: "singlets",
    name: "Premium Ribbed Singlet",
    description: "Stretchy ribbed singlet with a modern fit.",
    price: 80,
    image: ribbedSinglet,
    hoverImage: woolHover,
    sizes: SIZES.clothing,
    colors: ["White", "Black", "Brown", "Ash"],
  }, */

  // ----- Footwear -----
  {
    id: "flipflop-1",
    category: "flipflop",
    name: "Basic Flip-Flops",
    description: "Comfortable everyday flip-flops with cushioned soles.",
    price: 180,
    image: basicFlips,
    hoverImage: basicFlipsHover,
    sizes: SIZES.footwear,
    colors: ["Yellow", "Black", "Blue"],
  },
  {
    id: "flipflop-2",
    category: "flipflop",
    name: "Luxe Flip-Flops",
    description: "Premium leather sandals for casual wear.",
    price: 140,
    image: CamoFlips,
    hoverImage: CamoFlipsHover,
    sizes: SIZES.footwear,
    colors: ["Brown", "Black"],
  },
  {
    id: "flipflop-3",
    category: "flipflop",
    name: "Police Thongs Flip-Flops",
    description: "Elegant suede loafers, perfect for any occasion.",
    price: 220,
    image: Thongs,
    hoverImage: ThongsHover,
    sizes: SIZES.footwear,
    colors: ["Yellow", "Green", "Blue", "Black", "Red"],
  },
    {
    id: "flipflop-4",
    category: "flipflop",
    name: "1983 Flip-Flops",
    description: "Elegant suede loafers, perfect for any occasion.",
    price: 220,
    image: Flip83,
    hoverImage: Flip83Hover,
    sizes: SIZES.footwear,
    colors: ["Brown", "Grey", "Blue"],
  },
];

// === CATEGORIES ===
export const categories = [
  { id: "socks", name: "Socks" },
  { id: "boxers", name: "Boxers" },
  { id: "shorts", name: "Shorts" },
  { id: "tees", name: "Tees" },
  /* { id: "singlets", name: "Singlets" }, */
  { id: "flipflop", name: "Flip Flops" },
];