"use client";

import React from "react";
import { HeroParallax } from "~/components/ui/hero-parallax";
import { PROJECT_DETAILS } from "./WorkDetailsV2";

import NextButton from "~/components/common/NextButton";
import Link from "next/link";
import { ChevronsDown } from "lucide-react";

function ShowAllProjectsButton() {
  return (
    <Link href={"/work"}>
      <div
        className="flex flex-row items-center gap-1 
            rounded-md border-2 p-5
            transition ease-in-out
            hover:border-brand-200 hover:text-brand-200"
      >
        <ChevronsDown className="h-6 w-6" />
        <p className="text-sm font-semibold uppercase">Show all projects</p>
      </div>
    </Link>
  );
}

export default function WorkV2() {
  return (
    <div id="Work">
      <HeroParallax products={PROJECT_DETAILS} />
      <div className="flex justify-center pt-4 sm:pt-12">
        <ShowAllProjectsButton />
      </div>
      <NextButton url="#Experience" />
    </div>
  );
}
