"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import {Hero} from "./components/Hero";
import ChartsPage from "./components/Scoreboard";

export function WrapCast() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <ShootingStars />
        <StarsBackground />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <Hero />
        <ChartsPage />
      </div>
    </div>
  );
}

export default WrapCast;