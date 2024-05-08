export default function MemoriesHub() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="pb-1 text-xl font-bold sm:text-3xl">Project Overview</h2>
      Memories Hub is a personalized digital repository designed for couples to
      store and cherish their precious moments together. It serves as a unique
      space where users can curate date itineraries, upload images, and annotate
      them with memories.
      <h2 className="pb-1 text-xl font-bold sm:text-3xl">The Challenge</h2>
      In a world where digital interactions often replace personal connections,
      there was a need for a platform that helps couples strengthen their
      relationship by preserving shared experiences in a meaningful way.
      <h2 className="pb-1 text-xl font-bold sm:text-3xl">
        Memories Hub Features
      </h2>
      <ul className="list-outside list-disc pl-5">
        <li>
          Core Memories Page: Displays a filmstrip of images, each linking to a
          detailed memory page.
        </li>
        <li>
          Date Request Feature: Allows couples to plan and track upcoming dates
          and special moments.
        </li>
        <li>
          Admin Portal: Provides backend access for managing content, ensuring
          that memories are always current and reflective of the couple's
          journey.
        </li>
      </ul>
      <h2 className="pb-1 text-xl font-bold sm:text-3xl">Technologies Used</h2>
      <p>
        The platform is built using modern technologies including Next.js,
        React, TailwindCSS, and integrates with Firebase for backend
        functionalities. This tech stack ensures a responsive and user-friendly
        experience across all devices.
      </p>
    </div>
  );
}
