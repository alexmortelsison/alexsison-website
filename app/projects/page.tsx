import React from "react";
import { Vortex } from "../components/ui/vortex";
import { CardDemoOne } from "../components/CardDemoOne";
import { CardDemoOneThree } from "../components/CardDemoThree";
import { CardDemoOneFour } from "../components/CardDemoFour";
import { CardDemoTwo } from "../components/CardDemoTwo";

export default function ProjectPage() {
  return (
    <Vortex className="min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-2 gap-24">
        <CardDemoOne />
        <CardDemoTwo />
        <CardDemoOneThree />
        <CardDemoOneFour />
      </div>
    </Vortex>
  );
}
