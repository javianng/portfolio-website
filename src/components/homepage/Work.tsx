"use client";

import React from "react";
import Link from "next/link";
import { ChevronsDown } from "lucide-react";
import { PROJECT_DETAILS } from "../../data/WorkDetails";
import { HeroParallax } from "~/components/ui/hero-parallax";

export default function Work() {
  return (
    <section id="Work">
      <HeroParallax products={PROJECT_DETAILS} />
      <div className="flex justify-center pt-4 sm:pt-12">
        <ShowAllProjectsButton />
      </div>
    </section>
  );
}

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
