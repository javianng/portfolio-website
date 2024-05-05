import Window from "../common/Window";

export default function PhotographyPortfolio() {
  return (
    <div className="bg-base-300 mt-9">
      <div className="bg-base-100 flex justify-center">
        <Window>
          <iframe
            src="https://photography-website-v2.vercel.app/"
            className="h-[90vh] w-full"
          />
        </Window>
      </div>
    </div>
  );
}
