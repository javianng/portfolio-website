import Image from "next/image";
import { Separator } from "../ui/separator";

export default function StudyGPT() {
  return (
    <>
      <div className="grid grid-cols-1 gap-3 sm:flex-row md:grid-cols-2">
        <article className="text-justify">
          <h2 className="h2 text-start">Project Overview</h2>
          <p className="p">
            StudyGPT is an AI-driven tool designed to streamline exam
            preparation by converting study notes into practice exam questions.
            Leveraging the capabilities of ChatGPT, StudyGPT offers a seamless
            and efficient way for students to create customized practice
            questions from their own materials. This tool was developed to
            address the common challenge of limited exam preparation resources,
            such as past year papers, and to simplify the process of generating
            study questions.
          </p>
          <h2 className="h2 text-start">Features and Sophistication</h2>
          <ul className="ul">
            <li>
              <strong>Automated Question Generation</strong>:<br /> StudyGPT
              transforms any study notes or documents into practice questions,
              offering multiple types of questions including multiple-choice,
              essay-based, and short-answer formats. This feature allows users
              to focus on their studies without the tedious task of crafting
              prompts or searching through notes.
            </li>
            <li>
              <strong>Interactive Learning Experience</strong>:<br /> Not only
              does StudyGPT generate questions, but it also provides an
              interactive platform where users can submit their answers. This
              feature encourages active engagement with the study material,
              reinforcing knowledge retention.
            </li>
            <li>
              <strong> Instant Grading and Feedback</strong>:<br />
              Automatically marks responses and provides correct answers,
              helping users identify areas for improvement.
            </li>
          </ul>
          <h2 className="h2 text-start">Goal of the Project</h2>
          <p className="p">
            The primary aim of StudyGPT is to save students time and effort by
            providing an all-in-one solution for exam preparation. By automating
            the process of generating practice questions and evaluating answers,
            StudyGPT allows students to concentrate on understanding and
            mastering the material rather than on the mechanics of study
            preparation. This tool is particularly beneficial for students who
            are juggling multiple responsibilities, offering them a more
            efficient way to prepare for exams.
          </p>
        </article>
        <Image
          src={"/projects/studygpt/chat.png"}
          alt={"StudyGPT"}
          width={1600}
          height={1600}
          className="h-fit rounded-md object-contain shadow-md"
        />
      </div>
      <Separator className="my-5" />
      <article className="text-justify">
        <p className="p">
          After completing the &quot;Prompt Engineering for ChatGPT&quot; course
          with Vanderbilt University on Coursera, I leveraged the skills and
          knowledge gained to enhance the development of StudyGPT. This course
          provided a deep understanding of how to effectively structure prompts
          to elicit specific and accurate responses from ChatGPT, which is
          crucial for generating high-quality practice exam questions.
        </p>
        <p className="p">Key learnings applied include:</p>
        <ul className="ul">
          <li>
            <strong>Optimized Prompt Crafting</strong>:<br /> The course
            emphasized creating clear and concise prompts to guide
            ChatGPT&apos;s outputs. This knowledge was instrumental in refining
            how StudyGPT transforms study notes into precise, relevant
            questions, ensuring that the generated content aligns closely with
            the intended learning outcomes.
          </li>
          <li>
            <strong>Context Management</strong>:<br /> Understanding how to
            maintain context across interactions allowed us to develop features
            in StudyGPT that ensure consistency and relevance in multi-step
            question generation and grading processes.
          </li>
          <li>
            <strong>Enhanced User Interaction</strong>:<br /> The insights into
            user-centric design from the course helped in tailoring the StudyGPT
            interface to be more intuitive and user-friendly, making it easier
            for students to interact with and benefit from the tool.
          </li>
        </ul>
      </article>
    </>
  );
}
