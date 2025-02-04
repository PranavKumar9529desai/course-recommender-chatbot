import React from "react";
import { HeroSection } from "./Sections/hero-section";
import Navbar from "./components/Navbar/Navbar";

export default function Page() {
  return (
    <main className="">
      <div className="fixed top-0 left-0 right-0 z-[100]">
        <Navbar />
      </div>
      <HeroSection />
    </main>
  );
}
