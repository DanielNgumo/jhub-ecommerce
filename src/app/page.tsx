import HeroSection from "./features/landing-page/components/HeroSection";
import AboutUs from "./features/landing-page/components/AboutUs";
import Products from "./features/landing-page/components/Products";
import WhyUs from "./features/landing-page/components/WhyUs";
import ContactUs from "./features/landing-page/components/ContactUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Products />
      <WhyUs />
      <ContactUs />
    </>
  );
}
