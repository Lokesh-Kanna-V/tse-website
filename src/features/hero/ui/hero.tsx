import React from "react";

//? Modules Import
import HeroMainContent from "../modules/hero-mainContent";
import HeroButtonSection from "../modules/hero-buttonSection";
import HeroSupportContent from "../modules/hero-supportContent";
import HeroImageCarousel from "../modules/hero-imageCarousel";

export default function Hero() {
  return (
    <div className="container mx-auto px-6 md:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div>
          <HeroMainContent />
          <div className="mt-4">
            <HeroButtonSection />
          </div>
          <div className="mt-6">
            <HeroSupportContent />
          </div>
        </div>

        <div>
          <HeroImageCarousel />
        </div>
      </div>
    </div>
  );
}
