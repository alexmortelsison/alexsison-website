import React from "react";
import { FlipWordsDemo } from "./FlipWordsDemo";
import { MovingBorderDemo } from "./MovingBorderDemo";
import Footer from "./Footer";

export default function Hero() {
  return (
    <div>
      <div className="items-center justify-center px-10 text-center md:px-56 gap-10 mx-auto min-h-screen pt-44">
        <div>
          <FlipWordsDemo />
        </div>
        <div>
          <p className="text-gray-300 lg:mt-10 text-base md:text-lg px-1 md:px-8">
            I'm a full-stack developer passionate about building smooth,
            scalable applications with{" "}
            <span className="text-xl font-bold">NextJS</span> and{" "}
            <span className="text-xl font-bold">React</span>. With a strong
            focus on teamwork, I bring clear communication, adaptability, and a
            collaborative approach to every project. Whether working
            independently or within a team, I aim to create efficient,
            user-centered solutions — that bring ideas to life!
          </p>

          <div className="mt-24 mb-48">
            <MovingBorderDemo />
          </div>
        </div>
      </div>
    </div>
  );
}
