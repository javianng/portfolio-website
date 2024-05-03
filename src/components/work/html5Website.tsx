import Window from "../common/Window";

export default function HTML5Website() {
  return (
    <div className="bg-base-300 mt-9">
      <div className="bg-base-100 flex justify-center">
        <Window>
          <iframe
            src="https://html-portfolio-zeta-self.vercel.app/"
            className="h-[90vh] w-full bg-white"
          />
        </Window>
      </div>
    </div>
  );
}
