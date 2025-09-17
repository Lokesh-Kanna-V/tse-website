"use client";
import { Carousel } from "flowbite-react";

export default function HeroImageCarousel() {
  return (
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96 shadow-xl/30">
      <Carousel slide={true} slideInterval={5000}>
        <img src="/bby-cloth-things.jpg" alt="Baby Clothes" />
        <img src="/adult-cloth-things.jpg" alt="Adult Clothes" />
        <img src="/giftsets.jpg" alt="Gift Sets" />
        <img src="/homedecor.jpg" alt="Home Decor" />
      </Carousel>
    </div>
  );
}
