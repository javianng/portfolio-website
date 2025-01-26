import Image from "next/image";

export default function VolunteerClockProject() {
  return (
    <article className="prose prose-neutral dark:prose-invert">
      <section>
        <h2 className="h2">Introduction</h2>
        <p className="p">
          VolunteerClock is a decentralized blockchain application designed to
          enhance transparency, accountability, and efficiency in managing
          community volunteering activities. By addressing critical shortcomings
          in traditional community volunteering systems—such as unreliable
          tracking of volunteer hours and lack of standard
          verification—VolunteerClock provides a robust solution using
          blockchain technology.
        </p>
        <Image
          src="/projects/volunteer-clock/volunteer.jpg"
          alt="Volunteer interface showing time tracking and activity logging"
          width={500}
          height={500}
          className="mt-3 h-auto w-full rounded-md shadow-md"
          priority
        />
      </section>

      <section>
        <h2 className="h2">The Challenge</h2>
        <p className="p">
          Existing community volunteering systems often suffer from inaccurate
          and unreliable tracking of volunteer participation. This inconsistency
          leads to problems in accountability, transparency, and efficiency.
          Volunteers typically self-report their hours without a standardized
          process, which can lead to potential inaccuracies and
          misrepresentation.
        </p>
      </section>

      <section>
        <h2 className="h2">Our Solution</h2>
        <p className="p">
          VolunteerClock leverages Ethereum blockchain to create a Community
          Involvement Projects (CIP) Token System. This system ensures that
          every action—from volunteer check-ins to project completions—is
          recorded immutably on the blockchain, providing a transparent and
          verifiable mechanism to track and reward volunteer activities.
        </p>
        <Image
          src="/projects/volunteer-clock/organisation.jpg"
          alt="Organization dashboard showing volunteer management interface"
          width={500}
          height={500}
          className="mt-3 h-auto w-full rounded-md shadow-md"
        />
      </section>

      <section>
        <h2 className="h2">Key Features</h2>
        <ol className="ol space-y-6">
          <li>
            <h3 className="h3">Smart Contract Integration</h3>
            <p>
              The core of VolunteerClock is built on smart contracts that handle
              project creation, volunteer check-ins/check-outs, and token
              minting. The use of ERC1155 tokens ensures that contributions are
              recorded and rewarded accurately.
            </p>
            <Image
              src="/projects/volunteer-clock/volunteertoken.jpg"
              alt="Volunteer token system showing rewards and achievements"
              width={500}
              height={500}
              className="mt-3 h-auto w-full rounded-md shadow-md"
            />
          </li>
          <li>
            <h3 className="h3">IPFS Integration</h3>
            <p>
              Project details, such as descriptions and images, are stored on
              IPFS, ensuring data immutability and availability without relying
              solely on the blockchain.
            </p>
          </li>
          <li>
            <h3 className="h3">Transparent Participation</h3>
            <p>
              Actions like check-ins and check-outs trigger transactions
              recorded on the blockchain, which enhances accountability and
              prevents fraud.
            </p>
          </li>
          <li>
            <h3 className="h3">Token-Based Rewards</h3>
            <p>
              Volunteers receive tokens as recognition for their contributions,
              which can be verified by third-party entities like hiring
              managers, enhancing trust and credibility.
            </p>
          </li>
        </ol>
      </section>

      <section>
        <h2 className="h2">System Architecture</h2>
        <p className="p">
          VolunteerClock&apos;s architecture is crafted with precision to ensure
          scalability, security, and user-friendly interactions. The application
          uses a combination of client-side technology for a smooth user
          interface and smart contracts for backend logic that runs on the
          blockchain.
        </p>
        <ul className="ul space-y-4">
          <li>
            <strong>Contract Management:</strong> Operations are handled by
            specific smart contracts deployed on the Ethereum network.
          </li>
          <li>
            <strong>User Interfaces:</strong> Distinct interfaces for
            volunteers, organizers, and third-party observers.
          </li>
          <li>
            <strong>Security:</strong> Advanced protocols protect the system and
            maintain privacy.
          </li>
        </ul>
        <Image
          src="/projects/volunteer-clock/recruiter.jpg"
          alt="Recruiter view showing volunteer verification interface"
          width={500}
          height={500}
          className="mt-3 h-auto w-full rounded-md shadow-md"
        />
      </section>

      <section>
        <h2 className="h2">Future Development</h2>
        <p className="p">
          While VolunteerClock addresses many challenges of traditional
          volunteer management systems, we continue to explore improvements in
          multi-day event handling, time tracking accuracy, and token minting
          flexibility.
        </p>
      </section>

      <section>
        <h2 className="h2">Conclusion</h2>
        <p className="p">
          VolunteerClock represents a significant advancement in volunteer
          management, leveraging blockchain technology to create a more
          accountable, transparent, and efficient system for community service
          tracking and recognition.
        </p>
      </section>
    </article>
  );
}
