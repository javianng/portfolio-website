export default function NetworkingWallpaperProject() {
  return (
    <article className="prose prose-neutral dark:prose-invert">
      <section>
        <h2 className="h2">Project Overview</h2>
        <p className="p">
          The Networking Lock Screen Generator is a web application that helps
          professionals create personalized lock screen wallpapers for
          networking events. It streamlines the process of sharing contact
          information through QR codes while maintaining a professional and
          aesthetic appearance.
        </p>
      </section>

      <section>
        <h2 className="h2">Key Features</h2>
        <ul className="ul space-y-4">
          <li>
            <strong>Custom Lock Screen Generation</strong>
            <p>
              Create personalized lock screens with professional details and
              branding.
            </p>
          </li>
          <li>
            <strong>Multiple QR Code Support</strong>
            <p>
              Add up to 2 QR codes for different platforms (LinkedIn, GitHub,
              Portfolio).
            </p>
          </li>
          <li>
            <strong>Company Logo Integration</strong>
            <p>Upload and display company logos for professional branding.</p>
          </li>
          <li>
            <strong>Multiple Phone Models</strong>
            <p>
              Support for various phone dimensions including iPhone 13, iPhone
              12, Samsung S21, and Google Pixel 5.
            </p>
          </li>
          <li>
            <strong>Real-time Preview</strong>
            <p>
              Instant visualization of changes for a seamless design experience.
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="h2">Technical Implementation</h2>
        <p className="p">
          Built with modern web technologies including React, TypeScript, and
          Next.js, the application offers a robust and responsive user
          experience. The tech stack ensures high performance and
          maintainability:
        </p>
        <ul className="ul space-y-4">
          <li>
            <strong>Frontend Framework</strong>
            <p>React with TypeScript for type-safe development</p>
          </li>
          <li>
            <strong>Styling</strong>
            <p>Tailwind CSS for responsive and maintainable styling</p>
          </li>
          <li>
            <strong>Components</strong>
            <p>Radix UI for accessible, unstyled components</p>
          </li>
          <li>
            <strong>Image Generation</strong>
            <p>html-to-image for converting designs to downloadable images</p>
          </li>
          <li>
            <strong>Analytics</strong>
            <p>Vercel Analytics for tracking usage and performance</p>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="h2">Impact and Future Development</h2>
        <p className="p">
          The Networking Lock Screen Generator addresses the modern
          professional&apos;s need for quick and effective networking tools.
          Future developments will include additional phone models,
          customization options, and integration with more social platforms.
        </p>
      </section>
    </article>
  );
}
