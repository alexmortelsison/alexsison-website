"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function CardDemoOneThree() {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-[url(https://images.unsplash.com/photo-1560472355-a3b4bcfe790c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-65"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height="100"
            width="100"
            alt="Avatar"
            src="/alex.jpg"
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              Manu Arora
            </p>
            <p className="text-sm text-gray-400">2 min read</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-purple-600 tracking-tighter relative z-10">
            Socialy
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            Social Media App...
          </p>
        </div>
      </div>
    </div>
  );
}
