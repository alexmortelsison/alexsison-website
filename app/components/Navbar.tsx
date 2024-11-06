import { AiFillGithub } from "react-icons/ai";
import { CgCodeSlash, CgTwitter } from "react-icons/cg";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="text-white flex items-center justify-between px-8 md:px-72 h-24 bg-black">
      <div className="text-lg tracking-tighter font-bold">
        <Link href={"/"} className="flex items-center justify-center">
          <div className="gap-2">
            <CgCodeSlash />
          </div>
          alex<span className="text-purple-600">SISON</span>.
        </Link>
      </div>

      <div className="flex gap-4">
        <Link
          href={"/about"}
          className="hover:text-purple-600 hover:font-semibold"
        >
          <h2>About</h2>
        </Link>
        <Link
          href={"/projects"}
          className="hover:text-purple-600 hover:font-semibold"
        >
          <h2>Projects</h2>
        </Link>
        <Link
          href={"/contact"}
          className="hover:text-purple-600 hover:font-semibold"
        >
          <h2>Contact</h2>
        </Link>
      </div>

      <div className="hidden md:flex gap-1 items-center">
        <Link
          href={"https://github.com/alexmortelsison"}
          target="_blank"
          title="Github"
        >
          <AiFillGithub className="w-8 h-8" />
        </Link>
        <Link href={"https://x.com/urmrdev"} target="_blank" title="X">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 512 512"
            style={{ width: "50px", height: "50px" }}
          >
            <path d="M256 0c141.385 0 256 114.615 256 256S397.385 512 256 512 0 397.385 0 256 114.615 0 256 0z" />
            <path
              fill="#fff"
              fillRule="nonzero"
              d="M318.64 157.549h33.401l-72.973 83.407 85.85 113.495h-67.222l-52.647-68.836-60.242 68.836h-33.423l78.052-89.212-82.354-107.69h68.924l47.59 62.917 55.044-62.917zm-11.724 176.908h18.51L205.95 176.493h-19.86l120.826 157.964z"
            />
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
