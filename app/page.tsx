import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Products from "./components/Products";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <About />
        <Benefits />
        <Products />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
