import Image from "next/image";

export default function VolunteerClock() {
  return (
    <article>
      <h2 className="h2">Introduction</h2>
      <p className="p">
        VolunteerClock is a decentralized blockchain application designed to
        enhance transparency, accountability, and efficiency in managing
        community volunteering activities. By addressing critical shortcomings
        in traditional community volunteering systems—such as unreliable
        tracking of volunteer hours and lack of standard
        verification—VolunteerClock provides a robust solution using blockchain
        technology.
      </p>
      <Image
        src={"/projects/volunteer-clock/volunteer.jpg"}
        alt={"Volunteer's Perspective"}
        width={500}
        height={500}
        className="mt-3 h-auto w-full rounded-md shadow-md"
      />
      <h2 className="h2">The Problem</h2>
      <p className="p">
        Existing community volunteering systems often suffer from inaccurate and
        unreliable tracking of volunteer participation. This inconsistency leads
        to problems in accountability, transparency, and efficiency. Volunteers
        typically self-report their hours without a standardized process, which
        can lead to potential inaccuracies and misrepresentation.
      </p>
      <h2 className="h2">Our Solution: VolunteerClock DApp</h2>
      <p className="p">
        VolunteerClock leverages Ethereum blockchain to create a Community
        Involvement Projects (CIP) Token System. This system ensures that every
        action—from volunteer check-ins to project completions—is recorded
        immutably on the blockchain, providing a transparent and verifiable
        mechanism to track and reward volunteer activities.
      </p>
      <Image
        src={"/projects/volunteer-clock/organisation.jpg"}
        alt={"Organisation's Perspective"}
        width={500}
        height={500}
        className="mt-3 h-auto w-full rounded-md shadow-md"
      />
      <h2 className="h2">Key Features of VolunteerClock</h2>
      <ol className="ol">
        <li>
          Smart Contract Integration: The core of VolunteerClock is built on
          smart contracts that handle project creation, volunteer
          check-ins/check-outs, and token minting. The use of ERC1155 tokens for
          representing volunteer activities ensures that contributions are
          recorded and rewarded accurately.
          <Image
            src={"/projects/volunteer-clock/volunteertoken.jpg"}
            alt={"VolunteerToken"}
            width={500}
            height={500}
            className="mt-3 h-auto w-full rounded-md shadow-md"
          />
        </li>
        <li>
          IPFS for Data Integrity: Project details, such as descriptions and
          images, are stored on IPFS, ensuring data immutability and
          availability without relying solely on the blockchain.
        </li>
        <li>
          Transparent Volunteer Participation: Actions like check-ins and
          check-outs trigger transactions recorded on the blockchain, which
          enhances accountability and prevents fraud.
        </li>
        <li>
          Token-Based Rewards System: Volunteers receive tokens as a form of
          recognition for their contributions, which can be verified by
          third-party entities like hiring managers, enhancing trust and
          credibility.
        </li>
        <li>
          Decentralized Application Architecture: The application is designed
          with a focus on decentralization, reducing reliance on any central
          authority and distributing control among participants, which enhances
          transparency and trust.
        </li>
      </ol>
      <h2 className="h2">System Design and Architecture</h2>
      <p className="p">
        VolunteerClock&apos;s architecture is crafted with precision to ensure
        scalability, security, and user-friendly interactions. The application
        uses a combination of client-side technology for a smooth user interface
        and smart contracts for backend logic that runs on the blockchain.
      </p>
      <ol className="list-outside list-decimal py-2 pl-5">
        <li>
          Contract Deployment and Management: All operations related to project
          management and volunteer interactions are handled by specific smart
          contracts, which are deployed on the Ethereum network.
        </li>
        <li>
          User Interfaces for Different Stakeholders: The system includes
          distinct interfaces for volunteers, organizers, and third-party
          observers, each tailored to provide the necessary tools and
          information relevant to each group.
        </li>
        <li>
          Security and Data Privacy: Advanced security protocols are implemented
          to protect the system from common vulnerabilities, and privacy is
          maintained to protect volunteer identities as needed.
        </li>
      </ol>
      <Image
        src={"/projects/volunteer-clock/recruiter.jpg"}
        alt={"Recruiter's Perspective"}
        width={500}
        height={500}
        className="mt-3 h-auto w-full rounded-md shadow-md"
      />
      <h2 className="h2">Challenges and Future Directions</h2>
      <p className="p">
        While VolunteerClock addresses many challenges of traditional volunteer
        management systems, it also recognizes potential areas for improvement,
        such as enhancing the handling of multi-day events, improving time
        tracking accuracy, and expanding the flexibility of the token minting
        process.
      </p>
      <h2 className="h2">Conclusion</h2>
      <p className="p">
        VolunteerClock is not just a tool for managing volunteer activities but
        a step forward in how technology can be used to foster a more
        accountable, transparent, and efficient system for community
        involvement. It showcases the practical use of blockchain technology in
        real-world applications, reflecting a deep understanding of both the
        technology and the needs of the community service ecosystem.
      </p>
    </article>
  );
}
