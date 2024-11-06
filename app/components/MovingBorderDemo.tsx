"use client";
import React from "react";
import { Button } from "./ui/moving-border";
import Link from "next/link";

export function MovingBorderDemo() {
  return (
    <div>
      <Link href={"/projects"}>
        <Button
          borderRadius="1.75rem"
          className=" dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800 text-base hover:text-purple-600 hover:font-semibold"
        >
          See Projects
        </Button>
      </Link>
    </div>
  );
}
