import HeroSection from "./features/landing-page/components/HeroSection";
import AboutUs from "./features/landing-page/components/AboutUs";
import Products from "./features/landing-page/components/Products";
import WhyUs from "./features/landing-page/components/WhyUs";
import ContactUs from "./features/landing-page/components/ContactUs";
import RainbowWrapper from "./components/RainbowWrapper";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <RainbowWrapper index={2}>
        <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <div className="rounded-3xl bg-white/20 p-8 text-white shadow-xl backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-4">Rainbow wrapper demo</h2>
            <p className="text-base text-white/90">
              This section uses the RainbowWrapper component and changes its background based on the provided index.
            </p>
          </div>
        </section>
      </RainbowWrapper>
      <Products />
      <WhyUs />
      <ContactUs />
    </>
  );
}
