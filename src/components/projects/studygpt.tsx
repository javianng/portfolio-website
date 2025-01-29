import Image from "next/image";
import { Separator } from "../ui/separator";

export default function StudyGPTProject() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <article className="prose prose-neutral dark:prose-invert">
          <section>
            <h2 className="h2">Project Overview</h2>
            <p className="p">
              StudyGPT is an AI-driven tool designed to streamline exam
              preparation by converting study notes into practice exam
              questions. Leveraging the capabilities of ChatGPT, StudyGPT offers
              a seamless and efficient way for students to create customized
              practice questions from their own materials.
            </p>
          </section>

          <section>
            <h2 className="h2">Features and Sophistication</h2>
            <ul className="ul space-y-4">
              <li>
                <strong>Automated Question Generation</strong>
                <p>
                  StudyGPT transforms any study notes or documents into practice
                  questions, offering multiple types of questions including
                  multiple-choice, essay-based, and short-answer formats.
                </p>
              </li>
              <li>
                <strong>Interactive Learning Experience</strong>
                <p>
                  Not only does StudyGPT generate questions, but it also
                  provides an interactive platform where users can submit their
                  answers, encouraging active engagement.
                </p>
              </li>
              <li>
                <strong>Instant Grading and Feedback</strong>
                <p>
                  Automatically marks responses and provides correct answers,
                  helping users identify areas for improvement.
                </p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="h2">Goal of the Project</h2>
            <p className="p">
              The primary aim of StudyGPT is to save students time and effort by
              providing an all-in-one solution for exam preparation. By
              automating the process of generating practice questions and
              evaluating answers, StudyGPT allows students to concentrate on
              understanding and mastering the material.
            </p>
          </section>
        </article>

        <Image
          src="/projects/studygpt/chat.png"
          alt="StudyGPT interface showing question generation and feedback"
          width={1600}
          height={1600}
          className="h-fit rounded-md object-contain shadow-md"
          priority
        />
      </div>

      <Separator className="my-8" />

      <article className="prose prose-neutral dark:prose-invert">
        <section>
          <h2 className="h2">Implementation and Learning</h2>
          <p className="p">
            After completing the &quot;Prompt Engineering for ChatGPT&quot;
            course with Vanderbilt University on Coursera, I leveraged the
            skills and knowledge gained to enhance StudyGPT&apos;s development.
          </p>

          <h3 className="h3 mt-4">Key Learnings Applied:</h3>
          <ul className="ul space-y-4">
            <li>
              <strong>Optimized Prompt Crafting</strong>
              <p>
                Created clear and concise prompts to guide ChatGPT&apos;s
                outputs, ensuring generated questions align with learning
                outcomes.
              </p>
            </li>
            <li>
              <strong>Context Management</strong>
              <p>
                Implemented consistent context handling across interactions for
                reliable multi-step question generation and grading.
              </p>
            </li>
            <li>
              <strong>Enhanced User Interaction</strong>
              <p>
                Applied user-centric design principles to create an intuitive
                and effective learning experience.
              </p>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
}
