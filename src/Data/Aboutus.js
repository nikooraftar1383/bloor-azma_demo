import {  CiSearch } from "react-icons/ci";
import { SiAdguard } from "react-icons/si";
import { FaHeadphones ,FaShoppingBasket ,FaTruck } from "react-icons/fa";
const ourAdvantages = [
  {
    id: 1,
    title: "Smart Search",
    desc: "Find parts by brand and vehicle model.",
    icon: CiSearch,
    color: "text-teal-500",
    bg: "bg-teal-100",
  },
  {
    id: 2,
    title: "Genuine Parts",
    desc: "High-quality products from trusted brands.",
    icon: SiAdguard,
    color: "text-blue-500",
    bg: "bg-blue-100",
  },
  {
    id: 3,
    title: "Fast Delivery",
    desc: "Quick shipping across the country.",
    icon: FaTruck ,
    color: "text-purple-500",
    bg: "bg-purple-100",
  },
  {
    id: 4,
    title: "Expert Support",
    desc: "Professional help to choose the right part.",
    icon: FaHeadphones,
    color: "text-pink-500",
    bg: "bg-pink-100",
  },
  {
    id: 5,
    title: "Secure Shopping",
    desc: "Safe checkout with reliable payment.",
    icon: FaShoppingBasket,
    color: "text-orange-500",
    bg: "bg-orange-100",
  },
];
export default ourAdvantages;
