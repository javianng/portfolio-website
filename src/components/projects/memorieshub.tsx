export default function MemoriesHubProject() {
  return (
    <article className="prose prose-neutral dark:prose-invert">
      <section>
        <h2 className="h2">Project Overview</h2>
        <p className="p">
          Memories Hub is a personalized digital repository designed for couples
          to store and cherish their precious moments together. It serves as a
          unique space where users can curate date itineraries, upload images,
          and annotate them with memories.
        </p>
      </section>

      <section>
        <h2 className="h2">The Challenge</h2>
        <p className="p">
          In a world where digital interactions often replace personal
          connections, there was a need for a platform that helps couples
          strengthen their relationship by preserving shared experiences in a
          meaningful way.
        </p>
      </section>

      <section>
        <h2 className="h2">Key Features</h2>
        <ul className="ul space-y-4">
          <li>
            <strong>Core Memories Page:</strong> Displays a filmstrip of images,
            each linking to a detailed memory page.
          </li>
          <li>
            <strong>Date Request Feature:</strong> Allows couples to plan and
            track upcoming dates and special moments.
          </li>
          <li>
            <strong>Admin Portal:</strong> Provides backend access for managing
            content, ensuring that memories are always current and reflective of
            the couple&apos;s journey.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="h2">Technologies Used</h2>
        <p className="p">
          The platform is built using modern technologies including Next.js,
          React, TailwindCSS, and integrates with Firebase for backend
          functionalities. This tech stack ensures a responsive and
          user-friendly experience across all devices.
        </p>
      </section>
    </article>
  );
}
