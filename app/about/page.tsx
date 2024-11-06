import React from "react";
import { Vortex } from "../components/ui/vortex";
import {
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandSupabase,
  IconBrandTailwind,
} from "@tabler/icons-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Vortex className="max-h-screen min-w-full">
        <div className="text-gray-200 items-center justify-center px-10 text-center md:py-32 md:px-64 mx-auto min-h-screen text-2xl leading-relaxed tracking-tighter">
          <p className="py-4">
            Hello! I’m{" "}
            <span className="text-purple-600 font-bold">Alex Sison</span>, a
            full stack developer based in Japan with over 3 years of experience
            crafting full-stack web applications. My work focuses on building{" "}
            <b>seamless</b>, <b>high-performance</b> websites that deliver
            exceptional user experiences.
          </p>
          <p className="py-4">
            I specialize in <b className="text-purple-600">Next.js</b> and{" "}
            <b className="text-purple-600">React</b> for developing interactive
            frontends, complemented by{" "}
            <b className="text-purple-600"> Tailwind CSS </b> for styling that’s
            efficient and visually appealing. My tech stack includes Sanity and
            Payload CMS for streamlined content management and{" "}
            <b className="text-purple-600">MongoDB, Neon, and Supabase</b> for
            robust database solutions.
          </p>
          <p className="py-4">
            Passionate about innovation and clean code, I’m always exploring new
            technologies and best practices. Let’s connect and bring your vision
            to the digital world!
          </p>
          <p className="flex items-center justify-center mt-10 gap-5">
            <IconBrandNextjs className="w-24 h-24" title="NextJS" />
            <Image
              src={"/r.svg"}
              alt={""}
              width={70}
              height={70}
              title="React"
            />
            <Image
              src={"/tw.svg"}
              alt={""}
              width={70}
              height={70}
              title="TailwindCSS"
            />
            <Image
              src={"/m.svg"}
              alt={""}
              width={200}
              height={200}
              title="MongoDB"
            />
            <Image
              src={"/sb.png"}
              alt={""}
              width={60}
              height={60}
              className="text-0"
              title="Supabase"
            />
            <Image
              src={"/neon-tech.svg"}
              alt={""}
              width={70}
              height={70}
              title="NeonTech"
            />

            <Image
              src={"/s.svg"}
              alt={""}
              width={70}
              height={70}
              title="Sanity"
            />
            <Image
              src={"/prisma.svg"}
              alt={""}
              width={70}
              height={70}
              title="Prisma"
              className="invert-color"
            />
            <Image
              src={"/p.png"}
              alt={""}
              width={250}
              height={250}
              className="text-0"
              title="Payload"
            />
            <Image
              src={"/str.svg"}
              alt={""}
              width={100}
              height={100}
              className="text-0 invert-color"
              title="Stripe"
            />
          </p>
        </div>
      </Vortex>
    </>
  );
}
