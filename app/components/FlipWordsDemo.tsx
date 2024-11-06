import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Front-end", "Back-end", "Full Stack"];

  return (
    <div className="text-2xl md:text-5xl font-bold text-white dark:text-neutral-400 tracking-tighter">
      <div className="text-4xl md:text-9xl mb-2">Welcome.</div>
      <div className="text-gray-300">
        I'm Alex, a
        <FlipWords words={words} />
        developer based in Japan.
      </div>
    </div>
  );
}
