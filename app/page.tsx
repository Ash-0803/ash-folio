"use client";
import Hero from "./components/hero-section/Hero";
import Works from "./components/work-section/Works";
import About from "./components/about-section/About";
import Contact from "./components/contact+footer/Contact";
import Footer from "./components/contact+footer/Footer";
import { initialBlobityOptions } from "@/utils/blobity.config";
import useBlobity from "blobity/lib/react/useBlobity";
import Lenis from "./components/util/Lenis";

export default function Home() {
  const blobity = useBlobity(initialBlobityOptions);

  return (
    <Lenis>
      <main className="overflow-x-hidden sm:overflow-x-visible">
        <Hero />
        <Works />
        <About />
        <Contact />
        <Footer />
      </main>
    </Lenis>
  );
}
