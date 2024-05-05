import Window from "../common/Window";

export default function Twenify() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="pb-1 text-xl font-bold sm:text-3xl">Project Overview</h2>
      <p>
        In the fast-paced and often overwhelming world of academics, students
        frequently struggle with time management and maintaining productivity
        due to distractions like social media. Twenify addresses these issues
        head-on by offering a suite of tools that boost focus, organization, and
        motivation.
      </p>
      <h2 className="pb-1 text-xl font-bold sm:text-3xl">The Challenge</h2>
      <p>
        Research indicates over half of college students experience significant
        stress from poor time management, often exacerbated by digital
        distractions like "doom scrolling" on social media platforms. The need
        for a solution that not only helps manage time but also enhances focus
        and motivation was clear.
      </p>
      <h2 className="pb-1 text-xl font-bold sm:text-3xl">Twenify Solutions</h2>
      Twenify integrates several key features:
      <ul className="list-outside list-disc pl-5">
        <li>
          Pomodoro Timer: Customizable timer based on the Pomodoro Technique
          encourages productivity through structured work-break intervals.
        </li>
        <li>
          Integrated Calendar and To-Do List: Provides seamless organization and
          scheduling.
        </li>
        <li>
          Website Blocking Tool: Helps mitigate distractions during study
          sessions.
        </li>
        <li>
          Music Integration: Enhances the study environment through Spotify
          integration.
        </li>
        <li>
          Gamification: Features like Productivity Leaderboards and a
          Tamagotchi-esque element make productivity engaging and rewarding.
        </li>
      </ul>
      <h2 className="pb-1 text-xl font-bold sm:text-3xl">Technologies Used</h2>
      <p>
        Built with robust technologies like Vue.js for the frontend and Firebase
        for backend operations, Twenify offers a responsive and intuitive user
        interface. These choices ensure a seamless and dynamic user experience
        across various devices and platforms.
      </p>
      <h2 className="pb-1 text-xl font-bold sm:text-3xl">Agile Development</h2>
      <p>
        The development of Twenify followed an agile methodology, emphasizing
        rapid prototyping and iterative feedback to refine features and meet
        user needs effectively. This approach allowed us to adapt quickly to
        challenges and incorporate feedback into the development process
        continuously.
      </p>
      <h2 className="pb-1 text-xl font-bold sm:text-3xl">
        Impact and Future Directions
      </h2>
      <p>
        Twenify has already shown promising results in helping students improve
        their time management skills and reduce stress. Future developments
        include expanding features such as the Food List and Suggest-Tag
        features, and exploring further integrations to enhance the platform's
        utility. Twenify is not just a tool; it&apos;s a movement towards
        empowering students to reclaim their time and focus, turning the tide on
        productivity pitfalls and setting a new standard for academic success.
        Feel free to explore the sections above for a detailed insight into how
        Twenify was conceived, developed, and launched as a pivotal tool for
        student productivity.
      </p>
      <h2 className="pb-1 text-xl font-bold sm:text-3xl">Preview</h2>
      <div className="bg-base-300 border shadow">
        <div className="bg-base-100 flex justify-center">
          <Window>
            <iframe
              src="https://twenity.vercel.app/"
              className="h-[90vh] w-full"
            />
          </Window>
        </div>
      </div>
    </div>
  );
}
