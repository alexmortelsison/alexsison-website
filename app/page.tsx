import React from "react";
import { Vortex } from "./components/ui/vortex";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <Vortex className="min-h-screen min-w-full">
      <Hero />
    </Vortex>
  );
}
