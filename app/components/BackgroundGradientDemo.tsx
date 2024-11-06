"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { CgPhone } from "react-icons/cg";
import { Mail, MapPinMinusInside, Pin } from "lucide-react";

export function BackgroundGradientDemo() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <div className="flex text-black items-center justify-between gap-24">
          <CgPhone className="w-8 h-8" />
          <p className="text-base">+8170 3363 2542</p>
        </div>
        <div className="flex text-black items-center justify-between">
          <Mail className="w-8 h-8" />
          <p className="text-base underline text-blue-500">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=alexmortelsison@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base"
            >
              alexmortelsison@gmail.com
            </a>
          </p>
        </div>
        <div className="flex text-black items-center justify-between">
          <MapPinMinusInside className="w-8 h-8" />
          <p className="text-base">Japan</p>
        </div>
      </BackgroundGradient>
    </div>
  );
}
