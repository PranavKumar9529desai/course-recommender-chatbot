import React from "react";
import { HeroSection } from "./Sections/hero-section";
import Navbar from "./components/Navbar/Navbar";

export default function Page() {
  return (
    <main className="">
      <div className="fixed top-0 z-30">
        <Navbar />
      </div>
      {/* Add padding-top to account for fixed navbar */}
      <HeroSection />
    </main>
  );
}
