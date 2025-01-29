export default function TwenifyProject() {
  return (
    <div className="space-y-8">
      <article className="prose prose-neutral dark:prose-invert">
        <section>
          <h2 className="h2">Project Overview</h2>
          <p className="p">
            In the fast-paced and often overwhelming world of academics,
            students frequently struggle with time management and maintaining
            productivity due to distractions like social media. Twenify
            addresses these issues head-on by offering a suite of tools that
            boost focus, organization, and motivation.
          </p>
        </section>

        <section>
          <h2 className="h2">The Challenge</h2>
          <p className="p">
            Research indicates over half of college students experience
            significant stress from poor time management, often exacerbated by
            digital distractions like &quot;doom scrolling&quot; on social media
            platforms. The need for a solution that not only helps manage time
            but also enhances focus and motivation was clear.
          </p>
        </section>

        <section>
          <h2 className="h2">Key Features</h2>
          <ul className="ul space-y-4">
            <li>
              <strong>Pomodoro Timer</strong>
              <p>
                Customizable timer based on the Pomodoro Technique encourages
                productivity through structured work-break intervals.
              </p>
            </li>
            <li>
              <strong>Integrated Calendar and To-Do List</strong>
              <p>Provides seamless organization and scheduling.</p>
            </li>
            <li>
              <strong>Website Blocking Tool</strong>
              <p>Helps mitigate distractions during study sessions.</p>
            </li>
            <li>
              <strong>Music Integration</strong>
              <p>Enhances the study environment through Spotify integration.</p>
            </li>
            <li>
              <strong>Gamification</strong>
              <p>
                Features like Productivity Leaderboards and a Tamagotchi-esque
                element make productivity engaging and rewarding.
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="h2">Technical Implementation</h2>
          <p className="p">
            Built with robust technologies like Vue.js for the frontend and
            Firebase for backend operations, Twenify offers a responsive and
            intuitive user interface. These choices ensure a seamless and
            dynamic user experience across various devices and platforms.
          </p>
        </section>

        <section>
          <h2 className="h2">Development Process</h2>
          <p className="p">
            The development of Twenify followed an agile methodology,
            emphasizing rapid prototyping and iterative feedback to refine
            features and meet user needs effectively. This approach allowed us
            to adapt quickly to challenges and incorporate feedback into the
            development process continuously.
          </p>
        </section>

        <section>
          <h2 className="h2">Impact and Future</h2>
          <p className="p">
            Twenify has already shown promising results in helping students
            improve their time management skills and reduce stress. Future
            developments include expanding features such as the Food List and
            Suggest-Tag features, and exploring further integrations to enhance
            the platform&apos;s utility.
          </p>
        </section>
      </article>

      <section aria-label="Project Preview" className="mt-8">
        <h2 className="h2 mb-5">Live Preview</h2>
        <iframe
          src="https://twenity.vercel.app/"
          className="h-[60vh] w-full rounded-md shadow-md"
          title="Twenify Application Preview"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
        />
      </section>
    </div>
  );
}
