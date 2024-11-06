import React from "react";
import { CgCopyright } from "react-icons/cg";

const date = new Date().getFullYear();

export default function Footer() {
  return (
    <div className="bg-black text-sm">
      <div className="flex items-center justify-center gap-1 text-neutral-500">
        <CgCopyright />
        <h3>{date}</h3>
        <p>alexsison. All rights reserved.</p>
      </div>
    </div>
  );
}
