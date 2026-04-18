import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Products from "./components/Products";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <Story />
        <Products />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
