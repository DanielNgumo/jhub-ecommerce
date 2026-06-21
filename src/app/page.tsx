import Navbar from "./features/landing-page/components/Navbar";
import HeroSection from "./features/landing-page/components/HeroSection";
import Products from "./features/landing-page/components/Products";
import WhyUs from "./features/landing-page/components/WhyUs";
import ContactUs from "./features/landing-page/components/ContactUs";
import Footer from "./features/landing-page/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Products />
      <WhyUs />
      <ContactUs />
      <Footer />
    </>
  );
}
