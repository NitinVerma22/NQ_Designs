import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import ContactUs from "./components/ContacUs";
import MobileNav from "./components/MobileNav";
import Gallery from "./components/Gallery";
export default function Home() {
  return (
    <>
   <Header />
   <HeroSection/>
   <Services/>
   <Gallery/>
   <Footer/>
   <MobileNav/>
   </>
  );
}
