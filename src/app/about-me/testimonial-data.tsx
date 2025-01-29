import { type ReactNode } from "react";

export interface Testimonial {
  readonly image: string;
  readonly quote: ReactNode;
  readonly personel: string;
  readonly organisation: string;
  readonly alt?: string;
  readonly pdfPath?: string;
}

export const TESTIMONIAL_DATA: readonly Testimonial[] = [
  {
    image: "/testimony/thomasfayon.jpeg",
    alt: "Thomas Fayon profile photo",
    pdfPath: "/testimony/thomasfayon.pdf",
    quote: (
      <article>
        <p className="p">
          &quot;Javian&apos;s dedication and seriousness toward his work are
          evident in every project he undertakes. Whether faced with complex
          architectural challenges or tight deadlines, Javian consistently
          delivers solutions that are both robust and innovative. His technical
          expertise in backend development, particularly in designing scalable
          and efficient systems, has been instrumental in advancing our
          platform&apos;s performance and reliability.
        </p>
        <p className="p">
          Javian is a highly skilled and driven backend engineer whose
          contributions extend far beyond code. He is a team player, a visionary
          problem-solver, and a cornerstone for any engineering team. I
          wholeheartedly recommend him for any opportunity, confident that he
          will make a profound impact wherever he goes.&quot;
        </p>
      </article>
    ),
    personel: "Thomas Fayon",
    organisation:
      "Founder & CEO of PARAMETRIKS, ex-Shift Technology Co-founder & COO",
  },
  {
    image: "/testimony/shivanggupta.jpeg",
    alt: "Shivang Gupta profile photo",
    pdfPath: "/testimony/shivanggupta.pdf",
    quote: (
      <article>
        <p className="p">
          &quot;Javian played a pivotal role in several high-impact projects,
          especially in the domains of artificial intelligence, database
          management, and AWS development. His expertise in AI was particularly
          evident in the design and deployment of intelligent systems that
          enhanced the performance of our software.
        </p>
        <p className="p">
          Beyond technical skills, Javian exhibited a strong work ethic, an
          eagerness to learn, and an excellent ability to collaborate with team
          members. His proactive approach to problem-solving and ability to
          adapt to challenges made him an invaluable member of the team.&quot;
        </p>
      </article>
    ),
    personel: "Shivang Gupta",
    organisation:
      "Co-Founder & CEO Asia of PARAMETRIKS, Research Fellow at Massachusetts Institute of Technology",
  },
  {
    image: "/testimony/laumaichan.jpeg",
    alt: "Mai Chan Lau profile photo",
    pdfPath: "/testimony/laumaichan.pdf",
    quote: (
      <article>
        <p className="p">
          &quot;Javian possesses the qualities of an excellent data scientist
          and problem-solver. Not only is he adept at identifying issues, but he
          also has a natural ability to develop efficient solutions. Notably, he
          proposed and implemented innovative approaches in setting up a new
          pipeline for long-read sequencing—an essential component of a cancer
          vaccine development project. His ability to learn and apply new skills
          swiftly is commendable, and his professional and pleasant personality
          makes him an invaluable asset to the team. Javian also demonstrated
          effective communication skills, regularly engaging in internal
          discussions and presenting updates to the project team, which greatly
          enhanced our research progress.
        </p>
        <p className="p">
          In a field where adaptability and accountability are essential, Javian
          stands out as the ideal candidate. His ability to think on his feet,
          solve complex problems, and apply data science technology to address
          real-world challenges makes him an excellent fit for any data-driven
          company. I am confident that your organization will benefit immensely
          from his promising talent.&quot;
        </p>
      </article>
    ),
    personel: "Mai Chan Lau",
    organisation:
      "Assistant PI, Advanced Spatial Omics with Quantum and Generative AI, BioMedical DataHub, Bioinformatics Institute (BII),  Head of Computational Immunology Platform, Singapore Immunology Network (SIgN), Adjunct Assistant Professor, Lee Kong Chian School of Medicine",
  },
  {
    image: "/testimony/fooshihong.jpeg",
    alt: "Foo Shi Hong profile photo",
    pdfPath: "/testimony/fooshihong.pdf",
    quote: (
      <article>
        <p className="p">
          &quot;Javian actively and passionately engaged in the design and
          implementation of website and product features. His enthusiasm for web
          development was evident in the high-quality work he consistently
          delivered. Javian&apos;s ability to write clean, efficient, and
          maintainable code using modern programming languages, such as
          TypeScript and React.js, was truly impressive. His contributions
          significantly enhanced the functionality and performance of our
          projects.
        </p>
        <p className="p">
          Beyond his technical proficiency, Javian made a valuable impact during
          our product discussions. He actively participated in these
          discussions, offering constructive feedback, and collaborating
          seamlessly with our design team. This collaborative spirit was
          instrumental in ensuring the quality and cohesiveness of our website,
          resulting in a seamless and visually appealing user experience.
        </p>
        <p className="p">
          Throughout his internship, Javian consistently exceeded our
          expectations and played a pivotal role in our development team&apos;s
          achievements. I have full confidence that his strong work ethic,
          technical prowess, and unwavering passion for web development will
          continue to serve him exceptionally well in his future endeavors. I
          wholeheartedly endorse Javian as an exceptional candidate for any
          professional opportunity.&quot;
        </p>
      </article>
    ),
    personel: "Foo Shi Hong",
    organisation: "Co-Founder, CTO LFG",
  },
  {
    image: "/testimony/darrylhan.jpeg",
    pdfPath: "/testimony/darrylhan.pdf",
    quote: (
      <article>
        <p className="p">
          &quot;From the very beginning, you demonstrated a remarkable
          enthusiasm for learning and a strong commitment to your role. Your
          eagerness to delve into new technologies and your willingness to take
          on challenges head-on greatly impressed us.
        </p>
        <p className="p">
          Your technical skills have been instrumental in the development of our
          new platform. Your coding expertise, problem-solving abilities, and
          attention to detail have consistently exceeded our expectations. The
          features and functionalities you&apos;ve helped bring to life have
          enriched the user experience of LFG, making it easier for travelers to
          navigate and discover exciting destinations.
        </p>
        <p className="p">
          However, it&apos;s not just your technical abilities that we admire.
          Your proactive approach to communication and your willingness to seek
          clarification or guidance when needed have demonstrated your
          commitment to producing high-quality work. Your humility and
          willingness to learn from others, regardless of their role or
          experience, have made you a valuable team player.&quot;
        </p>
      </article>
    ),
    personel: "Darryl Han",
    organisation: "Co-Founder, CEO LFG",
  },
  {
    image: "/testimony/zenacademy.png",
    pdfPath: "/testimony/zenacademy.pdf",
    quote: (
      <article>
        <p className="p">
          &quot;A well-liked and hardworking fighter, Javian trained hard and
          persevered through the tough trainings which was physically and
          mentally exhausting. He gave his 100% during trainings and never had
          his head down despite losing to his well-experienced black-belt
          seniors numerous times, always standing back up to fight back.
        </p>
        <p className="p">
          His efforts none the less paid off when he represented the club in 4
          separate tournaments in 2018, clinching 3 gold medals in the National
          Taekwondo Kyorugi Championships 2018 Ambassador Cup, Singapore
          National Games, Singapore Youth Olympic Festival and a bronze for the
          6th Daedo Taekwondo Open Championships 2018. This attest for his
          passion and pursuit for excellence in things outside of
          academics.&quot;
        </p>
      </article>
    ),
    personel: "Zen Academy",
    organisation: "Taekwondo Club",
  },
] as const;
